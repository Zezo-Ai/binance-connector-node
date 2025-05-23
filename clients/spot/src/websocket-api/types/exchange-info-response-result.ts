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
import type { ExchangeInfoResponseResultExchangeFiltersInner } from './exchange-info-response-result-exchange-filters-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { ExchangeInfoResponseResultRateLimitsInner } from './exchange-info-response-result-rate-limits-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { ExchangeInfoResponseResultSorsInner } from './exchange-info-response-result-sors-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { ExchangeInfoResponseResultSymbolsInner } from './exchange-info-response-result-symbols-inner';

/**
 *
 * @export
 * @interface ExchangeInfoResponseResult
 */
export interface ExchangeInfoResponseResult {
    /**
     *
     * @type {string}
     * @memberof ExchangeInfoResponseResult
     */
    timezone?: string;
    /**
     *
     * @type {number}
     * @memberof ExchangeInfoResponseResult
     */
    serverTime?: number;
    /**
     *
     * @type {Array<ExchangeInfoResponseResultRateLimitsInner>}
     * @memberof ExchangeInfoResponseResult
     */
    rateLimits?: Array<ExchangeInfoResponseResultRateLimitsInner>;
    /**
     *
     * @type {Array<ExchangeInfoResponseResultExchangeFiltersInner>}
     * @memberof ExchangeInfoResponseResult
     */
    exchangeFilters?: Array<ExchangeInfoResponseResultExchangeFiltersInner>;
    /**
     *
     * @type {Array<ExchangeInfoResponseResultSymbolsInner>}
     * @memberof ExchangeInfoResponseResult
     */
    symbols?: Array<ExchangeInfoResponseResultSymbolsInner>;
    /**
     *
     * @type {Array<ExchangeInfoResponseResultSorsInner>}
     * @memberof ExchangeInfoResponseResult
     */
    sors?: Array<ExchangeInfoResponseResultSorsInner>;
}
