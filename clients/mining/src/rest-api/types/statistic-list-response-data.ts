/* tslint:disable */
/* eslint-disable */

/**
 * Binance Mining REST API
 *
 * OpenAPI Specification for the Binance Mining REST API
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
import type { StatisticListResponseDataProfitToday } from './statistic-list-response-data-profit-today';

/**
 *
 * @export
 * @interface StatisticListResponseData
 */
export interface StatisticListResponseData {
    /**
     *
     * @type {string}
     * @memberof StatisticListResponseData
     */
    fifteenMinHashRate?: string;
    /**
     *
     * @type {string}
     * @memberof StatisticListResponseData
     */
    dayHashRate?: string;
    /**
     *
     * @type {number}
     * @memberof StatisticListResponseData
     */
    validNum?: number;
    /**
     *
     * @type {number}
     * @memberof StatisticListResponseData
     */
    invalidNum?: number;
    /**
     *
     * @type {StatisticListResponseDataProfitToday}
     * @memberof StatisticListResponseData
     */
    profitToday?: StatisticListResponseDataProfitToday;
    /**
     *
     * @type {StatisticListResponseDataProfitToday}
     * @memberof StatisticListResponseData
     */
    profitYesterday?: StatisticListResponseDataProfitToday;
    /**
     *
     * @type {string}
     * @memberof StatisticListResponseData
     */
    userName?: string;
    /**
     *
     * @type {string}
     * @memberof StatisticListResponseData
     */
    unit?: string;
    /**
     *
     * @type {string}
     * @memberof StatisticListResponseData
     */
    algo?: string;
}
