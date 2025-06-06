/* tslint:disable */

/**
 * Binance Derivatives Trading Portfolio Margin REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading Portfolio Margin REST API
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
 * @interface NewUmOrderResponse
 */
export interface NewUmOrderResponse {
    /**
     *
     * @type {string}
     * @memberof NewUmOrderResponse
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof NewUmOrderResponse
     */
    cumQty?: string;
    /**
     *
     * @type {string}
     * @memberof NewUmOrderResponse
     */
    cumQuote?: string;
    /**
     *
     * @type {string}
     * @memberof NewUmOrderResponse
     */
    executedQty?: string;
    /**
     *
     * @type {number}
     * @memberof NewUmOrderResponse
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof NewUmOrderResponse
     */
    avgPrice?: string;
    /**
     *
     * @type {string}
     * @memberof NewUmOrderResponse
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof NewUmOrderResponse
     */
    price?: string;
    /**
     *
     * @type {boolean}
     * @memberof NewUmOrderResponse
     */
    reduceOnly?: boolean;
    /**
     *
     * @type {string}
     * @memberof NewUmOrderResponse
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof NewUmOrderResponse
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof NewUmOrderResponse
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof NewUmOrderResponse
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof NewUmOrderResponse
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof NewUmOrderResponse
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof NewUmOrderResponse
     */
    selfTradePreventionMode?: string;
    /**
     *
     * @type {number}
     * @memberof NewUmOrderResponse
     */
    goodTillDate?: number;
    /**
     *
     * @type {number}
     * @memberof NewUmOrderResponse
     */
    updateTime?: number;
    /**
     *
     * @type {string}
     * @memberof NewUmOrderResponse
     */
    priceMatch?: string;
}
