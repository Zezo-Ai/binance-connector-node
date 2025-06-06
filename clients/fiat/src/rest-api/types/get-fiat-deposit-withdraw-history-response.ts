/* tslint:disable */
/* eslint-disable */

/**
 * Binance Fiat REST API
 *
 * OpenAPI Specification for the Binance Fiat REST API
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
import type { GetFiatDepositWithdrawHistoryResponseDataInner } from './get-fiat-deposit-withdraw-history-response-data-inner';

/**
 *
 * @export
 * @interface GetFiatDepositWithdrawHistoryResponse
 */
export interface GetFiatDepositWithdrawHistoryResponse {
    /**
     *
     * @type {string}
     * @memberof GetFiatDepositWithdrawHistoryResponse
     */
    code?: string;
    /**
     *
     * @type {string}
     * @memberof GetFiatDepositWithdrawHistoryResponse
     */
    message?: string;
    /**
     *
     * @type {Array<GetFiatDepositWithdrawHistoryResponseDataInner>}
     * @memberof GetFiatDepositWithdrawHistoryResponse
     */
    data?: Array<GetFiatDepositWithdrawHistoryResponseDataInner>;
    /**
     *
     * @type {number}
     * @memberof GetFiatDepositWithdrawHistoryResponse
     */
    total?: number;
    /**
     *
     * @type {boolean}
     * @memberof GetFiatDepositWithdrawHistoryResponse
     */
    success?: boolean;
}
