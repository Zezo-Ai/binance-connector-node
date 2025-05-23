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
 * @interface ModifyCmOrderResponse
 */
export interface ModifyCmOrderResponse {
    /**
     *
     * @type {number}
     * @memberof ModifyCmOrderResponse
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof ModifyCmOrderResponse
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyCmOrderResponse
     */
    pair?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyCmOrderResponse
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyCmOrderResponse
     */
    clientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyCmOrderResponse
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyCmOrderResponse
     */
    avgPrice?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyCmOrderResponse
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyCmOrderResponse
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyCmOrderResponse
     */
    cumQty?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyCmOrderResponse
     */
    cumBase?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyCmOrderResponse
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyCmOrderResponse
     */
    type?: string;
    /**
     *
     * @type {boolean}
     * @memberof ModifyCmOrderResponse
     */
    reduceOnly?: boolean;
    /**
     *
     * @type {string}
     * @memberof ModifyCmOrderResponse
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyCmOrderResponse
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof ModifyCmOrderResponse
     */
    origType?: string;
    /**
     *
     * @type {number}
     * @memberof ModifyCmOrderResponse
     */
    updateTime?: number;
}
