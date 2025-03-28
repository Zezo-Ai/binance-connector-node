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
import type { QuerySubAccountFuturesAssetTransferHistoryResponseTransfersInner } from './query-sub-account-futures-asset-transfer-history-response-transfers-inner';

/**
 *
 * @export
 * @interface QuerySubAccountFuturesAssetTransferHistoryResponse
 */
export interface QuerySubAccountFuturesAssetTransferHistoryResponse {
    /**
     *
     * @type {boolean}
     * @memberof QuerySubAccountFuturesAssetTransferHistoryResponse
     */
    success?: boolean;
    /**
     *
     * @type {number}
     * @memberof QuerySubAccountFuturesAssetTransferHistoryResponse
     */
    futuresType?: number;
    /**
     *
     * @type {Array<QuerySubAccountFuturesAssetTransferHistoryResponseTransfersInner>}
     * @memberof QuerySubAccountFuturesAssetTransferHistoryResponse
     */
    transfers?: Array<QuerySubAccountFuturesAssetTransferHistoryResponseTransfersInner>;
}
