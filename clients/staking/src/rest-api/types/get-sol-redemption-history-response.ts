/* tslint:disable */
/* eslint-disable */

/**
 * Binance Staking REST API
 *
 * OpenAPI Specification for the Binance Staking REST API
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
import type { GetSolRedemptionHistoryResponseRowsInner } from './get-sol-redemption-history-response-rows-inner';

/**
 *
 * @export
 * @interface GetSolRedemptionHistoryResponse
 */
export interface GetSolRedemptionHistoryResponse {
    /**
     *
     * @type {Array<GetSolRedemptionHistoryResponseRowsInner>}
     * @memberof GetSolRedemptionHistoryResponse
     */
    rows?: Array<GetSolRedemptionHistoryResponseRowsInner>;
    /**
     *
     * @type {number}
     * @memberof GetSolRedemptionHistoryResponse
     */
    total?: number;
}
