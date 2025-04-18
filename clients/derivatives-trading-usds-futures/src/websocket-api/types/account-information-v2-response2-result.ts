/* tslint:disable */
/* eslint-disable */

/**
 * Binance Derivatives Trading USDS Futures WebSocket API
 *
 * OpenAPI Specification for the Binance Derivatives Trading USDS Futures WebSocket API
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
import type { AccountInformationV2Response1ResultPositionsInner } from './account-information-v2-response1-result-positions-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { AccountInformationV2Response2ResultAssetsInner } from './account-information-v2-response2-result-assets-inner';

/**
 *
 * @export
 * @interface AccountInformationV2Response2Result
 */
export interface AccountInformationV2Response2Result {
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response2Result
     */
    totalInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response2Result
     */
    totalMaintMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response2Result
     */
    totalWalletBalance?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response2Result
     */
    totalUnrealizedProfit?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response2Result
     */
    totalMarginBalance?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response2Result
     */
    totalPositionInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response2Result
     */
    totalOpenOrderInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response2Result
     */
    totalCrossWalletBalance?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response2Result
     */
    totalCrossUnPnl?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response2Result
     */
    availableBalance?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response2Result
     */
    maxWithdrawAmount?: string;
    /**
     *
     * @type {Array<AccountInformationV2Response2ResultAssetsInner>}
     * @memberof AccountInformationV2Response2Result
     */
    assets?: Array<AccountInformationV2Response2ResultAssetsInner>;
    /**
     *
     * @type {Array<AccountInformationV2Response1ResultPositionsInner>}
     * @memberof AccountInformationV2Response2Result
     */
    positions?: Array<AccountInformationV2Response1ResultPositionsInner>;
}
