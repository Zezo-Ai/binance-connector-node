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
 * @interface MyPreventedMatchesResponseInner
 */
export interface MyPreventedMatchesResponseInner {
    /**
     *
     * @type {string}
     * @memberof MyPreventedMatchesResponseInner
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof MyPreventedMatchesResponseInner
     */
    preventedMatchId?: number;
    /**
     *
     * @type {number}
     * @memberof MyPreventedMatchesResponseInner
     */
    takerOrderId?: number;
    /**
     *
     * @type {string}
     * @memberof MyPreventedMatchesResponseInner
     */
    makerSymbol?: string;
    /**
     *
     * @type {number}
     * @memberof MyPreventedMatchesResponseInner
     */
    makerOrderId?: number;
    /**
     *
     * @type {number}
     * @memberof MyPreventedMatchesResponseInner
     */
    tradeGroupId?: number;
    /**
     *
     * @type {string}
     * @memberof MyPreventedMatchesResponseInner
     */
    selfTradePreventionMode?: string;
    /**
     *
     * @type {string}
     * @memberof MyPreventedMatchesResponseInner
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof MyPreventedMatchesResponseInner
     */
    makerPreventedQuantity?: string;
    /**
     *
     * @type {number}
     * @memberof MyPreventedMatchesResponseInner
     */
    transactTime?: number;
}
