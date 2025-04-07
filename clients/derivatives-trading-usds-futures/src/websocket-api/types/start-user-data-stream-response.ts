/* tslint:disable */
/* eslint-disable */

/**
 * Binance Derivatives Trading USDS Futures WebSocket API
 *
 * OpenAPI Specification for the Binance Derivatives Trading USDS Futures WebSocket API
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
import type { StartUserDataStreamResponseResult } from './start-user-data-stream-response-result';
// May contain unused imports in some cases
// @ts-ignore
import type { SymbolOrderBookTickerResponse1RateLimitsInner } from './symbol-order-book-ticker-response1-rate-limits-inner';

/**
 *
 * @export
 * @interface StartUserDataStreamResponse
 */
export interface StartUserDataStreamResponse {
    /**
     *
     * @type {string}
     * @memberof StartUserDataStreamResponse
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof StartUserDataStreamResponse
     */
    status?: number;
    /**
     *
     * @type {StartUserDataStreamResponseResult}
     * @memberof StartUserDataStreamResponse
     */
    result?: StartUserDataStreamResponseResult;
    /**
     *
     * @type {Array<SymbolOrderBookTickerResponse1RateLimitsInner>}
     * @memberof StartUserDataStreamResponse
     */
    rateLimits?: Array<SymbolOrderBookTickerResponse1RateLimitsInner>;
}
