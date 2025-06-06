/* tslint:disable */
/* eslint-disable */

/**
 * Binance Derivatives Trading Portfolio Margin REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading Portfolio Margin REST API
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
import type { CmPositionAdlQuantileEstimationResponseInnerAdlQuantile } from './cm-position-adl-quantile-estimation-response-inner-adl-quantile';

/**
 *
 * @export
 * @interface UmPositionAdlQuantileEstimationResponseInner
 */
export interface UmPositionAdlQuantileEstimationResponseInner {
    /**
     *
     * @type {string}
     * @memberof UmPositionAdlQuantileEstimationResponseInner
     */
    symbol?: string;
    /**
     *
     * @type {CmPositionAdlQuantileEstimationResponseInnerAdlQuantile}
     * @memberof UmPositionAdlQuantileEstimationResponseInner
     */
    adlQuantile?: CmPositionAdlQuantileEstimationResponseInnerAdlQuantile;
}
