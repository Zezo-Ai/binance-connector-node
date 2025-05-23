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
 * @interface OrderAmendKeepPriorityResponseAmendedOrder
 */
export interface OrderAmendKeepPriorityResponseAmendedOrder {
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponseAmendedOrder
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof OrderAmendKeepPriorityResponseAmendedOrder
     */
    orderId?: number;
    /**
     *
     * @type {number}
     * @memberof OrderAmendKeepPriorityResponseAmendedOrder
     */
    orderListId?: number;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponseAmendedOrder
     */
    origClientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponseAmendedOrder
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponseAmendedOrder
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponseAmendedOrder
     */
    qty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponseAmendedOrder
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponseAmendedOrder
     */
    preventedQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponseAmendedOrder
     */
    quoteOrderQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponseAmendedOrder
     */
    cumulativeQuoteQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponseAmendedOrder
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponseAmendedOrder
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponseAmendedOrder
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponseAmendedOrder
     */
    side?: string;
    /**
     *
     * @type {number}
     * @memberof OrderAmendKeepPriorityResponseAmendedOrder
     */
    workingTime?: number;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponseAmendedOrder
     */
    selfTradePreventionMode?: string;
}
