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
 * @interface GetAllIsolatedMarginSymbolResponseInner
 */
export interface GetAllIsolatedMarginSymbolResponseInner {
    /**
     *
     * @type {string}
     * @memberof GetAllIsolatedMarginSymbolResponseInner
     */
    base?: string;
    /**
     *
     * @type {boolean}
     * @memberof GetAllIsolatedMarginSymbolResponseInner
     */
    isBuyAllowed?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GetAllIsolatedMarginSymbolResponseInner
     */
    isMarginTrade?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GetAllIsolatedMarginSymbolResponseInner
     */
    isSellAllowed?: boolean;
    /**
     *
     * @type {string}
     * @memberof GetAllIsolatedMarginSymbolResponseInner
     */
    quote?: string;
    /**
     *
     * @type {string}
     * @memberof GetAllIsolatedMarginSymbolResponseInner
     */
    symbol?: string;
}
