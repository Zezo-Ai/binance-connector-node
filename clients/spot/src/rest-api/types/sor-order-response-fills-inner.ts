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
 * @interface SorOrderResponseFillsInner
 */
export interface SorOrderResponseFillsInner {
    /**
     *
     * @type {string}
     * @memberof SorOrderResponseFillsInner
     */
    matchType?: string;
    /**
     *
     * @type {string}
     * @memberof SorOrderResponseFillsInner
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof SorOrderResponseFillsInner
     */
    qty?: string;
    /**
     *
     * @type {string}
     * @memberof SorOrderResponseFillsInner
     */
    commission?: string;
    /**
     *
     * @type {string}
     * @memberof SorOrderResponseFillsInner
     */
    commissionAsset?: string;
    /**
     *
     * @type {number}
     * @memberof SorOrderResponseFillsInner
     */
    tradeId?: number;
    /**
     *
     * @type {number}
     * @memberof SorOrderResponseFillsInner
     */
    allocId?: number;
}
