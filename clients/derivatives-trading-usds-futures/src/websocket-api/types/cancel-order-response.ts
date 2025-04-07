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
import type { CancelOrderResponseRateLimitsInner } from './cancel-order-response-rate-limits-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { CancelOrderResponseResult } from './cancel-order-response-result';

/**
 *
 * @export
 * @interface CancelOrderResponse
 */
export interface CancelOrderResponse {
    /**
     *
     * @type {string}
     * @memberof CancelOrderResponse
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof CancelOrderResponse
     */
    status?: number;
    /**
     *
     * @type {CancelOrderResponseResult}
     * @memberof CancelOrderResponse
     */
    result?: CancelOrderResponseResult;
    /**
     *
     * @type {Array<CancelOrderResponseRateLimitsInner>}
     * @memberof CancelOrderResponse
     */
    rateLimits?: Array<CancelOrderResponseRateLimitsInner>;
}
