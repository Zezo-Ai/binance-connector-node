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
 * @interface TickerTradingDayResponse
 */
export interface TickerTradingDayResponse {
    /**
     *
     * @type {string}
     * @memberof TickerTradingDayResponse
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof TickerTradingDayResponse
     */
    openPrice?: string;
    /**
     *
     * @type {string}
     * @memberof TickerTradingDayResponse
     */
    highPrice?: string;
    /**
     *
     * @type {string}
     * @memberof TickerTradingDayResponse
     */
    lowPrice?: string;
    /**
     *
     * @type {string}
     * @memberof TickerTradingDayResponse
     */
    lastPrice?: string;
    /**
     *
     * @type {string}
     * @memberof TickerTradingDayResponse
     */
    volume?: string;
    /**
     *
     * @type {string}
     * @memberof TickerTradingDayResponse
     */
    quoteVolume?: string;
    /**
     *
     * @type {number}
     * @memberof TickerTradingDayResponse
     */
    openTime?: number;
    /**
     *
     * @type {number}
     * @memberof TickerTradingDayResponse
     */
    closeTime?: number;
    /**
     *
     * @type {number}
     * @memberof TickerTradingDayResponse
     */
    firstId?: number;
    /**
     *
     * @type {number}
     * @memberof TickerTradingDayResponse
     */
    lastId?: number;
    /**
     *
     * @type {number}
     * @memberof TickerTradingDayResponse
     */
    count?: number;
}
