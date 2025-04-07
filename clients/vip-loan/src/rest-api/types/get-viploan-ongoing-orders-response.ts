/* tslint:disable */
/* eslint-disable */

/**
 * Binance VIP Loan REST API
 *
 * OpenAPI Specification for the Binance VIP Loan REST API
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
import type { GetVIPLoanOngoingOrdersResponseRowsInner } from './get-viploan-ongoing-orders-response-rows-inner';

/**
 *
 * @export
 * @interface GetVIPLoanOngoingOrdersResponse
 */
export interface GetVIPLoanOngoingOrdersResponse {
    /**
     *
     * @type {Array<GetVIPLoanOngoingOrdersResponseRowsInner>}
     * @memberof GetVIPLoanOngoingOrdersResponse
     */
    rows?: Array<GetVIPLoanOngoingOrdersResponseRowsInner>;
    /**
     *
     * @type {number}
     * @memberof GetVIPLoanOngoingOrdersResponse
     */
    total?: number;
}
