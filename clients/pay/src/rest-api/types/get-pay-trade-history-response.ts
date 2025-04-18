/* tslint:disable */
/* eslint-disable */

/**
 * Binance Pay REST API
 *
 * OpenAPI Specification for the Binance Pay REST API
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
import type { GetPayTradeHistoryResponseDataInner } from './get-pay-trade-history-response-data-inner';

/**
 *
 * @export
 * @interface GetPayTradeHistoryResponse
 */
export interface GetPayTradeHistoryResponse {
    /**
     *
     * @type {string}
     * @memberof GetPayTradeHistoryResponse
     */
    code?: string;
    /**
     *
     * @type {string}
     * @memberof GetPayTradeHistoryResponse
     */
    message?: string;
    /**
     *
     * @type {Array<GetPayTradeHistoryResponseDataInner>}
     * @memberof GetPayTradeHistoryResponse
     */
    data?: Array<GetPayTradeHistoryResponseDataInner>;
    /**
     *
     * @type {boolean}
     * @memberof GetPayTradeHistoryResponse
     */
    success?: boolean;
}
