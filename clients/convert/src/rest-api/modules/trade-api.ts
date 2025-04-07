/**
 * Binance Convert REST API
 *
 * OpenAPI Specification for the Binance Convert REST API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    ConfigurationRestAPI,
    TimeUnit,
    RestApiResponse,
    assertParamExists,
    sendRequest,
    type RequestArgs,
} from '@binance/common';
import type {
    AcceptQuoteResponse,
    CancelLimitOrderResponse,
    GetConvertTradeHistoryResponse,
    OrderStatusResponse,
    PlaceLimitOrderResponse,
    QueryLimitOpenOrdersResponse,
    SendQuoteRequestResponse,
} from '../types';

/**
 * TradeApi - axios parameter creator
 */
const TradeApiAxiosParamCreator = function (configuration: ConfigurationRestAPI) {
    return {
        /**
         * Accept the offered quote by quote ID.
         *
         * Weight: 500(UID)
         *
         * @summary Accept Quote (TRADE)
         * @param {string} quoteId
         * @param {number} [recvWindow] The value cannot be greater than 60000
         *
         * @throws {RequiredError}
         */
        acceptQuote: async (quoteId: string, recvWindow?: number): Promise<RequestArgs> => {
            // verify required parameter 'quoteId' is not null or undefined
            assertParamExists('acceptQuote', 'quoteId', quoteId);

            const localVarQueryParameter: Record<string, unknown> = {};

            if (quoteId !== undefined && quoteId !== null) {
                localVarQueryParameter['quoteId'] = quoteId;
            }

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/convert/acceptQuote',
                method: 'POST',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * Enable users to cancel a limit order
         *
         * Weight: 200(UID)
         *
         * @summary Cancel limit order (USER_DATA)
         * @param {number} orderId The orderId from `placeOrder` api
         * @param {number} [recvWindow] The value cannot be greater than 60000
         *
         * @throws {RequiredError}
         */
        cancelLimitOrder: async (orderId: number, recvWindow?: number): Promise<RequestArgs> => {
            // verify required parameter 'orderId' is not null or undefined
            assertParamExists('cancelLimitOrder', 'orderId', orderId);

            const localVarQueryParameter: Record<string, unknown> = {};

            if (orderId !== undefined && orderId !== null) {
                localVarQueryParameter['orderId'] = orderId;
            }

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/convert/limit/cancelOrder',
                method: 'POST',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * Get Convert Trade History
         *
         * The max interval between startTime and endTime is 30 days.
         *
         * Weight: 3000
         *
         * @summary Get Convert Trade History(USER_DATA)
         * @param {number} startTime
         * @param {number} endTime
         * @param {number} [limit] Default 100, Max 1000
         * @param {number} [recvWindow] The value cannot be greater than 60000
         *
         * @throws {RequiredError}
         */
        getConvertTradeHistory: async (
            startTime: number,
            endTime: number,
            limit?: number,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            // verify required parameter 'startTime' is not null or undefined
            assertParamExists('getConvertTradeHistory', 'startTime', startTime);
            // verify required parameter 'endTime' is not null or undefined
            assertParamExists('getConvertTradeHistory', 'endTime', endTime);

            const localVarQueryParameter: Record<string, unknown> = {};

            if (startTime !== undefined && startTime !== null) {
                localVarQueryParameter['startTime'] = startTime;
            }

            if (endTime !== undefined && endTime !== null) {
                localVarQueryParameter['endTime'] = endTime;
            }

            if (limit !== undefined && limit !== null) {
                localVarQueryParameter['limit'] = limit;
            }

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/convert/tradeFlow',
                method: 'GET',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * Query order status by order ID.
         *
         * Weight: 100(UID)
         *
         * @summary Order status(USER_DATA)
         * @param {string} [orderId] Either orderId or quoteId is required
         * @param {string} [quoteId] Either orderId or quoteId is required
         *
         * @throws {RequiredError}
         */
        orderStatus: async (orderId?: string, quoteId?: string): Promise<RequestArgs> => {
            const localVarQueryParameter: Record<string, unknown> = {};

            if (orderId !== undefined && orderId !== null) {
                localVarQueryParameter['orderId'] = orderId;
            }

            if (quoteId !== undefined && quoteId !== null) {
                localVarQueryParameter['quoteId'] = quoteId;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/convert/orderStatus',
                method: 'GET',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * Enable users to place a limit order
         *
         * `baseAsset` or `quoteAsset` can be determined via `exchangeInfo` endpoint.
         * Limit price is defined from `baseAsset` to `quoteAsset`.
         * Either `baseAmount` or `quoteAmount` is used.
         *
         * Weight: 500(UID)
         *
         * @summary Place limit order (USER_DATA)
         * @param {string} baseAsset base asset (use the response `fromIsBase` from `GET /sapi/v1/convert/exchangeInfo` api to check which one is baseAsset )
         * @param {string} quoteAsset quote asset
         * @param {number} limitPrice Symbol limit price (from baseAsset to quoteAsset)
         * @param {string} side `BUY` or `SELL`
         * @param {string} expiredType 1_D, 3_D, 7_D, 30_D  (D means day)
         * @param {number} [baseAmount] Base asset amount.  (One of `baseAmount` or `quoteAmount` is required)
         * @param {number} [quoteAmount] Quote asset amount.  (One of `baseAmount` or `quoteAmount` is required)
         * @param {string} [walletType] SPOT or FUNDING. Default is SPOT
         * @param {number} [recvWindow] The value cannot be greater than 60000
         *
         * @throws {RequiredError}
         */
        placeLimitOrder: async (
            baseAsset: string,
            quoteAsset: string,
            limitPrice: number,
            side: string,
            expiredType: string,
            baseAmount?: number,
            quoteAmount?: number,
            walletType?: string,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            // verify required parameter 'baseAsset' is not null or undefined
            assertParamExists('placeLimitOrder', 'baseAsset', baseAsset);
            // verify required parameter 'quoteAsset' is not null or undefined
            assertParamExists('placeLimitOrder', 'quoteAsset', quoteAsset);
            // verify required parameter 'limitPrice' is not null or undefined
            assertParamExists('placeLimitOrder', 'limitPrice', limitPrice);
            // verify required parameter 'side' is not null or undefined
            assertParamExists('placeLimitOrder', 'side', side);
            // verify required parameter 'expiredType' is not null or undefined
            assertParamExists('placeLimitOrder', 'expiredType', expiredType);

            const localVarQueryParameter: Record<string, unknown> = {};

            if (baseAsset !== undefined && baseAsset !== null) {
                localVarQueryParameter['baseAsset'] = baseAsset;
            }

            if (quoteAsset !== undefined && quoteAsset !== null) {
                localVarQueryParameter['quoteAsset'] = quoteAsset;
            }

            if (limitPrice !== undefined && limitPrice !== null) {
                localVarQueryParameter['limitPrice'] = limitPrice;
            }

            if (baseAmount !== undefined && baseAmount !== null) {
                localVarQueryParameter['baseAmount'] = baseAmount;
            }

            if (quoteAmount !== undefined && quoteAmount !== null) {
                localVarQueryParameter['quoteAmount'] = quoteAmount;
            }

            if (side !== undefined && side !== null) {
                localVarQueryParameter['side'] = side;
            }

            if (walletType !== undefined && walletType !== null) {
                localVarQueryParameter['walletType'] = walletType;
            }

            if (expiredType !== undefined && expiredType !== null) {
                localVarQueryParameter['expiredType'] = expiredType;
            }

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/convert/limit/placeOrder',
                method: 'POST',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * Request a quote for the requested token pairs
         *
         * Weight: 3000(UID)
         *
         * @summary Query limit open orders (USER_DATA)
         * @param {number} [recvWindow] The value cannot be greater than 60000
         *
         * @throws {RequiredError}
         */
        queryLimitOpenOrders: async (recvWindow?: number): Promise<RequestArgs> => {
            const localVarQueryParameter: Record<string, unknown> = {};

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/convert/limit/queryOpenOrders',
                method: 'POST',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * Request a quote for the requested token pairs
         *
         * Either fromAmount or toAmount should be sent
         * `quoteId` will be returned only if you have enough funds to convert
         *
         * Weight: 200(UID)
         *
         * @summary Send Quote Request(USER_DATA)
         * @param {string} fromAsset
         * @param {string} toAsset
         * @param {number} [fromAmount] When specified, it is the amount you will be debited after the conversion
         * @param {number} [toAmount] When specified, it is the amount you will be credited after the conversion
         * @param {string} [walletType] SPOT or FUNDING. Default is SPOT
         * @param {string} [validTime] 10s, 30s, 1m, default 10s
         * @param {number} [recvWindow] The value cannot be greater than 60000
         *
         * @throws {RequiredError}
         */
        sendQuoteRequest: async (
            fromAsset: string,
            toAsset: string,
            fromAmount?: number,
            toAmount?: number,
            walletType?: string,
            validTime?: string,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            // verify required parameter 'fromAsset' is not null or undefined
            assertParamExists('sendQuoteRequest', 'fromAsset', fromAsset);
            // verify required parameter 'toAsset' is not null or undefined
            assertParamExists('sendQuoteRequest', 'toAsset', toAsset);

            const localVarQueryParameter: Record<string, unknown> = {};

            if (fromAsset !== undefined && fromAsset !== null) {
                localVarQueryParameter['fromAsset'] = fromAsset;
            }

            if (toAsset !== undefined && toAsset !== null) {
                localVarQueryParameter['toAsset'] = toAsset;
            }

            if (fromAmount !== undefined && fromAmount !== null) {
                localVarQueryParameter['fromAmount'] = fromAmount;
            }

            if (toAmount !== undefined && toAmount !== null) {
                localVarQueryParameter['toAmount'] = toAmount;
            }

            if (walletType !== undefined && walletType !== null) {
                localVarQueryParameter['walletType'] = walletType;
            }

            if (validTime !== undefined && validTime !== null) {
                localVarQueryParameter['validTime'] = validTime;
            }

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/convert/getQuote',
                method: 'POST',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
    };
};

/**
 * TradeApi - interface
 * @interface TradeApi
 */
export interface TradeApiInterface {
    /**
     * Accept the offered quote by quote ID.
     *
     * Weight: 500(UID)
     *
     * @summary Accept Quote (TRADE)
     * @param {AcceptQuoteRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof TradeApiInterface
     */
    acceptQuote(
        requestParameters: AcceptQuoteRequest
    ): Promise<RestApiResponse<AcceptQuoteResponse>>;
    /**
     * Enable users to cancel a limit order
     *
     * Weight: 200(UID)
     *
     * @summary Cancel limit order (USER_DATA)
     * @param {CancelLimitOrderRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof TradeApiInterface
     */
    cancelLimitOrder(
        requestParameters: CancelLimitOrderRequest
    ): Promise<RestApiResponse<CancelLimitOrderResponse>>;
    /**
     * Get Convert Trade History
     *
     * The max interval between startTime and endTime is 30 days.
     *
     * Weight: 3000
     *
     * @summary Get Convert Trade History(USER_DATA)
     * @param {GetConvertTradeHistoryRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof TradeApiInterface
     */
    getConvertTradeHistory(
        requestParameters: GetConvertTradeHistoryRequest
    ): Promise<RestApiResponse<GetConvertTradeHistoryResponse>>;
    /**
     * Query order status by order ID.
     *
     * Weight: 100(UID)
     *
     * @summary Order status(USER_DATA)
     * @param {OrderStatusRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof TradeApiInterface
     */
    orderStatus(
        requestParameters?: OrderStatusRequest
    ): Promise<RestApiResponse<OrderStatusResponse>>;
    /**
     * Enable users to place a limit order
     *
     * `baseAsset` or `quoteAsset` can be determined via `exchangeInfo` endpoint.
     * Limit price is defined from `baseAsset` to `quoteAsset`.
     * Either `baseAmount` or `quoteAmount` is used.
     *
     * Weight: 500(UID)
     *
     * @summary Place limit order (USER_DATA)
     * @param {PlaceLimitOrderRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof TradeApiInterface
     */
    placeLimitOrder(
        requestParameters: PlaceLimitOrderRequest
    ): Promise<RestApiResponse<PlaceLimitOrderResponse>>;
    /**
     * Request a quote for the requested token pairs
     *
     * Weight: 3000(UID)
     *
     * @summary Query limit open orders (USER_DATA)
     * @param {QueryLimitOpenOrdersRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof TradeApiInterface
     */
    queryLimitOpenOrders(
        requestParameters?: QueryLimitOpenOrdersRequest
    ): Promise<RestApiResponse<QueryLimitOpenOrdersResponse>>;
    /**
     * Request a quote for the requested token pairs
     *
     * Either fromAmount or toAmount should be sent
     * `quoteId` will be returned only if you have enough funds to convert
     *
     * Weight: 200(UID)
     *
     * @summary Send Quote Request(USER_DATA)
     * @param {SendQuoteRequestRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof TradeApiInterface
     */
    sendQuoteRequest(
        requestParameters: SendQuoteRequestRequest
    ): Promise<RestApiResponse<SendQuoteRequestResponse>>;
}

/**
 * Request parameters for acceptQuote operation in TradeApi.
 * @interface AcceptQuoteRequest
 */
export interface AcceptQuoteRequest {
    /**
     *
     * @type {string}
     * @memberof TradeApiAcceptQuote
     */
    readonly quoteId: string;

    /**
     * The value cannot be greater than 60000
     * @type {number}
     * @memberof TradeApiAcceptQuote
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for cancelLimitOrder operation in TradeApi.
 * @interface CancelLimitOrderRequest
 */
export interface CancelLimitOrderRequest {
    /**
     * The orderId from `placeOrder` api
     * @type {number}
     * @memberof TradeApiCancelLimitOrder
     */
    readonly orderId: number;

    /**
     * The value cannot be greater than 60000
     * @type {number}
     * @memberof TradeApiCancelLimitOrder
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for getConvertTradeHistory operation in TradeApi.
 * @interface GetConvertTradeHistoryRequest
 */
export interface GetConvertTradeHistoryRequest {
    /**
     *
     * @type {number}
     * @memberof TradeApiGetConvertTradeHistory
     */
    readonly startTime: number;

    /**
     *
     * @type {number}
     * @memberof TradeApiGetConvertTradeHistory
     */
    readonly endTime: number;

    /**
     * Default 100, Max 1000
     * @type {number}
     * @memberof TradeApiGetConvertTradeHistory
     */
    readonly limit?: number;

    /**
     * The value cannot be greater than 60000
     * @type {number}
     * @memberof TradeApiGetConvertTradeHistory
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for orderStatus operation in TradeApi.
 * @interface OrderStatusRequest
 */
export interface OrderStatusRequest {
    /**
     * Either orderId or quoteId is required
     * @type {string}
     * @memberof TradeApiOrderStatus
     */
    readonly orderId?: string;

    /**
     * Either orderId or quoteId is required
     * @type {string}
     * @memberof TradeApiOrderStatus
     */
    readonly quoteId?: string;
}

/**
 * Request parameters for placeLimitOrder operation in TradeApi.
 * @interface PlaceLimitOrderRequest
 */
export interface PlaceLimitOrderRequest {
    /**
     * base asset (use the response `fromIsBase` from `GET /sapi/v1/convert/exchangeInfo` api to check which one is baseAsset )
     * @type {string}
     * @memberof TradeApiPlaceLimitOrder
     */
    readonly baseAsset: string;

    /**
     * quote asset
     * @type {string}
     * @memberof TradeApiPlaceLimitOrder
     */
    readonly quoteAsset: string;

    /**
     * Symbol limit price (from baseAsset to quoteAsset)
     * @type {number}
     * @memberof TradeApiPlaceLimitOrder
     */
    readonly limitPrice: number;

    /**
     * `BUY` or `SELL`
     * @type {string}
     * @memberof TradeApiPlaceLimitOrder
     */
    readonly side: string;

    /**
     * 1_D, 3_D, 7_D, 30_D  (D means day)
     * @type {string}
     * @memberof TradeApiPlaceLimitOrder
     */
    readonly expiredType: string;

    /**
     * Base asset amount.  (One of `baseAmount` or `quoteAmount` is required)
     * @type {number}
     * @memberof TradeApiPlaceLimitOrder
     */
    readonly baseAmount?: number;

    /**
     * Quote asset amount.  (One of `baseAmount` or `quoteAmount` is required)
     * @type {number}
     * @memberof TradeApiPlaceLimitOrder
     */
    readonly quoteAmount?: number;

    /**
     * SPOT or FUNDING. Default is SPOT
     * @type {string}
     * @memberof TradeApiPlaceLimitOrder
     */
    readonly walletType?: string;

    /**
     * The value cannot be greater than 60000
     * @type {number}
     * @memberof TradeApiPlaceLimitOrder
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for queryLimitOpenOrders operation in TradeApi.
 * @interface QueryLimitOpenOrdersRequest
 */
export interface QueryLimitOpenOrdersRequest {
    /**
     * The value cannot be greater than 60000
     * @type {number}
     * @memberof TradeApiQueryLimitOpenOrders
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for sendQuoteRequest operation in TradeApi.
 * @interface SendQuoteRequestRequest
 */
export interface SendQuoteRequestRequest {
    /**
     *
     * @type {string}
     * @memberof TradeApiSendQuoteRequest
     */
    readonly fromAsset: string;

    /**
     *
     * @type {string}
     * @memberof TradeApiSendQuoteRequest
     */
    readonly toAsset: string;

    /**
     * When specified, it is the amount you will be debited after the conversion
     * @type {number}
     * @memberof TradeApiSendQuoteRequest
     */
    readonly fromAmount?: number;

    /**
     * When specified, it is the amount you will be credited after the conversion
     * @type {number}
     * @memberof TradeApiSendQuoteRequest
     */
    readonly toAmount?: number;

    /**
     * SPOT or FUNDING. Default is SPOT
     * @type {string}
     * @memberof TradeApiSendQuoteRequest
     */
    readonly walletType?: string;

    /**
     * 10s, 30s, 1m, default 10s
     * @type {string}
     * @memberof TradeApiSendQuoteRequest
     */
    readonly validTime?: string;

    /**
     * The value cannot be greater than 60000
     * @type {number}
     * @memberof TradeApiSendQuoteRequest
     */
    readonly recvWindow?: number;
}

/**
 * TradeApi - object-oriented interface
 * @class TradeApi
 */
export class TradeApi implements TradeApiInterface {
    private readonly configuration: ConfigurationRestAPI;
    private localVarAxiosParamCreator;

    constructor(configuration: ConfigurationRestAPI) {
        this.configuration = configuration;
        this.localVarAxiosParamCreator = TradeApiAxiosParamCreator(configuration);
    }

    /**
     * Accept the offered quote by quote ID.
     *
     * Weight: 500(UID)
     *
     * @summary Accept Quote (TRADE)
     * @param {AcceptQuoteRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<AcceptQuoteResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof TradeApi
     * @see {@link https://developers.binance.com/docs/convert/trade/Accept-Quote Binance API Documentation}
     */
    public async acceptQuote(
        requestParameters: AcceptQuoteRequest
    ): Promise<RestApiResponse<AcceptQuoteResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.acceptQuote(
            requestParameters?.quoteId,
            requestParameters?.recvWindow
        );
        return sendRequest<AcceptQuoteResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * Enable users to cancel a limit order
     *
     * Weight: 200(UID)
     *
     * @summary Cancel limit order (USER_DATA)
     * @param {CancelLimitOrderRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<CancelLimitOrderResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof TradeApi
     * @see {@link https://developers.binance.com/docs/convert/trade/Cancel-Order Binance API Documentation}
     */
    public async cancelLimitOrder(
        requestParameters: CancelLimitOrderRequest
    ): Promise<RestApiResponse<CancelLimitOrderResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.cancelLimitOrder(
            requestParameters?.orderId,
            requestParameters?.recvWindow
        );
        return sendRequest<CancelLimitOrderResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * Get Convert Trade History
     *
     * The max interval between startTime and endTime is 30 days.
     *
     * Weight: 3000
     *
     * @summary Get Convert Trade History(USER_DATA)
     * @param {GetConvertTradeHistoryRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetConvertTradeHistoryResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof TradeApi
     * @see {@link https://developers.binance.com/docs/convert/trade/Get-Convert-Trade-History Binance API Documentation}
     */
    public async getConvertTradeHistory(
        requestParameters: GetConvertTradeHistoryRequest
    ): Promise<RestApiResponse<GetConvertTradeHistoryResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.getConvertTradeHistory(
            requestParameters?.startTime,
            requestParameters?.endTime,
            requestParameters?.limit,
            requestParameters?.recvWindow
        );
        return sendRequest<GetConvertTradeHistoryResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * Query order status by order ID.
     *
     * Weight: 100(UID)
     *
     * @summary Order status(USER_DATA)
     * @param {OrderStatusRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<OrderStatusResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof TradeApi
     * @see {@link https://developers.binance.com/docs/convert/trade/Order-Status Binance API Documentation}
     */
    public async orderStatus(
        requestParameters: OrderStatusRequest = {}
    ): Promise<RestApiResponse<OrderStatusResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.orderStatus(
            requestParameters?.orderId,
            requestParameters?.quoteId
        );
        return sendRequest<OrderStatusResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * Enable users to place a limit order
     *
     * `baseAsset` or `quoteAsset` can be determined via `exchangeInfo` endpoint.
     * Limit price is defined from `baseAsset` to `quoteAsset`.
     * Either `baseAmount` or `quoteAmount` is used.
     *
     * Weight: 500(UID)
     *
     * @summary Place limit order (USER_DATA)
     * @param {PlaceLimitOrderRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<PlaceLimitOrderResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof TradeApi
     * @see {@link https://developers.binance.com/docs/convert/trade/Place-Order Binance API Documentation}
     */
    public async placeLimitOrder(
        requestParameters: PlaceLimitOrderRequest
    ): Promise<RestApiResponse<PlaceLimitOrderResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.placeLimitOrder(
            requestParameters?.baseAsset,
            requestParameters?.quoteAsset,
            requestParameters?.limitPrice,
            requestParameters?.side,
            requestParameters?.expiredType,
            requestParameters?.baseAmount,
            requestParameters?.quoteAmount,
            requestParameters?.walletType,
            requestParameters?.recvWindow
        );
        return sendRequest<PlaceLimitOrderResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * Request a quote for the requested token pairs
     *
     * Weight: 3000(UID)
     *
     * @summary Query limit open orders (USER_DATA)
     * @param {QueryLimitOpenOrdersRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<QueryLimitOpenOrdersResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof TradeApi
     * @see {@link https://developers.binance.com/docs/convert/trade/Query-Order Binance API Documentation}
     */
    public async queryLimitOpenOrders(
        requestParameters: QueryLimitOpenOrdersRequest = {}
    ): Promise<RestApiResponse<QueryLimitOpenOrdersResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.queryLimitOpenOrders(
            requestParameters?.recvWindow
        );
        return sendRequest<QueryLimitOpenOrdersResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * Request a quote for the requested token pairs
     *
     * Either fromAmount or toAmount should be sent
     * `quoteId` will be returned only if you have enough funds to convert
     *
     * Weight: 200(UID)
     *
     * @summary Send Quote Request(USER_DATA)
     * @param {SendQuoteRequestRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<SendQuoteRequestResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof TradeApi
     * @see {@link https://developers.binance.com/docs/convert/trade/Send-quote-request Binance API Documentation}
     */
    public async sendQuoteRequest(
        requestParameters: SendQuoteRequestRequest
    ): Promise<RestApiResponse<SendQuoteRequestResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.sendQuoteRequest(
            requestParameters?.fromAsset,
            requestParameters?.toAsset,
            requestParameters?.fromAmount,
            requestParameters?.toAmount,
            requestParameters?.walletType,
            requestParameters?.validTime,
            requestParameters?.recvWindow
        );
        return sendRequest<SendQuoteRequestResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }
}
