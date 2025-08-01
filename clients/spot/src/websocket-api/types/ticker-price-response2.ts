/* tslint:disable */
/* eslint-disable */

/**
 * Binance Spot WebSocket API
 *
 * OpenAPI Specifications for the Binance Spot WebSocket API
 *
 * API documents:
 * - [Github web-socket-api documentation file](https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-api.md)
 * - [General API information for web-socket-api on website](https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/general-api-information)
 *
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { RateLimits } from './rate-limits';
// May contain unused imports in some cases
// @ts-ignore
import type { TickerPriceResponse2ResultInner } from './ticker-price-response2-result-inner';

/**
 *
 * @export
 * @interface TickerPriceResponse2
 */
export interface TickerPriceResponse2 {
    /**
     *
     * @type {string}
     * @memberof TickerPriceResponse2
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof TickerPriceResponse2
     */
    status?: number;
    /**
     *
     * @type {Array<TickerPriceResponse2ResultInner>}
     * @memberof TickerPriceResponse2
     */
    result?: Array<TickerPriceResponse2ResultInner>;
    /**
     *
     * @type {RateLimits}
     * @memberof TickerPriceResponse2
     */
    rateLimits?: RateLimits;
}
