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
import type { OrderCancelResponse2Result } from './order-cancel-response2-result';
// May contain unused imports in some cases
// @ts-ignore
import type { TimeResponseRateLimitsInner } from './time-response-rate-limits-inner';

/**
 *
 * @export
 * @interface OrderCancelResponse2
 */
export interface OrderCancelResponse2 {
    /**
     *
     * @type {string}
     * @memberof OrderCancelResponse2
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof OrderCancelResponse2
     */
    status?: number;
    /**
     *
     * @type {OrderCancelResponse2Result}
     * @memberof OrderCancelResponse2
     */
    result?: OrderCancelResponse2Result;
    /**
     *
     * @type {Array<TimeResponseRateLimitsInner>}
     * @memberof OrderCancelResponse2
     */
    rateLimits?: Array<TimeResponseRateLimitsInner>;
}
