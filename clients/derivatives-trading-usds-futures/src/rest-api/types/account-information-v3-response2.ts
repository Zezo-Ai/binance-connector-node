/* tslint:disable */
/* eslint-disable */

/**
 * Binance Derivatives Trading USDS Futures REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading USDS Futures REST API
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
import type { AccountInformationV2Response2AssetsInner } from './account-information-v2-response2-assets-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { AccountInformationV3Response1PositionsInner } from './account-information-v3-response1-positions-inner';

/**
 *
 * @export
 * @interface AccountInformationV3Response2
 */
export interface AccountInformationV3Response2 {
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response2
     */
    totalInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response2
     */
    totalMaintMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response2
     */
    totalWalletBalance?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response2
     */
    totalUnrealizedProfit?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response2
     */
    totalMarginBalance?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response2
     */
    totalPositionInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response2
     */
    totalOpenOrderInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response2
     */
    totalCrossWalletBalance?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response2
     */
    totalCrossUnPnl?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response2
     */
    availableBalance?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response2
     */
    maxWithdrawAmount?: string;
    /**
     *
     * @type {Array<AccountInformationV2Response2AssetsInner>}
     * @memberof AccountInformationV3Response2
     */
    assets?: Array<AccountInformationV2Response2AssetsInner>;
    /**
     *
     * @type {Array<AccountInformationV3Response1PositionsInner>}
     * @memberof AccountInformationV3Response2
     */
    positions?: Array<AccountInformationV3Response1PositionsInner>;
}
