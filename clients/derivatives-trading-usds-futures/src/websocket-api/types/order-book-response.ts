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
import type { OrderBookResponseRateLimitsInner } from './order-book-response-rate-limits-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderBookResponseResult } from './order-book-response-result';

/**
 *
 * @export
 * @interface OrderBookResponse
 */
export interface OrderBookResponse {
    /**
     *
     * @type {string}
     * @memberof OrderBookResponse
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof OrderBookResponse
     */
    status?: number;
    /**
     *
     * @type {OrderBookResponseResult}
     * @memberof OrderBookResponse
     */
    result?: OrderBookResponseResult;
    /**
     *
     * @type {Array<OrderBookResponseRateLimitsInner>}
     * @memberof OrderBookResponse
     */
    rateLimits?: Array<OrderBookResponseRateLimitsInner>;
}
