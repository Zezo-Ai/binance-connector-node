/* tslint:disable */

/**
 * Binance Margin Trading REST API
 *
 * OpenAPI Specification for the Binance Margin Trading REST API
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
 * @interface QueryMarginInterestRateHistoryResponseInner
 */
export interface QueryMarginInterestRateHistoryResponseInner {
    /**
     *
     * @type {string}
     * @memberof QueryMarginInterestRateHistoryResponseInner
     */
    asset?: string;
    /**
     *
     * @type {string}
     * @memberof QueryMarginInterestRateHistoryResponseInner
     */
    dailyInterestRate?: string;
    /**
     *
     * @type {number}
     * @memberof QueryMarginInterestRateHistoryResponseInner
     */
    timestamp?: number;
    /**
     *
     * @type {number}
     * @memberof QueryMarginInterestRateHistoryResponseInner
     */
    vipLevel?: number;
}
