/* tslint:disable */

/**
 * Binance Staking REST API
 *
 * OpenAPI Specification for the Binance Staking REST API
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
 * @interface GetWbethUnwrapHistoryResponseRowsInner
 */
export interface GetWbethUnwrapHistoryResponseRowsInner {
    /**
     *
     * @type {number}
     * @memberof GetWbethUnwrapHistoryResponseRowsInner
     */
    time?: number;
    /**
     *
     * @type {string}
     * @memberof GetWbethUnwrapHistoryResponseRowsInner
     */
    fromAsset?: string;
    /**
     *
     * @type {string}
     * @memberof GetWbethUnwrapHistoryResponseRowsInner
     */
    fromAmount?: string;
    /**
     *
     * @type {string}
     * @memberof GetWbethUnwrapHistoryResponseRowsInner
     */
    toAsset?: string;
    /**
     *
     * @type {string}
     * @memberof GetWbethUnwrapHistoryResponseRowsInner
     */
    toAmount?: string;
    /**
     *
     * @type {string}
     * @memberof GetWbethUnwrapHistoryResponseRowsInner
     */
    exchangeRate?: string;
    /**
     *
     * @type {string}
     * @memberof GetWbethUnwrapHistoryResponseRowsInner
     */
    status?: string;
}
