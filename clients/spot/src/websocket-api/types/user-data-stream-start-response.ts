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
import type { AvgPriceResponseRateLimitsInner } from './avg-price-response-rate-limits-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { UserDataStreamStartResponseResult } from './user-data-stream-start-response-result';

/**
 *
 * @export
 * @interface UserDataStreamStartResponse
 */
export interface UserDataStreamStartResponse {
    /**
     *
     * @type {string}
     * @memberof UserDataStreamStartResponse
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof UserDataStreamStartResponse
     */
    status?: number;
    /**
     *
     * @type {UserDataStreamStartResponseResult}
     * @memberof UserDataStreamStartResponse
     */
    result?: UserDataStreamStartResponseResult;
    /**
     *
     * @type {Array<AvgPriceResponseRateLimitsInner>}
     * @memberof UserDataStreamStartResponse
     */
    rateLimits?: Array<AvgPriceResponseRateLimitsInner>;
}
