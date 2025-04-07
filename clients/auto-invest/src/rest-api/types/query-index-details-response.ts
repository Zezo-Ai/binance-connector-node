/* tslint:disable */
/* eslint-disable */

/**
 * Binance Auto Invest REST API
 *
 * OpenAPI Specification for the Binance Auto Invest REST API
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
import type { QueryIndexDetailsResponseAssetAllocationInner } from './query-index-details-response-asset-allocation-inner';

/**
 *
 * @export
 * @interface QueryIndexDetailsResponse
 */
export interface QueryIndexDetailsResponse {
    /**
     *
     * @type {number}
     * @memberof QueryIndexDetailsResponse
     */
    indexId?: number;
    /**
     *
     * @type {string}
     * @memberof QueryIndexDetailsResponse
     */
    indexName?: string;
    /**
     *
     * @type {string}
     * @memberof QueryIndexDetailsResponse
     */
    status?: string;
    /**
     *
     * @type {Array<QueryIndexDetailsResponseAssetAllocationInner>}
     * @memberof QueryIndexDetailsResponse
     */
    assetAllocation?: Array<QueryIndexDetailsResponseAssetAllocationInner>;
}
