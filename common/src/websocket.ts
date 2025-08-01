import { EventEmitter } from 'events';
import WebSocketClient from 'ws';
import { ClientRequestArgs } from 'http';
import {
    type ConfigurationWebsocketAPI,
    type ConfigurationWebsocketStreams,
    WebsocketApiResponse,
    Logger,
    delay,
    randomString,
    validateTimeUnit,
    buildWebsocketAPIMessage,
} from '.';

export class WebsocketEventEmitter {
    private eventEmitter: EventEmitter;

    constructor() {
        this.eventEmitter = new EventEmitter();
    }

    /* eslint-disable @typescript-eslint/no-explicit-any */
    on(
        event: 'open' | 'message' | 'error' | 'close' | 'ping' | 'pong',
        listener: (...args: any[]) => void
    ): void {
        this.eventEmitter.on(event, listener);
    }

    /* eslint-disable @typescript-eslint/no-explicit-any */
    off(
        event: 'open' | 'message' | 'error' | 'close' | 'ping' | 'pong',
        listener: (...args: any[]) => void
    ): void {
        this.eventEmitter.off(event, listener);
    }

    /* eslint-disable @typescript-eslint/no-explicit-any */
    protected emit(
        event: 'open' | 'message' | 'error' | 'close' | 'ping' | 'pong',
        ...args: any[]
    ): void {
        this.eventEmitter.emit(event, ...args);
    }
}

export interface TimerRecord {
    timer?: NodeJS.Timeout;
    type: 'timeout' | 'interval';
}

export interface WebsocketConnection {
    id: string;
    reconnectionPending: boolean;
    renewalPending: boolean;
    closeInitiated: boolean;
    pendingRequests: Map<
        string,
        { resolve: (value: any) => void; reject: (reason?: unknown) => void }
    >;
    pendingSubscriptions?: string[];
    ws?: WebSocketClient;
    isSessionLoggedOn?: boolean;
    sessionLogonReq?: {
        method: string;
        payload: WebsocketSendMsgOptions;
        options: WebsocketSendMsgConfig;
    };
}

export class WebsocketCommon extends WebsocketEventEmitter {
    private static readonly MAX_CONNECTION_DURATION = 23 * 60 * 60 * 1000;
    private readonly connectionQueue: Array<{
        connection: WebsocketConnection;
        url: string;
        isRenewal: boolean;
    }> = [];
    private queueProcessing: boolean = false;
    protected connectionTimers: Map<WebSocketClient, Set<TimerRecord>> = new Map();
    private mode: 'single' | 'pool';
    private poolSize: number;
    private roundRobinIndex = 0;
    connectionPool: WebsocketConnection[];
    logger: Logger = Logger.getInstance();

    constructor(
        protected configuration: ConfigurationWebsocketAPI | ConfigurationWebsocketStreams,
        connectionPool: WebsocketConnection[] = []
    ) {
        super();
        this.connectionPool = connectionPool;
        this.mode = this.configuration?.mode ?? 'single';
        this.poolSize =
            this.mode === 'pool' && this.configuration?.poolSize ? this.configuration.poolSize : 1;
        if (!connectionPool || connectionPool.length === 0) this.initializePool(this.poolSize);
    }

    /**
     * Initializes the WebSocket connection pool by creating a specified number of connection objects
     * and adding them to the `connectionPool` array. Each connection object has the following properties:
     * - `closeInitiated`: a boolean indicating whether the connection has been closed
     * - `reconnectionPending`: a boolean indicating whether a reconnection is pending
     * - `pendingRequests`: a Map that tracks pending requests for the connection
     * @param size - The number of connection objects to create and add to the pool.
     * @returns void
     */
    private initializePool(size: number): void {
        for (let i = 0; i < size; i++) {
            this.connectionPool.push({
                id: randomString(),
                closeInitiated: false,
                reconnectionPending: false,
                renewalPending: false,
                pendingRequests: new Map(),
                pendingSubscriptions: [],
            });
        }
    }

    /**
     * Retrieves available WebSocket connections based on the connection mode and readiness.
     * In 'single' mode, returns the first connection in the pool.
     * In 'pool' mode, filters and returns connections that are ready for use.
     * @param allowNonEstablishedWebsockets - Optional flag to include non-established WebSocket connections.
     * @returns An array of available WebSocket connections.
     */
    protected getAvailableConnections(
        allowNonEstablishedWebsockets: boolean = false
    ): WebsocketConnection[] {
        if (this.mode === 'single') return [this.connectionPool[0]];

        // Filter connections based on readiness and pending reconnection status
        const availableConnections = this.connectionPool.filter((connection) =>
            this.isConnectionReady(connection, allowNonEstablishedWebsockets)
        );

        return availableConnections;
    }

    /**
     * Gets a WebSocket connection from the pool or single connection.
     * If the connection mode is 'single', it returns the first connection in the pool.
     * If the connection mode is 'pool', it returns an available connection from the pool,
     * using a round-robin selection strategy. If no available connections are found, it throws an error.
     * @param allowNonEstablishedWebsockets - A boolean indicating whether to allow connections that are not established.
     * @returns {WebsocketConnection} The selected WebSocket connection.
     */
    protected getConnection(allowNonEstablishedWebsockets: boolean = false): WebsocketConnection {
        const availableConnections = this.getAvailableConnections(allowNonEstablishedWebsockets);

        if (availableConnections.length === 0) {
            throw new Error('No available Websocket connections are ready.');
        }

        // Select a connection using round-robin algorithm
        const selectedConnection =
            availableConnections[this.roundRobinIndex % availableConnections.length];
        this.roundRobinIndex = (this.roundRobinIndex + 1) % availableConnections.length;
        return selectedConnection!;
    }

    /**
     * Checks if the provided WebSocket connection is ready for use.
     * A connection is considered ready if it is open, has no pending reconnection, and has not been closed.
     * @param connection - The WebSocket connection to check.
     * @param allowNonEstablishedWebsockets - An optional flag to allow non-established WebSocket connections.
     * @returns `true` if the connection is ready, `false` otherwise.
     */
    protected isConnectionReady(
        connection: WebsocketConnection,
        allowNonEstablishedWebsockets: boolean = false
    ): boolean {
        return (
            (allowNonEstablishedWebsockets || connection.ws?.readyState === WebSocketClient.OPEN) &&
            !connection.reconnectionPending &&
            !connection.closeInitiated
        );
    }

    /**
     * Schedules a timer for a WebSocket connection and tracks it
     * @param connection WebSocket client instance
     * @param callback Function to execute when timer triggers
     * @param delay Time in milliseconds before callback execution
     * @param type Timer type ('timeout' or 'interval')
     * @returns Timer handle
     */
    protected scheduleTimer(
        connection: WebSocketClient,
        callback: () => void,
        delay: number,
        type: 'timeout' | 'interval' = 'timeout'
    ): NodeJS.Timeout {
        let timers = this.connectionTimers.get(connection);
        if (!timers) {
            timers = new Set<TimerRecord>();
            this.connectionTimers.set(connection, timers);
        }

        const timerRecord: TimerRecord = { type };

        const wrappedTimeout = () => {
            try {
                callback();
            } finally {
                timers!.delete(timerRecord);
            }
        };

        let timer: NodeJS.Timeout;
        if (type === 'timeout') timer = setTimeout(wrappedTimeout, delay);
        else timer = setInterval(callback, delay);

        timerRecord.timer = timer;
        timers.add(timerRecord);
        return timer;
    }

    /**
     * Clears all timers associated with a WebSocket connection.
     * @param connection - The WebSocket client instance to clear timers for.
     * @returns void
     */
    protected clearTimers(connection: WebSocketClient): void {
        const timers = this.connectionTimers.get(connection);
        if (timers) {
            timers.forEach(({ timer, type }) => {
                if (type === 'timeout') clearTimeout(timer);
                else if (type === 'interval') clearInterval(timer);
            });

            this.connectionTimers.delete(connection);
        }
    }

    /**
     * Processes the connection queue, reconnecting or renewing connections as needed.
     * This method is responsible for iterating through the connection queue and initiating
     * the reconnection or renewal process for each connection in the queue. It throttles
     * the queue processing to avoid overwhelming the server with too many connection
     * requests at once.
     * @param throttleRate - The time in milliseconds to wait between processing each
     * connection in the queue.
     * @returns A Promise that resolves when the queue has been fully processed.
     */
    private async processQueue(throttleRate: number = 1000): Promise<void> {
        if (this.queueProcessing) return;
        this.queueProcessing = true;

        while (this.connectionQueue.length > 0) {
            const { connection, url, isRenewal } = this.connectionQueue.shift()!;
            this.initConnect(url, isRenewal, connection);
            await delay(throttleRate);
        }

        this.queueProcessing = false;
    }

    /**
     * Enqueues a reconnection or renewal for a WebSocket connection.
     * This method adds the connection, URL, and renewal flag to the connection queue,
     * and then calls the `processQueue` method to initiate the reconnection or renewal
     * process.
     * @param connection - The WebSocket connection to reconnect or renew.
     * @param url - The URL to use for the reconnection or renewal.
     * @param isRenewal - A flag indicating whether this is a renewal (true) or a reconnection (false).
     */
    private enqueueReconnection(
        connection: WebsocketConnection,
        url: string,
        isRenewal: boolean
    ): void {
        this.connectionQueue.push({ connection, url, isRenewal });
        this.processQueue();
    }

    /**
     * Gracefully closes a WebSocket connection after pending requests complete.
     * This method waits for any pending requests to complete before closing the connection.
     * It sets up a timeout to force-close the connection after 30 seconds if the pending requests
     * do not complete. Once all pending requests are completed, the connection is closed.
     * @param connectionToClose - The WebSocket client instance to close.
     * @param WebsocketConnectionToClose - The WebSocket connection to close.
     * @param connection - The WebSocket connection to close.
     * @returns Promise that resolves when the connection is closed.
     */
    private async closeConnectionGracefully(
        WebsocketConnectionToClose: WebSocketClient,
        connection: WebsocketConnection
    ): Promise<void> {
        if (!WebsocketConnectionToClose || !connection) return;

        this.logger.debug(
            `Waiting for pending requests to complete before disconnecting websocket on connection ${connection.id}.`
        );

        const closePromise = new Promise<void>((resolve) => {
            this.scheduleTimer(
                WebsocketConnectionToClose,
                () => {
                    this.logger.warn(
                        `Force-closing websocket connection after 30 seconds on connection ${connection.id}.`
                    );
                    resolve();
                },
                30000
            );

            this.scheduleTimer(
                WebsocketConnectionToClose,
                () => {
                    if (connection.pendingRequests.size === 0) {
                        this.logger.debug(
                            `All pending requests completed, closing websocket connection on connection ${connection.id}.`
                        );
                        resolve();
                    }
                },
                1000,
                'interval'
            );
        });

        await closePromise;

        this.logger.info(`Closing Websocket connection on connection ${connection.id}.`);
        WebsocketConnectionToClose.close();
        this.cleanup(WebsocketConnectionToClose);
    }

    /**
     * Attempts to re-establish a session for a WebSocket connection.
     * If a session logon request exists and the connection is not already logged on,
     * it sends an authentication request and updates the connection's logged-on status.
     * @param connection - The WebSocket connection to re-authenticate.
     * @private
     */
    private async sessionReLogon(connection: WebsocketConnection) {
        const req = connection.sessionLogonReq;
        if (req && !connection.isSessionLoggedOn) {
            const data = buildWebsocketAPIMessage(
                this.configuration as ConfigurationWebsocketAPI,
                req.method,
                req.payload,
                req.options
            );

            this.logger.debug(`Session re-logon on connection ${connection.id}`, data);

            try {
                await this.send(
                    JSON.stringify(data),
                    data.id,
                    true,
                    (this.configuration as ConfigurationWebsocketAPI).timeout,
                    connection
                );
                this.logger.debug(
                    `Session re-logon on connection ${connection.id} was successful.`
                );
                connection.isSessionLoggedOn = true;
            } catch (err) {
                this.logger.error(`Session re-logon on connection ${connection.id} failed:`, err);
            }
        }
    }

    /**
     * Cleans up WebSocket connection resources.
     * Removes all listeners and clears any associated timers for the provided WebSocket client.
     * @param ws - The WebSocket client to clean up.
     * @returns void
     */
    protected cleanup(ws: WebSocketClient): void {
        if (ws) {
            ws.removeAllListeners();
            this.clearTimers(ws);
        }
    }

    /**
     * Handles incoming WebSocket messages
     * @param data Raw message data received
     * @param connection Websocket connection
     */
    protected onMessage(data: string, connection: WebsocketConnection): void {
        this.emit('message', data.toString(), connection);
    }

    /**
     * Handles the opening of a WebSocket connection.
     * @param url - The URL of the WebSocket server.
     * @param targetConnection - The WebSocket connection being opened.
     * @param oldWSConnection - The WebSocket client instance associated with the old connection.
     */
    protected onOpen(
        url: string,
        targetConnection: WebsocketConnection,
        oldWSConnection: WebSocketClient
    ): void {
        this.logger.info(
            `Connected to the Websocket Server with id ${targetConnection.id}: ${url}`
        );
        if (targetConnection.renewalPending) {
            targetConnection.renewalPending = false;
            this.closeConnectionGracefully(oldWSConnection, targetConnection);
        } else if (targetConnection.closeInitiated) {
            this.closeConnectionGracefully(targetConnection.ws!, targetConnection);
        } else {
            this.emit('open', this);
        }
        this.sessionReLogon(targetConnection);
    }

    /**
     * Returns the URL to use when reconnecting.
     * Derived classes should override this to provide dynamic URLs.
     * @param defaultURL The URL originally passed during the first connection.
     * @param targetConnection The WebSocket connection being connected.
     * @returns The URL to reconnect to.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected getReconnectURL(defaultURL: string, targetConnection: WebsocketConnection): string {
        return defaultURL;
    }

    /**
     * Connects all WebSocket connections in the pool
     * @param url - The Websocket server URL.
     * @returns A promise that resolves when all connections are established.
     */
    protected async connectPool(url: string): Promise<void> {
        const connectPromises = this.connectionPool.map(
            (connection) =>
                new Promise<void>((resolve, reject) => {
                    this.initConnect(url, false, connection);

                    connection.ws?.on('open', () => resolve());
                    connection.ws?.on('error', (err) => reject(err));
                    connection.ws?.on('close', () =>
                        reject(new Error('Connection closed unexpectedly.'))
                    );
                })
        );
        await Promise.all(connectPromises);
    }

    /**
     * Creates a new WebSocket client instance.
     * @param url - The URL to connect to.
     * @returns A new WebSocket client instance.
     */
    protected createWebSocket(url: string): WebSocketClient {
        const wsClientOptions: WebSocketClient.ClientOptions | ClientRequestArgs = {
            perMessageDeflate: this.configuration?.compression,
            agent: this.configuration?.agent,
        };
        if (this.configuration.userAgent)
            wsClientOptions.headers = { 'User-Agent': this.configuration.userAgent };

        return new WebSocketClient(url, wsClientOptions);
    }

    /**
     * Initializes a WebSocket connection.
     * @param url - The Websocket server URL.
     * @param isRenewal - Whether this is a connection renewal.
     * @param connection - An optional WebSocket connection to use.
     * @returns The WebSocket connection.
     */
    protected initConnect(
        url: string,
        isRenewal: boolean = false,
        connection?: WebsocketConnection
    ) {
        const targetConnection = connection || this.getConnection();

        if (targetConnection.renewalPending && isRenewal) {
            this.logger.warn(
                `Connection renewal with id ${targetConnection.id} is already in progress`
            );
            return;
        }

        if (
            targetConnection.ws &&
            targetConnection.ws.readyState === WebSocketClient.OPEN &&
            !isRenewal
        ) {
            this.logger.warn(`Connection with id ${targetConnection.id} already exists`);
            return;
        }

        const ws = this.createWebSocket(url);

        this.logger.info(
            `Establishing Websocket connection with id ${targetConnection.id} to: ${url}`
        );

        if (isRenewal) targetConnection.renewalPending = true;
        else targetConnection.ws = ws;

        targetConnection.isSessionLoggedOn = false;

        this.scheduleTimer(
            ws,
            () => {
                this.logger.info(`Renewing Websocket connection with id ${targetConnection.id}`);
                targetConnection.isSessionLoggedOn = false;
                this.enqueueReconnection(
                    targetConnection,
                    this.getReconnectURL(url, targetConnection),
                    true
                );
            },
            WebsocketCommon.MAX_CONNECTION_DURATION
        );

        ws.on('open', () => {
            const oldWSConnection = targetConnection.ws;
            if (targetConnection.renewalPending) targetConnection.ws = ws;
            this.onOpen(url, targetConnection, oldWSConnection!);
        });

        ws.on('message', (data: WebSocketClient.Data) => {
            this.onMessage(data.toString(), targetConnection);
        });

        ws.on('ping', () => {
            this.logger.debug('Received PING from server');
            this.emit('ping');
            ws.pong();
            this.logger.debug('Responded PONG to server\'s PING message');
        });

        ws.on('pong', () => {
            this.logger.debug('Received PONG from server');
            this.emit('pong');
        });

        ws.on('error', (err) => {
            this.logger.error('Received error from server');
            this.logger.error(err);
            this.emit('error', err);
        });

        ws.on('close', (closeEventCode, reason) => {
            this.emit('close', closeEventCode, reason);

            if (!targetConnection.closeInitiated && !isRenewal) {
                this.logger.warn(
                    `Connection with id ${targetConnection.id} closed due to ${closeEventCode}: ${reason}`
                );
                this.scheduleTimer(
                    ws,
                    () => {
                        this.logger.info(
                            `Reconnecting conection with id ${targetConnection.id} to the server.`
                        );
                        targetConnection.isSessionLoggedOn = false;
                        targetConnection.reconnectionPending = true;
                        this.enqueueReconnection(
                            targetConnection,
                            this.getReconnectURL(url, targetConnection),
                            false
                        );
                    },
                    this.configuration?.reconnectDelay ?? 5000
                );
            }
        });

        return targetConnection;
    }

    /**
     * Checks if the WebSocket connection is currently open.
     * @param connection - An optional WebSocket connection to check. If not provided, the entire connection pool is checked.
     * @returns `true` if the connection is open, `false` otherwise.
     */
    isConnected(connection?: WebsocketConnection): boolean {
        const connectionPool = connection ? [connection] : this.connectionPool;
        return connectionPool.some((connection) => this.isConnectionReady(connection));
    }

    /**
     * Disconnects from the WebSocket server.
     * If there is no active connection, a warning is logged.
     * Otherwise, all connections in the connection pool are closed gracefully,
     * and a message is logged indicating that the connection has been disconnected.
     * @returns A Promise that resolves when all connections have been closed.
     * @throws Error if the WebSocket client is not set.
     */
    async disconnect(): Promise<void> {
        if (!this.isConnected()) this.logger.warn('No connection to close.');
        else {
            this.connectionPool.forEach((connection) => {
                connection.closeInitiated = true;
                connection.isSessionLoggedOn = false;
                connection.sessionLogonReq = undefined;
            });

            const disconnectPromises = this.connectionPool.map((connection: WebsocketConnection) =>
                this.closeConnectionGracefully(connection.ws!, connection)
            );

            await Promise.all(disconnectPromises);
            this.logger.info('Disconnected with Binance Websocket Server');
        }
    }

    /**
     * Sends a ping message to all connected Websocket servers in the pool.
     * If no connections are ready, a warning is logged.
     * For each active connection, the ping message is sent, and debug logs provide details.
     * @throws Error if a Websocket client is not set for a connection.
     */
    pingServer(): void {
        const connectedConnections = this.connectionPool.filter((connection) =>
            this.isConnected(connection)
        );

        if (connectedConnections.length === 0) {
            this.logger.warn('Ping only can be sent when connection is ready.');
            return;
        }

        this.logger.debug('Sending PING to all connected Websocket servers.');

        connectedConnections.forEach((connection) => {
            if (connection.ws) {
                connection.ws.ping();
                this.logger.debug(`PING sent to connection with id ${connection.id}`);
            } else {
                this.logger.error('WebSocket Client not set for a connection.');
            }
        });
    }

    /**
     * Sends a payload through the WebSocket connection.
     * @param payload - Message to send.
     * @param id - Optional request identifier.
     * @param promiseBased - Whether to return a promise.
     * @param timeout - Timeout duration in milliseconds.
     * @param connection - The WebSocket connection to use.
     * @returns A promise if `promiseBased` is true, void otherwise.
     * @throws Error if not connected or WebSocket client is not set.
     */
    protected send<T = unknown>(
        payload: string,
        id?: string,
        promiseBased: boolean = true,
        timeout: number = 5000,
        connection?: WebsocketConnection
    ): Promise<WebsocketApiResponse<T>> | void {
        if (!this.isConnected(connection)) {
            const errorMsg = 'Unable to send message — connection is not available.';
            this.logger.warn(errorMsg);
            if (promiseBased) return Promise.reject(new Error(errorMsg));
            else throw new Error(errorMsg);
        }

        const connectionToUse: WebsocketConnection = connection ?? this.getConnection();

        if (!connectionToUse.ws) {
            const errorMsg = 'Websocket Client not set';
            this.logger.error(errorMsg);
            if (promiseBased) return Promise.reject(new Error(errorMsg));
            else throw new Error(errorMsg);
        }

        connectionToUse.ws.send(payload);

        if (promiseBased) {
            return new Promise<WebsocketApiResponse<T>>((resolve, reject) => {
                if (!id) return reject(new Error('id is required for promise-based sending.'));

                const timeoutHandle = setTimeout(() => {
                    if (connectionToUse.pendingRequests.has(id)) {
                        connectionToUse.pendingRequests.delete(id);
                        reject(new Error(`Request timeout for id: ${id}`));
                    }
                }, timeout);

                connectionToUse.pendingRequests.set(id, {
                    resolve: (v) => {
                        clearTimeout(timeoutHandle);
                        resolve(v);
                    },
                    reject: (e) => {
                        clearTimeout(timeoutHandle);
                        reject(e);
                    },
                });
            });
        }
    }
}

export interface WebsocketSendMsgOptions {
    id?: string;
    [key: string]: string | number | boolean | object | undefined;
}

export interface WebsocketSendMsgConfig {
    withApiKey?: boolean;
    isSigned?: boolean;
    isSessionLogon?: boolean;
    isSessionLogout?: boolean;
}

export class WebsocketAPIBase extends WebsocketCommon {
    private isConnecting: boolean = false;
    streamCallbackMap: Map<string, Set<(data: unknown) => void>> = new Map();
    configuration: ConfigurationWebsocketAPI;
    logger: Logger = Logger.getInstance();

    constructor(
        configuration: ConfigurationWebsocketAPI,
        connectionPool: WebsocketConnection[] = []
    ) {
        super(configuration, connectionPool);
        this.configuration = configuration;
    }

    /**
     * Prepares the WebSocket URL by adding optional timeUnit parameter
     * @param wsUrl The base WebSocket URL
     * @returns The formatted WebSocket URL with parameters
     */
    private prepareURL(wsUrl: string): string {
        let url = wsUrl;
        if (this?.configuration.timeUnit) {
            try {
                const _timeUnit = validateTimeUnit(this.configuration.timeUnit);
                url = `${url}${url.includes('?') ? '&' : '?'}timeUnit=${_timeUnit}`;
            } catch (err) {
                this.logger.error(err);
            }
        }
        return url;
    }

    /**
     * Processes incoming WebSocket messages
     * @param data The raw message data received
     */
    protected onMessage<T>(data: string, connection: WebsocketConnection): void {
        try {
            const message = JSON.parse(data);
            const { id, status } = message;

            if (id && connection.pendingRequests.has(id)) {
                const request = connection.pendingRequests.get(id);
                connection.pendingRequests.delete(id);

                if (status && status >= 400) {
                    request?.reject(message.error);
                } else {
                    const response: WebsocketApiResponse<T> = {
                        data: message.result ?? message.response,
                        ...(message.rateLimits && { rateLimits: message.rateLimits }),
                    };
                    request?.resolve(response);
                }
            } else if (
                'event' in message &&
                'e' in message['event'] &&
                this.streamCallbackMap.size > 0
            ) {
                // Handle user data stream messages (currently with no ID we send the message to all registered callbacks)
                this.streamCallbackMap.forEach((callbacks) =>
                    callbacks.forEach((callback) => callback(message['event']))
                );
            } else {
                this.logger.warn('Received response for unknown or timed-out request:', message);
            }
        } catch (error) {
            this.logger.error('Failed to parse WebSocket message:', data, error);
        }

        super.onMessage(data, connection);
    }

    /**
     * Establishes a WebSocket connection to Binance
     * @returns Promise that resolves when connection is established
     * @throws Error if connection times out
     */
    connect(): Promise<void> {
        if (this.isConnected()) {
            this.logger.info('WebSocket connection already established');
            return Promise.resolve();
        }

        return new Promise((resolve, reject) => {
            if (this.isConnecting) return;

            this.isConnecting = true;

            const timeout = setTimeout(() => {
                this.isConnecting = false;
                reject(new Error('Websocket connection timed out'));
            }, 10000);

            this.connectPool(this.prepareURL(this.configuration.wsURL as string))
                .then(() => {
                    this.isConnecting = false;
                    resolve();
                })
                .catch((error) => {
                    this.isConnecting = false;
                    reject(error);
                })
                .finally(() => {
                    clearTimeout(timeout);
                });
        });
    }

    sendMessage<T>(
        method: string,
        payload: WebsocketSendMsgOptions,
        options: WebsocketSendMsgConfig & { isSessionLogon: true }
    ): Promise<WebsocketApiResponse<T>[]>;

    sendMessage<T>(
        method: string,
        payload: WebsocketSendMsgOptions,
        options: WebsocketSendMsgConfig & { isSessionLogout: true }
    ): Promise<WebsocketApiResponse<T>[]>;

    sendMessage<T>(
        method: string,
        payload?: WebsocketSendMsgOptions,
        options?: WebsocketSendMsgConfig
    ): Promise<WebsocketApiResponse<T>>;

    async sendMessage<T>(
        method: string,
        payload: WebsocketSendMsgOptions = {},
        options: WebsocketSendMsgConfig = {}
    ): Promise<WebsocketApiResponse<T> | WebsocketApiResponse<T>[]> {
        if (!this.isConnected()) {
            throw new Error('Not connected');
        }

        const isSessionReq = options.isSessionLogon || options.isSessionLogout;

        const connections: WebsocketConnection[] = isSessionReq
            ? this.getAvailableConnections()
            : [this.getConnection()];

        const skipAuth = isSessionReq
            ? false
            : this.configuration.autoSessionReLogon && connections[0].isSessionLoggedOn;

        const data = buildWebsocketAPIMessage(
            this.configuration,
            method,
            payload,
            options,
            skipAuth
        );

        this.logger.debug('Send message to Binance WebSocket API Server:', data);

        const responses = await Promise.all(
            connections.map(
                (connection) =>
                    this.send<T>(
                        JSON.stringify(data),
                        data.id,
                        true,
                        this.configuration.timeout,
                        connection
                    ) as Promise<WebsocketApiResponse<T>>
            )
        );

        if (isSessionReq && this.configuration.autoSessionReLogon) {
            connections.forEach((connection) => {
                if (options.isSessionLogon) {
                    connection.isSessionLoggedOn = true;
                    connection.sessionLogonReq = { method, payload, options };
                } else {
                    connection.isSessionLoggedOn = false;
                    connection.sessionLogonReq = undefined;
                }
            });
        }

        return connections.length === 1 && !isSessionReq ? responses[0] : responses;
    }
}

export class WebsocketStreamsBase extends WebsocketCommon {
    private streamConnectionMap: Map<string, WebsocketConnection> = new Map();
    protected configuration: ConfigurationWebsocketStreams;
    protected wsURL: string;
    streamCallbackMap: Map<string, Set<(data: unknown) => void>> = new Map();
    logger: Logger = Logger.getInstance();

    constructor(
        configuration: ConfigurationWebsocketStreams,
        connectionPool: WebsocketConnection[] = []
    ) {
        super(configuration, connectionPool);
        this.configuration = configuration;
        this.wsURL = configuration.wsURL as string;
    }

    /**
     * Formats the WebSocket URL for a given stream or streams.
     * @param streams - Array of stream names to include in the URL.
     * @returns The formatted WebSocket URL with the provided streams.
     */
    private prepareURL(streams: string[] = []): string {
        let url = `${this.wsURL}/stream?streams=${streams.join('/')}`;

        if (this.configuration?.timeUnit) {
            try {
                const _timeUnit = validateTimeUnit(this.configuration.timeUnit);
                url = `${url}${url.includes('?') ? '&' : '?'}timeUnit=${_timeUnit}`;
            } catch (err) {
                this.logger.error(err);
            }
        }

        return url;
    }

    /**
     * Formats the WebSocket URL with stream and configuration parameters to be used for reconnection.
     * @param url - The base WebSocket URL.
     * @param targetConnection - The target WebSocket connection.
     * @returns The formatted WebSocket URL with streams and optional parameters.
     */
    protected getReconnectURL(url: string, targetConnection: WebsocketConnection): string {
        const streams = Array.from(this.streamConnectionMap.keys()).filter(
            (stream) => this.streamConnectionMap.get(stream) === targetConnection
        );
        return this.prepareURL(streams);
    }

    /**
     * Handles subscription to streams and assigns them to specific connections
     * @param streams Array of stream names to subscribe to
     * @returns Map of connections to streams
     */
    private handleStreamAssignment(streams: string[]): Map<WebsocketConnection, string[]> {
        const connectionStreamMap = new Map<WebsocketConnection, string[]>();

        streams.forEach((stream) => {
            if (!this.streamCallbackMap.has(stream)) this.streamCallbackMap.set(stream, new Set());

            let connection = this.streamConnectionMap.get(stream);

            if (!connection || connection.closeInitiated || connection.reconnectionPending) {
                connection = this.getConnection(true);
                this.streamConnectionMap.set(stream, connection);
            }

            if (!connectionStreamMap.has(connection)) connectionStreamMap.set(connection, []);

            connectionStreamMap.get(connection)?.push(stream);
        });

        return connectionStreamMap;
    }

    /**
     * Sends a subscription payload for specified streams on a given connection.
     * @param connection The WebSocket connection to use for sending the subscription.
     * @param streams The streams to subscribe to.
     * @param id Optional ID for the subscription.
     */
    private sendSubscriptionPayload(
        connection: WebsocketConnection,
        streams: string[],
        id?: string
    ): void {
        const payload = {
            method: 'SUBSCRIBE',
            params: streams,
            id: id && /^[0-9a-f]{32}$/.test(id) ? id : randomString(),
        };
        this.logger.debug('SUBSCRIBE', payload);
        this.send(JSON.stringify(payload), undefined, false, 0, connection);
    }

    /**
     * Processes pending subscriptions for a given connection.
     * Sends all queued subscriptions in a single payload.
     * @param connection The WebSocket connection to process.
     */
    private processPendingSubscriptions(connection: WebsocketConnection): void {
        if (connection.pendingSubscriptions && connection.pendingSubscriptions.length > 0) {
            this.logger.info('Processing queued subscriptions for connection');
            this.sendSubscriptionPayload(connection, connection.pendingSubscriptions);
            connection.pendingSubscriptions = [];
        }
    }

    /**
     * Handles incoming WebSocket messages, parsing the data and invoking the appropriate callback function.
     * If the message contains a stream name that is registered in the `streamCallbackMap`, the corresponding
     * callback function is called with the message data.
     * If the message cannot be parsed, an error is logged.
     * @param data The raw WebSocket message data.
     * @param connection The WebSocket connection that received the message.
     */
    protected onMessage(data: string, connection: WebsocketConnection): void {
        try {
            const parsedData = JSON.parse(data);
            const streamName = parsedData?.stream;

            if (streamName && this.streamCallbackMap.has(streamName))
                this.streamCallbackMap
                    .get(streamName)
                    ?.forEach((callback) => callback(parsedData.data));
        } catch (error) {
            this.logger.error('Failed to parse WebSocket message:', data, error);
        }

        super.onMessage(data, connection);
    }

    /**
     * Called when the WebSocket connection is opened.
     * Processes any pending subscriptions for the target connection.
     * @param url The URL of the WebSocket connection.
     * @param targetConnection The WebSocket connection that was opened.
     * @param oldConnection The previous WebSocket connection, if any.
     */
    protected onOpen(
        url: string,
        targetConnection: WebsocketConnection,
        oldWSConnection: WebSocketClient
    ): void {
        this.processPendingSubscriptions(targetConnection);
        super.onOpen(url, targetConnection, oldWSConnection);
    }

    /**
     * Connects to the WebSocket server and subscribes to the specified streams.
     * This method returns a Promise that resolves when the connection is established,
     * or rejects with an error if the connection fails to be established within 10 seconds.
     * @param stream - A single stream name or an array of stream names to subscribe to.
     * @returns A Promise that resolves when the connection is established.
     */
    connect(stream: string | string[] = []): Promise<void> {
        const streams = Array.isArray(stream) ? stream : [stream];

        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject(new Error('Websocket connection timed out'));
            }, 10000);

            this.connectPool(this.prepareURL(streams))
                .then(() => resolve())
                .catch((error) => reject(error))
                .finally(() => clearTimeout(timeout));
        });
    }

    /**
     * Disconnects the WebSocket connection and clears the stream callback map.
     * This method is called to clean up the connection and associated resources.
     */
    async disconnect(): Promise<void> {
        this.streamCallbackMap.clear();
        this.streamConnectionMap.clear();
        super.disconnect();
    }

    /**
     * Subscribes to one or multiple WebSocket streams
     * Handles both single and pool modes
     * @param stream Single stream name or array of stream names to subscribe to
     * @param id Optional subscription ID
     * @returns void
     */
    subscribe(stream: string | string[], id?: string): void {
        const streams = (Array.isArray(stream) ? stream : [stream]).filter(
            (stream) => !this.streamConnectionMap.has(stream)
        );
        const connectionStreamMap = this.handleStreamAssignment(streams);

        connectionStreamMap.forEach((streams, connection) => {
            if (!this.isConnected(connection)) {
                this.logger.info(
                    `Connection ${connection.id} is not ready. Queuing subscription for streams: ${streams}`
                );
                connection.pendingSubscriptions?.push(...streams);

                return;
            }

            this.sendSubscriptionPayload(connection, streams, id);
        });
    }

    /**
     * Unsubscribes from one or multiple WebSocket streams
     * Handles both single and pool modes
     * @param stream Single stream name or array of stream names to unsubscribe from
     * @param id Optional unsubscription ID
     * @returns void
     */
    unsubscribe(stream: string | string[], id?: string): void {
        const streams = Array.isArray(stream) ? stream : [stream];

        streams.forEach((stream) => {
            const connection = this.streamConnectionMap.get(stream);
            if (!connection || !connection.ws || !this.isConnected(connection)) {
                this.logger.warn(`Stream ${stream} not associated with an active connection.`);
                return;
            }

            if (
                !this.streamCallbackMap.has(stream) ||
                this.streamCallbackMap.get(stream)?.size === 0
            ) {
                const payload = {
                    method: 'UNSUBSCRIBE',
                    params: [stream],
                    id: id && /^[0-9a-f]{32}$/.test(id) ? id : randomString(),
                };
                this.logger.debug('UNSUBSCRIBE', payload);
                this.send(JSON.stringify(payload), undefined, false, 0, connection);

                this.streamConnectionMap.delete(stream);
                this.streamCallbackMap.delete(stream);
            }
        });
    }

    /**
     * Checks if the specified stream is currently subscribed.
     * @param stream - The name of the stream to check.
     * @returns `true` if the stream is currently subscribed, `false` otherwise.
     */
    isSubscribed(stream: string): boolean {
        return this.streamConnectionMap.has(stream);
    }
}

export interface WebsocketStream<T> {
    /**
     * Attach a listener for the stream.
     * @param event - Event name (currently supports "message").
     * @param callback - Callback function to handle incoming data.
     */
    on(event: 'message', callback: (data: T) => void | Promise<void>): void;

    /**
     * Unsubscribe from the stream and clean up resources.
     */
    unsubscribe(): void;
}

/**
 * Creates a WebSocket stream handler for managing stream subscriptions and callbacks.
 *
 * @template T The type of data expected in the stream messages
 * @param {WebsocketAPIBase | WebsocketStreamsBase} websocketBase The WebSocket base instance
 * @param {string} streamOrId The stream identifier
 * @param {string} [id] Optional additional identifier
 * @returns {WebsocketStream<T>} A stream handler with methods to register callbacks and unsubscribe
 */
export function createStreamHandler<T>(
    websocketBase: WebsocketAPIBase | WebsocketStreamsBase,
    streamOrId: string,
    id?: string
): WebsocketStream<T> {
    if (websocketBase instanceof WebsocketStreamsBase) websocketBase.subscribe(streamOrId, id);

    let registeredCallback: (data: unknown) => void;
    return {
        on: (event: 'message', callback: (data: T) => void | Promise<void>) => {
            if (event === 'message') {
                registeredCallback = (data: unknown) => {
                    Promise.resolve(callback(data as T)).catch((err) => {
                        websocketBase.logger.error(`Error in stream callback: ${err}`);
                    });
                };
                const callbackSet = websocketBase.streamCallbackMap.get(streamOrId) ?? new Set();
                callbackSet.add(registeredCallback);
                websocketBase.streamCallbackMap.set(streamOrId, callbackSet);
            }
        },
        unsubscribe: () => {
            if (registeredCallback)
                websocketBase.streamCallbackMap.get(streamOrId)?.delete(registeredCallback);
            if (websocketBase instanceof WebsocketStreamsBase)
                websocketBase.unsubscribe(streamOrId, id);
        },
    };
}
