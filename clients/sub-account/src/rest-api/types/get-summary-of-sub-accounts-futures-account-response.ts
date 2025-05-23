/* tslint:disable */
/* eslint-disable */

/**
 * Binance Sub Account REST API
 *
 * OpenAPI Specification for the Binance Sub Account REST API
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
import type { GetSummaryOfSubAccountsFuturesAccountV2ResponseFutureAccountSummaryRespSubAccountListInner } from './get-summary-of-sub-accounts-futures-account-v2-response-future-account-summary-resp-sub-account-list-inner';

/**
 *
 * @export
 * @interface GetSummaryOfSubAccountsFuturesAccountResponse
 */
export interface GetSummaryOfSubAccountsFuturesAccountResponse {
    /**
     *
     * @type {string}
     * @memberof GetSummaryOfSubAccountsFuturesAccountResponse
     */
    totalInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof GetSummaryOfSubAccountsFuturesAccountResponse
     */
    totalMaintenanceMargin?: string;
    /**
     *
     * @type {string}
     * @memberof GetSummaryOfSubAccountsFuturesAccountResponse
     */
    totalMarginBalance?: string;
    /**
     *
     * @type {string}
     * @memberof GetSummaryOfSubAccountsFuturesAccountResponse
     */
    totalOpenOrderInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof GetSummaryOfSubAccountsFuturesAccountResponse
     */
    totalPositionInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof GetSummaryOfSubAccountsFuturesAccountResponse
     */
    totalUnrealizedProfit?: string;
    /**
     *
     * @type {string}
     * @memberof GetSummaryOfSubAccountsFuturesAccountResponse
     */
    totalWalletBalance?: string;
    /**
     *
     * @type {string}
     * @memberof GetSummaryOfSubAccountsFuturesAccountResponse
     */
    asset?: string;
    /**
     *
     * @type {Array<GetSummaryOfSubAccountsFuturesAccountV2ResponseFutureAccountSummaryRespSubAccountListInner>}
     * @memberof GetSummaryOfSubAccountsFuturesAccountResponse
     */
    subAccountList?: Array<GetSummaryOfSubAccountsFuturesAccountV2ResponseFutureAccountSummaryRespSubAccountListInner>;
}
