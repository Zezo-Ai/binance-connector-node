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
import type { QueryIsolatedMarginFeeDataResponseInnerDataInner } from './query-isolated-margin-fee-data-response-inner-data-inner';

/**
 *
 * @export
 * @interface QueryIsolatedMarginFeeDataResponseInner
 */
export interface QueryIsolatedMarginFeeDataResponseInner {
    /**
     *
     * @type {number}
     * @memberof QueryIsolatedMarginFeeDataResponseInner
     */
    vipLevel?: number;
    /**
     *
     * @type {string}
     * @memberof QueryIsolatedMarginFeeDataResponseInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof QueryIsolatedMarginFeeDataResponseInner
     */
    leverage?: string;
    /**
     *
     * @type {Array<QueryIsolatedMarginFeeDataResponseInnerDataInner>}
     * @memberof QueryIsolatedMarginFeeDataResponseInner
     */
    data?: Array<QueryIsolatedMarginFeeDataResponseInnerDataInner>;
}
