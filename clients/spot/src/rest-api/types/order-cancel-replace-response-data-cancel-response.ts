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
 * @interface OrderCancelReplaceResponseDataCancelResponse
 */
export interface OrderCancelReplaceResponseDataCancelResponse {
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseDataCancelResponse
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseDataCancelResponse
     */
    origClientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof OrderCancelReplaceResponseDataCancelResponse
     */
    orderId?: number;
    /**
     *
     * @type {number}
     * @memberof OrderCancelReplaceResponseDataCancelResponse
     */
    orderListId?: number;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseDataCancelResponse
     */
    clientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof OrderCancelReplaceResponseDataCancelResponse
     */
    transactTime?: number;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseDataCancelResponse
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseDataCancelResponse
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseDataCancelResponse
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseDataCancelResponse
     */
    origQuoteOrderQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseDataCancelResponse
     */
    cummulativeQuoteQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseDataCancelResponse
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseDataCancelResponse
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseDataCancelResponse
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseDataCancelResponse
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelReplaceResponseDataCancelResponse
     */
    selfTradePreventionMode?: string;
}
