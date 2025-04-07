/* tslint:disable */

/**
 * Binance Derivatives Trading COIN Futures WebSocket API
 *
 * OpenAPI Specification for the Binance Derivatives Trading COIN Futures WebSocket API
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
 * @interface NewOrderResponseResult
 */
export interface NewOrderResponseResult {
    /**
     *
     * @type {number}
     * @memberof NewOrderResponseResult
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponseResult
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponseResult
     */
    pair?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponseResult
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponseResult
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponseResult
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponseResult
     */
    avgPrice?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponseResult
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponseResult
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponseResult
     */
    cumQty?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponseResult
     */
    cumBase?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponseResult
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponseResult
     */
    type?: string;
    /**
     *
     * @type {boolean}
     * @memberof NewOrderResponseResult
     */
    reduceOnly?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof NewOrderResponseResult
     */
    closePosition?: boolean;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponseResult
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponseResult
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponseResult
     */
    stopPrice?: string;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponseResult
     */
    workingType?: string;
    /**
     *
     * @type {boolean}
     * @memberof NewOrderResponseResult
     */
    priceProtect?: boolean;
    /**
     *
     * @type {string}
     * @memberof NewOrderResponseResult
     */
    origType?: string;
    /**
     *
     * @type {number}
     * @memberof NewOrderResponseResult
     */
    updateTime?: number;
}
