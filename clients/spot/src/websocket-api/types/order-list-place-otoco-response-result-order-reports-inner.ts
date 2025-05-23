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
 * @interface OrderListPlaceOtocoResponseResultOrderReportsInner
 */
export interface OrderListPlaceOtocoResponseResultOrderReportsInner {
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOtocoResponseResultOrderReportsInner
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof OrderListPlaceOtocoResponseResultOrderReportsInner
     */
    orderId?: number;
    /**
     *
     * @type {number}
     * @memberof OrderListPlaceOtocoResponseResultOrderReportsInner
     */
    orderListId?: number;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOtocoResponseResultOrderReportsInner
     */
    clientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof OrderListPlaceOtocoResponseResultOrderReportsInner
     */
    transactTime?: number;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOtocoResponseResultOrderReportsInner
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOtocoResponseResultOrderReportsInner
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOtocoResponseResultOrderReportsInner
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOtocoResponseResultOrderReportsInner
     */
    origQuoteOrderQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOtocoResponseResultOrderReportsInner
     */
    cummulativeQuoteQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOtocoResponseResultOrderReportsInner
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOtocoResponseResultOrderReportsInner
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOtocoResponseResultOrderReportsInner
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOtocoResponseResultOrderReportsInner
     */
    side?: string;
    /**
     *
     * @type {number}
     * @memberof OrderListPlaceOtocoResponseResultOrderReportsInner
     */
    workingTime?: number;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOtocoResponseResultOrderReportsInner
     */
    selfTradePreventionMode?: string;
    /**
     *
     * @type {string}
     * @memberof OrderListPlaceOtocoResponseResultOrderReportsInner
     */
    stopPrice?: string;
}
