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
 * @interface SymbolOrderBookTickerResponseInner
 */
export interface SymbolOrderBookTickerResponseInner {
    /**
     *
     * @type {number}
     * @memberof SymbolOrderBookTickerResponseInner
     */
    lastUpdateId?: number;
    /**
     *
     * @type {string}
     * @memberof SymbolOrderBookTickerResponseInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof SymbolOrderBookTickerResponseInner
     */
    pair?: string;
    /**
     *
     * @type {string}
     * @memberof SymbolOrderBookTickerResponseInner
     */
    bidPrice?: string;
    /**
     *
     * @type {string}
     * @memberof SymbolOrderBookTickerResponseInner
     */
    bidQty?: string;
    /**
     *
     * @type {string}
     * @memberof SymbolOrderBookTickerResponseInner
     */
    askPrice?: string;
    /**
     *
     * @type {string}
     * @memberof SymbolOrderBookTickerResponseInner
     */
    askQty?: string;
    /**
     *
     * @type {number}
     * @memberof SymbolOrderBookTickerResponseInner
     */
    time?: number;
}
