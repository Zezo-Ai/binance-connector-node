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
import type { ModifyOrderResponseRateLimitsInner } from './modify-order-response-rate-limits-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { ModifyOrderResponseResult } from './modify-order-response-result';

/**
 *
 * @export
 * @interface ModifyOrderResponse
 */
export interface ModifyOrderResponse {
    /**
     *
     * @type {string}
     * @memberof ModifyOrderResponse
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof ModifyOrderResponse
     */
    status?: number;
    /**
     *
     * @type {ModifyOrderResponseResult}
     * @memberof ModifyOrderResponse
     */
    result?: ModifyOrderResponseResult;
    /**
     *
     * @type {Array<ModifyOrderResponseRateLimitsInner>}
     * @memberof ModifyOrderResponse
     */
    rateLimits?: Array<ModifyOrderResponseRateLimitsInner>;
}
