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
 * @interface QueryAllCmConditionalOrdersResponseInner
 */
export interface QueryAllCmConditionalOrdersResponseInner {
    /**
     *
     * @type {string}
     * @memberof QueryAllCmConditionalOrdersResponseInner
     */
    newClientStrategyId?: string;
    /**
     *
     * @type {number}
     * @memberof QueryAllCmConditionalOrdersResponseInner
     */
    strategyId?: number;
    /**
     *
     * @type {string}
     * @memberof QueryAllCmConditionalOrdersResponseInner
     */
    strategyStatus?: string;
    /**
     *
     * @type {string}
     * @memberof QueryAllCmConditionalOrdersResponseInner
     */
    strategyType?: string;
    /**
     *
     * @type {string}
     * @memberof QueryAllCmConditionalOrdersResponseInner
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof QueryAllCmConditionalOrdersResponseInner
     */
    price?: string;
    /**
     *
     * @type {boolean}
     * @memberof QueryAllCmConditionalOrdersResponseInner
     */
    reduceOnly?: boolean;
    /**
     *
     * @type {string}
     * @memberof QueryAllCmConditionalOrdersResponseInner
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof QueryAllCmConditionalOrdersResponseInner
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof QueryAllCmConditionalOrdersResponseInner
     */
    stopPrice?: string;
    /**
     *
     * @type {string}
     * @memberof QueryAllCmConditionalOrdersResponseInner
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof QueryAllCmConditionalOrdersResponseInner
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof QueryAllCmConditionalOrdersResponseInner
     */
    status?: string;
    /**
     *
     * @type {number}
     * @memberof QueryAllCmConditionalOrdersResponseInner
     */
    bookTime?: number;
    /**
     *
     * @type {number}
     * @memberof QueryAllCmConditionalOrdersResponseInner
     */
    updateTime?: number;
    /**
     *
     * @type {number}
     * @memberof QueryAllCmConditionalOrdersResponseInner
     */
    triggerTime?: number;
    /**
     *
     * @type {string}
     * @memberof QueryAllCmConditionalOrdersResponseInner
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof QueryAllCmConditionalOrdersResponseInner
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof QueryAllCmConditionalOrdersResponseInner
     */
    activatePrice?: string;
    /**
     *
     * @type {string}
     * @memberof QueryAllCmConditionalOrdersResponseInner
     */
    priceRate?: string;
}
