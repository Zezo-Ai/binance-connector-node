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
import type { UiKlinesItem } from './ui-klines-item';

/**
 *
 * @export
 * @interface UiKlinesResponse
 */
export interface UiKlinesResponse {
    /**
     *
     * @type {string}
     * @memberof UiKlinesResponse
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof UiKlinesResponse
     */
    status?: number;
    /**
     *
     * @type {Array<UiKlinesItem>}
     * @memberof UiKlinesResponse
     */
    result?: Array<UiKlinesItem>;
    /**
     *
     * @type {Array<AvgPriceResponseRateLimitsInner>}
     * @memberof UiKlinesResponse
     */
    rateLimits?: Array<AvgPriceResponseRateLimitsInner>;
}
