/* tslint:disable */
/* eslint-disable */

/**
 * Binance Crypto Loan REST API
 *
 * OpenAPI Specification for the Binance Crypto Loan REST API
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
import type { GetCollateralAssetsDataResponseRowsInner } from './get-collateral-assets-data-response-rows-inner';

/**
 *
 * @export
 * @interface GetCollateralAssetsDataResponse
 */
export interface GetCollateralAssetsDataResponse {
    /**
     *
     * @type {Array<GetCollateralAssetsDataResponseRowsInner>}
     * @memberof GetCollateralAssetsDataResponse
     */
    rows?: Array<GetCollateralAssetsDataResponseRowsInner>;
    /**
     *
     * @type {number}
     * @memberof GetCollateralAssetsDataResponse
     */
    total?: number;
}
