/* tslint:disable */

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

/**
 *
 * @export
 * @interface OrderCancelResponse2ResultOrderReportsInner
 */
export interface OrderCancelResponse2ResultOrderReportsInner {
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponse2ResultOrderReportsInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponse2ResultOrderReportsInner
     */
    origClientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof OrderCancelResponse2ResultOrderReportsInner
     */
    orderId?: number;
    /**
     *
     * @type {number}
     * @memberof OrderCancelResponse2ResultOrderReportsInner
     */
    orderListId?: number;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponse2ResultOrderReportsInner
     */
    clientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof OrderCancelResponse2ResultOrderReportsInner
     */
    transactTime?: number;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponse2ResultOrderReportsInner
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponse2ResultOrderReportsInner
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponse2ResultOrderReportsInner
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponse2ResultOrderReportsInner
     */
    origQuoteOrderQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponse2ResultOrderReportsInner
     */
    cummulativeQuoteQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponse2ResultOrderReportsInner
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponse2ResultOrderReportsInner
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponse2ResultOrderReportsInner
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponse2ResultOrderReportsInner
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponse2ResultOrderReportsInner
     */
    stopPrice?: string;
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponse2ResultOrderReportsInner
     */
    selfTradePreventionMode?: string;
}
