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
import type { QuerySubAccountAssetsResponseBalancesInner } from './query-sub-account-assets-response-balances-inner';

/**
 *
 * @export
 * @interface QuerySubAccountAssetsResponse
 */
export interface QuerySubAccountAssetsResponse {
    /**
     *
     * @type {Array<QuerySubAccountAssetsResponseBalancesInner>}
     * @memberof QuerySubAccountAssetsResponse
     */
    balances?: Array<QuerySubAccountAssetsResponseBalancesInner>;
}
