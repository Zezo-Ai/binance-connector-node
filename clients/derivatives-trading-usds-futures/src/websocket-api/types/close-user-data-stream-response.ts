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
import type { SymbolOrderBookTickerResponse1RateLimitsInner } from './symbol-order-book-ticker-response1-rate-limits-inner';

/**
 *
 * @export
 * @interface CloseUserDataStreamResponse
 */
export interface CloseUserDataStreamResponse {
    /**
     *
     * @type {string}
     * @memberof CloseUserDataStreamResponse
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof CloseUserDataStreamResponse
     */
    status?: number;
    /**
     *
     * @type {object}
     * @memberof CloseUserDataStreamResponse
     */
    result?: object;
    /**
     *
     * @type {Array<SymbolOrderBookTickerResponse1RateLimitsInner>}
     * @memberof CloseUserDataStreamResponse
     */
    rateLimits?: Array<SymbolOrderBookTickerResponse1RateLimitsInner>;
}
