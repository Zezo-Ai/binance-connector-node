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
 * @interface DeleteOrderResponse
 */
export interface DeleteOrderResponse {
    /**
     *
     * @type {string}
     * @memberof DeleteOrderResponse
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof DeleteOrderResponse
     */
    origClientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof DeleteOrderResponse
     */
    orderId?: number;
    /**
     *
     * @type {number}
     * @memberof DeleteOrderResponse
     */
    orderListId?: number;
    /**
     *
     * @type {string}
     * @memberof DeleteOrderResponse
     */
    clientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof DeleteOrderResponse
     */
    transactTime?: number;
    /**
     *
     * @type {string}
     * @memberof DeleteOrderResponse
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof DeleteOrderResponse
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof DeleteOrderResponse
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof DeleteOrderResponse
     */
    cummulativeQuoteQty?: string;
    /**
     *
     * @type {string}
     * @memberof DeleteOrderResponse
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof DeleteOrderResponse
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof DeleteOrderResponse
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof DeleteOrderResponse
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof DeleteOrderResponse
     */
    selfTradePreventionMode?: string;
}
