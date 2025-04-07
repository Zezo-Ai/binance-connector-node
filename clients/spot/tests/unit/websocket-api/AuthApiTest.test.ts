/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Binance Spot WebSocket API
 *
 * OpenAPI Specifications for the Binance Spot WebSocket API
 *
 * API documents:
 * - [Github web-socket-api documentation file](https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-api.md)
 * - [General API information for web-socket-api on website](https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/general-api-information)
 *
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import WebSocketClient from 'ws';
import { EventEmitter } from 'events';
import { jest, expect, beforeEach, afterEach, describe, it } from '@jest/globals';
import { ConfigurationWebsocketAPI, WebsocketAPIBase, randomString } from '@binance/common';

import { AuthApi } from '../../../src/websocket-api';

jest.mock('ws');

describe('AuthApi', () => {
    let websocketBase: WebsocketAPIBase;
    let websocketAPIClient: AuthApi;
    let mockWs: jest.Mocked<WebSocketClient> & EventEmitter;
    let mockResponse: {
        id?: string;
        status?: number;
        result?: object | null;
        response?: object | null;
        error?: {
            code?: number;
            msg?: string;
        };
        rateLimits?: object[];
    } = {};

    describe('sessionLogon()', () => {
        beforeEach(async () => {
            mockWs = Object.assign(new EventEmitter(), {
                close: jest.fn(),
                ping: jest.fn(),
                pong: jest.fn(),
                send: jest.fn(),
                readyState: WebSocketClient.OPEN,
                OPEN: WebSocket.OPEN,
                CLOSED: WebSocket.CLOSED,
            }) as unknown as jest.Mocked<WebSocketClient> & EventEmitter;

            (WebSocketClient as jest.MockedClass<typeof WebSocketClient>).mockImplementation(
                () => mockWs
            );

            const config = new ConfigurationWebsocketAPI({
                apiKey: 'test-api-key',
                apiSecret: 'test-api-secret',
                wsURL: 'ws://localhost:3000',
                timeout: 1000,
            });

            websocketBase = new WebsocketAPIBase(config);
            websocketBase.connect();
        });

        afterEach(async () => {
            if (websocketBase) {
                await websocketBase.disconnect();
            }
            jest.clearAllMocks();
            jest.clearAllTimers();
        });

        it('should execute sessionLogon() successfully', async () => {
            mockResponse = {
                id: 'c174a2b1-3f51-4580-b200-8528bd237cb7',
                status: 200,
                result: {
                    apiKey: 'vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A',
                    authorizedSince: 1649729878532,
                    connectedSince: 1649729873021,
                    returnRateLimits: false,
                    serverTime: 1649729878630,
                    userDataStream: true,
                },
            };
            mockResponse.id = randomString();

            let resolveTest: (value: unknown) => void;
            const testComplete = new Promise((resolve) => {
                resolveTest = resolve;
            });

            websocketBase.on('open', async (conn: WebsocketAPIBase) => {
                try {
                    websocketAPIClient = new AuthApi(conn);
                    const sendMsgSpy = jest.spyOn(conn, 'sendMessage');
                    const responsePromise = websocketAPIClient.sessionLogon({
                        id: mockResponse?.id,
                    });
                    mockWs.emit('message', JSON.stringify(mockResponse));
                    const response = await responsePromise;
                    expect(response.data).toEqual(mockResponse.result);
                    expect(response.rateLimits).toEqual(mockResponse.rateLimits);
                    expect(sendMsgSpy).toHaveBeenCalledWith(
                        '/session.logon'.slice(1),
                        expect.any(Object),
                        { isSigned: true, withApiKey: false }
                    );
                    resolveTest(true);
                } catch (error) {
                    resolveTest(error);
                }
            });
            mockWs.emit('open');

            const result = await testComplete;
            if (result instanceof Error) {
                throw result;
            }
        });

        it('should handle server error responses gracefully', async () => {
            mockResponse = {
                id: randomString(),
                status: 400,
                error: {
                    code: -2010,
                    msg: 'Account has insufficient balance for requested action.',
                },
                rateLimits: [
                    {
                        rateLimitType: 'ORDERS',
                        interval: 'SECOND',
                        intervalNum: 10,
                        limit: 50,
                        count: 13,
                    },
                ],
            };

            let resolveTest: (value: unknown) => void;
            const testComplete = new Promise((resolve) => {
                resolveTest = resolve;
            });

            websocketBase.on('open', async (conn: WebsocketAPIBase) => {
                try {
                    websocketAPIClient = new AuthApi(conn);
                    const responsePromise = websocketAPIClient.sessionLogon({
                        id: mockResponse?.id,
                    });
                    mockWs.emit('message', JSON.stringify(mockResponse));
                    await expect(responsePromise).rejects.toMatchObject(mockResponse.error!);
                    resolveTest(true);
                } catch (error) {
                    resolveTest(error);
                }
            });
            mockWs.emit('open');

            const result = await testComplete;
            if (result instanceof Error) {
                throw result;
            }
        });

        it('should handle request timeout gracefully', async () => {
            jest.useRealTimers();

            let resolveTest: (value: unknown) => void;
            const testComplete = new Promise((resolve) => {
                resolveTest = resolve;
            });

            websocketBase.on('open', async (conn: WebsocketAPIBase) => {
                try {
                    websocketAPIClient = new AuthApi(websocketBase);
                    const responsePromise = websocketAPIClient.sessionLogon();
                    await expect(responsePromise).rejects.toThrow(/^Request timeout for id:/);
                    resolveTest(true);
                } catch (error) {
                    resolveTest(error);
                }
            });
            mockWs.emit('open');

            const result = await testComplete;
            if (result instanceof Error) {
                throw result;
            }
        }, 10000);
    });

    describe('sessionLogout()', () => {
        beforeEach(async () => {
            mockWs = Object.assign(new EventEmitter(), {
                close: jest.fn(),
                ping: jest.fn(),
                pong: jest.fn(),
                send: jest.fn(),
                readyState: WebSocketClient.OPEN,
                OPEN: WebSocket.OPEN,
                CLOSED: WebSocket.CLOSED,
            }) as unknown as jest.Mocked<WebSocketClient> & EventEmitter;

            (WebSocketClient as jest.MockedClass<typeof WebSocketClient>).mockImplementation(
                () => mockWs
            );

            const config = new ConfigurationWebsocketAPI({
                apiKey: 'test-api-key',
                apiSecret: 'test-api-secret',
                wsURL: 'ws://localhost:3000',
                timeout: 1000,
            });

            websocketBase = new WebsocketAPIBase(config);
            websocketBase.connect();
        });

        afterEach(async () => {
            if (websocketBase) {
                await websocketBase.disconnect();
            }
            jest.clearAllMocks();
            jest.clearAllTimers();
        });

        it('should execute sessionLogout() successfully', async () => {
            mockResponse = {
                id: 'c174a2b1-3f51-4580-b200-8528bd237cb7',
                status: 200,
                result: {
                    apiKey: 'CAvIjXy3F44yW6Pou5k8Dy1swsYDWJZLeoK2r8G4cFDnE9nosRppc2eKc1T8TRTQ',
                    authorizedSince: 1649729878532,
                    connectedSince: 1649729873021,
                    returnRateLimits: false,
                    serverTime: 1649730611671,
                    userDataStream: true,
                },
            };
            mockResponse.id = randomString();

            let resolveTest: (value: unknown) => void;
            const testComplete = new Promise((resolve) => {
                resolveTest = resolve;
            });

            websocketBase.on('open', async (conn: WebsocketAPIBase) => {
                try {
                    websocketAPIClient = new AuthApi(conn);
                    const sendMsgSpy = jest.spyOn(conn, 'sendMessage');
                    const responsePromise = websocketAPIClient.sessionLogout({
                        id: mockResponse?.id,
                    });
                    mockWs.emit('message', JSON.stringify(mockResponse));
                    const response = await responsePromise;
                    expect(response.data).toEqual(mockResponse.result);
                    expect(response.rateLimits).toEqual(mockResponse.rateLimits);
                    expect(sendMsgSpy).toHaveBeenCalledWith(
                        '/session.logout'.slice(1),
                        expect.any(Object),
                        { isSigned: false, withApiKey: false }
                    );
                    resolveTest(true);
                } catch (error) {
                    resolveTest(error);
                }
            });
            mockWs.emit('open');

            const result = await testComplete;
            if (result instanceof Error) {
                throw result;
            }
        });

        it('should handle server error responses gracefully', async () => {
            mockResponse = {
                id: randomString(),
                status: 400,
                error: {
                    code: -2010,
                    msg: 'Account has insufficient balance for requested action.',
                },
                rateLimits: [
                    {
                        rateLimitType: 'ORDERS',
                        interval: 'SECOND',
                        intervalNum: 10,
                        limit: 50,
                        count: 13,
                    },
                ],
            };

            let resolveTest: (value: unknown) => void;
            const testComplete = new Promise((resolve) => {
                resolveTest = resolve;
            });

            websocketBase.on('open', async (conn: WebsocketAPIBase) => {
                try {
                    websocketAPIClient = new AuthApi(conn);
                    const responsePromise = websocketAPIClient.sessionLogout({
                        id: mockResponse?.id,
                    });
                    mockWs.emit('message', JSON.stringify(mockResponse));
                    await expect(responsePromise).rejects.toMatchObject(mockResponse.error!);
                    resolveTest(true);
                } catch (error) {
                    resolveTest(error);
                }
            });
            mockWs.emit('open');

            const result = await testComplete;
            if (result instanceof Error) {
                throw result;
            }
        });

        it('should handle request timeout gracefully', async () => {
            jest.useRealTimers();

            let resolveTest: (value: unknown) => void;
            const testComplete = new Promise((resolve) => {
                resolveTest = resolve;
            });

            websocketBase.on('open', async (conn: WebsocketAPIBase) => {
                try {
                    websocketAPIClient = new AuthApi(websocketBase);
                    const responsePromise = websocketAPIClient.sessionLogout();
                    await expect(responsePromise).rejects.toThrow(/^Request timeout for id:/);
                    resolveTest(true);
                } catch (error) {
                    resolveTest(error);
                }
            });
            mockWs.emit('open');

            const result = await testComplete;
            if (result instanceof Error) {
                throw result;
            }
        }, 10000);
    });

    describe('sessionStatus()', () => {
        beforeEach(async () => {
            mockWs = Object.assign(new EventEmitter(), {
                close: jest.fn(),
                ping: jest.fn(),
                pong: jest.fn(),
                send: jest.fn(),
                readyState: WebSocketClient.OPEN,
                OPEN: WebSocket.OPEN,
                CLOSED: WebSocket.CLOSED,
            }) as unknown as jest.Mocked<WebSocketClient> & EventEmitter;

            (WebSocketClient as jest.MockedClass<typeof WebSocketClient>).mockImplementation(
                () => mockWs
            );

            const config = new ConfigurationWebsocketAPI({
                apiKey: 'test-api-key',
                apiSecret: 'test-api-secret',
                wsURL: 'ws://localhost:3000',
                timeout: 1000,
            });

            websocketBase = new WebsocketAPIBase(config);
            websocketBase.connect();
        });

        afterEach(async () => {
            if (websocketBase) {
                await websocketBase.disconnect();
            }
            jest.clearAllMocks();
            jest.clearAllTimers();
        });

        it('should execute sessionStatus() successfully', async () => {
            mockResponse = {
                id: 'b50c16cd-62c9-4e29-89e4-37f10111f5bf',
                status: 200,
                result: {
                    apiKey: 'vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A',
                    authorizedSince: 1649729878532,
                    connectedSince: 1649729873021,
                    returnRateLimits: false,
                    serverTime: 1649730611671,
                    userDataStream: true,
                },
            };
            mockResponse.id = randomString();

            let resolveTest: (value: unknown) => void;
            const testComplete = new Promise((resolve) => {
                resolveTest = resolve;
            });

            websocketBase.on('open', async (conn: WebsocketAPIBase) => {
                try {
                    websocketAPIClient = new AuthApi(conn);
                    const sendMsgSpy = jest.spyOn(conn, 'sendMessage');
                    const responsePromise = websocketAPIClient.sessionStatus({
                        id: mockResponse?.id,
                    });
                    mockWs.emit('message', JSON.stringify(mockResponse));
                    const response = await responsePromise;
                    expect(response.data).toEqual(mockResponse.result);
                    expect(response.rateLimits).toEqual(mockResponse.rateLimits);
                    expect(sendMsgSpy).toHaveBeenCalledWith(
                        '/session.status'.slice(1),
                        expect.any(Object),
                        { isSigned: false, withApiKey: false }
                    );
                    resolveTest(true);
                } catch (error) {
                    resolveTest(error);
                }
            });
            mockWs.emit('open');

            const result = await testComplete;
            if (result instanceof Error) {
                throw result;
            }
        });

        it('should handle server error responses gracefully', async () => {
            mockResponse = {
                id: randomString(),
                status: 400,
                error: {
                    code: -2010,
                    msg: 'Account has insufficient balance for requested action.',
                },
                rateLimits: [
                    {
                        rateLimitType: 'ORDERS',
                        interval: 'SECOND',
                        intervalNum: 10,
                        limit: 50,
                        count: 13,
                    },
                ],
            };

            let resolveTest: (value: unknown) => void;
            const testComplete = new Promise((resolve) => {
                resolveTest = resolve;
            });

            websocketBase.on('open', async (conn: WebsocketAPIBase) => {
                try {
                    websocketAPIClient = new AuthApi(conn);
                    const responsePromise = websocketAPIClient.sessionStatus({
                        id: mockResponse?.id,
                    });
                    mockWs.emit('message', JSON.stringify(mockResponse));
                    await expect(responsePromise).rejects.toMatchObject(mockResponse.error!);
                    resolveTest(true);
                } catch (error) {
                    resolveTest(error);
                }
            });
            mockWs.emit('open');

            const result = await testComplete;
            if (result instanceof Error) {
                throw result;
            }
        });

        it('should handle request timeout gracefully', async () => {
            jest.useRealTimers();

            let resolveTest: (value: unknown) => void;
            const testComplete = new Promise((resolve) => {
                resolveTest = resolve;
            });

            websocketBase.on('open', async (conn: WebsocketAPIBase) => {
                try {
                    websocketAPIClient = new AuthApi(websocketBase);
                    const responsePromise = websocketAPIClient.sessionStatus();
                    await expect(responsePromise).rejects.toThrow(/^Request timeout for id:/);
                    resolveTest(true);
                } catch (error) {
                    resolveTest(error);
                }
            });
            mockWs.emit('open');

            const result = await testComplete;
            if (result instanceof Error) {
                throw result;
            }
        }, 10000);
    });
});
