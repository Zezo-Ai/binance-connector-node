/* tslint:disable */
/* eslint-disable */

/**
 * Binance Margin Trading REST API
 *
 * OpenAPI Specification for the Binance Margin Trading REST API
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
import type { GetSmallLiabilityExchangeHistoryResponseRowsInner } from './get-small-liability-exchange-history-response-rows-inner';

/**
 *
 * @export
 * @interface GetSmallLiabilityExchangeHistoryResponse
 */
export interface GetSmallLiabilityExchangeHistoryResponse {
    /**
     *
     * @type {number}
     * @memberof GetSmallLiabilityExchangeHistoryResponse
     */
    total?: number;
    /**
     *
     * @type {Array<GetSmallLiabilityExchangeHistoryResponseRowsInner>}
     * @memberof GetSmallLiabilityExchangeHistoryResponse
     */
    rows?: Array<GetSmallLiabilityExchangeHistoryResponseRowsInner>;
}
