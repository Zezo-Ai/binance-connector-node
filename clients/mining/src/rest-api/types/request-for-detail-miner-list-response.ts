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
import type { RequestForDetailMinerListResponseDataInner } from './request-for-detail-miner-list-response-data-inner';

/**
 *
 * @export
 * @interface RequestForDetailMinerListResponse
 */
export interface RequestForDetailMinerListResponse {
    /**
     *
     * @type {number}
     * @memberof RequestForDetailMinerListResponse
     */
    code?: number;
    /**
     *
     * @type {string}
     * @memberof RequestForDetailMinerListResponse
     */
    msg?: string;
    /**
     *
     * @type {Array<RequestForDetailMinerListResponseDataInner>}
     * @memberof RequestForDetailMinerListResponse
     */
    data?: Array<RequestForDetailMinerListResponseDataInner>;
}
