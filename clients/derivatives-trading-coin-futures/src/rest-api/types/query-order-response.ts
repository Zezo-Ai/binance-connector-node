/* tslint:disable */

/**
 * Binance Derivatives Trading COIN Futures REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading COIN Futures REST API
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
 * @interface QueryOrderResponse
 */
export interface QueryOrderResponse {
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponse
     */
    avgPrice?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponse
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponse
     */
    cumBase?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponse
     */
    executedQty?: string;
    /**
     *
     * @type {number}
     * @memberof QueryOrderResponse
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponse
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponse
     */
    origType?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponse
     */
    price?: string;
    /**
     *
     * @type {boolean}
     * @memberof QueryOrderResponse
     */
    reduceOnly?: boolean;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponse
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponse
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponse
     */
    stopPrice?: string;
    /**
     *
     * @type {boolean}
     * @memberof QueryOrderResponse
     */
    closePosition?: boolean;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponse
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponse
     */
    pair?: string;
    /**
     *
     * @type {number}
     * @memberof QueryOrderResponse
     */
    time?: number;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponse
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponse
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponse
     */
    activatePrice?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponse
     */
    priceRate?: string;
    /**
     *
     * @type {number}
     * @memberof QueryOrderResponse
     */
    updateTime?: number;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponse
     */
    workingType?: string;
    /**
     *
     * @type {boolean}
     * @memberof QueryOrderResponse
     */
    priceProtect?: boolean;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponse
     */
    priceMatch?: string;
    /**
     *
     * @type {string}
     * @memberof QueryOrderResponse
     */
    selfTradePreventionMode?: string;
}
