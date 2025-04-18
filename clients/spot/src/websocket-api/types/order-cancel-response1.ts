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
import type { OrderCancelResponse1Result } from './order-cancel-response1-result';
// May contain unused imports in some cases
// @ts-ignore
import type { TimeResponseRateLimitsInner } from './time-response-rate-limits-inner';

/**
 *
 * @export
 * @interface OrderCancelResponse1
 */
export interface OrderCancelResponse1 {
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponse1
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof OrderCancelResponse1
     */
    status?: number;
    /**
     *
     * @type {OrderCancelResponse1Result}
     * @memberof OrderCancelResponse1
     */
    result?: OrderCancelResponse1Result;
    /**
     *
     * @type {Array<TimeResponseRateLimitsInner>}
     * @memberof OrderCancelResponse1
     */
    rateLimits?: Array<TimeResponseRateLimitsInner>;
}
