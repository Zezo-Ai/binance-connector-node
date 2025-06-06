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
 * @interface DeleteOpenOrdersResponseInner
 */
export interface DeleteOpenOrdersResponseInner {
    /**
     *
     * @type {string}
     * @memberof DeleteOpenOrdersResponseInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof DeleteOpenOrdersResponseInner
     */
    origClientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof DeleteOpenOrdersResponseInner
     */
    orderId?: number;
    /**
     *
     * @type {number}
     * @memberof DeleteOpenOrdersResponseInner
     */
    orderListId?: number;
    /**
     *
     * @type {string}
     * @memberof DeleteOpenOrdersResponseInner
     */
    clientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof DeleteOpenOrdersResponseInner
     */
    transactTime?: number;
    /**
     *
     * @type {string}
     * @memberof DeleteOpenOrdersResponseInner
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof DeleteOpenOrdersResponseInner
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof DeleteOpenOrdersResponseInner
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof DeleteOpenOrdersResponseInner
     */
    origQuoteOrderQty?: string;
    /**
     *
     * @type {string}
     * @memberof DeleteOpenOrdersResponseInner
     */
    cummulativeQuoteQty?: string;
    /**
     *
     * @type {string}
     * @memberof DeleteOpenOrdersResponseInner
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof DeleteOpenOrdersResponseInner
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof DeleteOpenOrdersResponseInner
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof DeleteOpenOrdersResponseInner
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof DeleteOpenOrdersResponseInner
     */
    selfTradePreventionMode?: string;
}
