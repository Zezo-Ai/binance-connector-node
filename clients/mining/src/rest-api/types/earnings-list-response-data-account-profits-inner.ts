/* tslint:disable */

/**
 * Binance Mining REST API
 *
 * OpenAPI Specification for the Binance Mining REST API
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
 * @interface EarningsListResponseDataAccountProfitsInner
 */
export interface EarningsListResponseDataAccountProfitsInner {
    /**
     *
     * @type {number}
     * @memberof EarningsListResponseDataAccountProfitsInner
     */
    time?: number;
    /**
     *
     * @type {number}
     * @memberof EarningsListResponseDataAccountProfitsInner
     */
    type?: number;
    /**
     *
     * @type {number}
     * @memberof EarningsListResponseDataAccountProfitsInner
     */
    hashTransfer?: number;
    /**
     *
     * @type {number}
     * @memberof EarningsListResponseDataAccountProfitsInner
     */
    transferAmount?: number;
    /**
     *
     * @type {number}
     * @memberof EarningsListResponseDataAccountProfitsInner
     */
    dayHashRate?: number;
    /**
     *
     * @type {number}
     * @memberof EarningsListResponseDataAccountProfitsInner
     */
    profitAmount?: number;
    /**
     *
     * @type {string}
     * @memberof EarningsListResponseDataAccountProfitsInner
     */
    coinName?: string;
    /**
     *
     * @type {number}
     * @memberof EarningsListResponseDataAccountProfitsInner
     */
    status?: number;
}
