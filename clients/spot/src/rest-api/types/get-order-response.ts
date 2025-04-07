/* tslint:disable */

/**
 * Binance Spot REST API
 *
 * OpenAPI Specifications for the Binance Spot REST API
 *
 * API documents:
 * - [Github rest-api documentation file](https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md)
 * - [General API information for rest-api on website](https://developers.binance.com/docs/binance-spot-api-docs/rest-api/general-api-information)
 *
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface GetOrderResponse
 */
export interface GetOrderResponse {
    /**
     *
     * @type {string}
     * @memberof GetOrderResponse
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof GetOrderResponse
     */
    orderId?: number;
    /**
     *
     * @type {number}
     * @memberof GetOrderResponse
     */
    orderListId?: number;
    /**
     *
     * @type {string}
     * @memberof GetOrderResponse
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof GetOrderResponse
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof GetOrderResponse
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof GetOrderResponse
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof GetOrderResponse
     */
    cummulativeQuoteQty?: string;
    /**
     *
     * @type {string}
     * @memberof GetOrderResponse
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof GetOrderResponse
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof GetOrderResponse
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof GetOrderResponse
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof GetOrderResponse
     */
    stopPrice?: string;
    /**
     *
     * @type {string}
     * @memberof GetOrderResponse
     */
    icebergQty?: string;
    /**
     *
     * @type {number}
     * @memberof GetOrderResponse
     */
    time?: number;
    /**
     *
     * @type {number}
     * @memberof GetOrderResponse
     */
    updateTime?: number;
    /**
     *
     * @type {boolean}
     * @memberof GetOrderResponse
     */
    isWorking?: boolean;
    /**
     *
     * @type {number}
     * @memberof GetOrderResponse
     */
    workingTime?: number;
    /**
     *
     * @type {string}
     * @memberof GetOrderResponse
     */
    origQuoteOrderQty?: string;
    /**
     *
     * @type {string}
     * @memberof GetOrderResponse
     */
    selfTradePreventionMode?: string;
}
