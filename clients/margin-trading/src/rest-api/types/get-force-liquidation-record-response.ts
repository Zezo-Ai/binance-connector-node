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
import type { GetForceLiquidationRecordResponseRowsInner } from './get-force-liquidation-record-response-rows-inner';

/**
 *
 * @export
 * @interface GetForceLiquidationRecordResponse
 */
export interface GetForceLiquidationRecordResponse {
    /**
     *
     * @type {Array<GetForceLiquidationRecordResponseRowsInner>}
     * @memberof GetForceLiquidationRecordResponse
     */
    rows?: Array<GetForceLiquidationRecordResponseRowsInner>;
    /**
     *
     * @type {number}
     * @memberof GetForceLiquidationRecordResponse
     */
    total?: number;
}
