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
import type { HashrateResaleListResponseData } from './hashrate-resale-list-response-data';

/**
 *
 * @export
 * @interface HashrateResaleListResponse
 */
export interface HashrateResaleListResponse {
    /**
     *
     * @type {number}
     * @memberof HashrateResaleListResponse
     */
    code?: number;
    /**
     *
     * @type {string}
     * @memberof HashrateResaleListResponse
     */
    msg?: string;
    /**
     *
     * @type {HashrateResaleListResponseData}
     * @memberof HashrateResaleListResponse
     */
    data?: HashrateResaleListResponseData;
}
