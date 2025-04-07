/* tslint:disable */

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

/**
 *
 * @export
 * @interface AccountInformationV3Response1AssetsInner
 */
export interface AccountInformationV3Response1AssetsInner {
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response1AssetsInner
     */
    asset?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response1AssetsInner
     */
    walletBalance?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response1AssetsInner
     */
    unrealizedProfit?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response1AssetsInner
     */
    marginBalance?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response1AssetsInner
     */
    maintMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response1AssetsInner
     */
    initialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response1AssetsInner
     */
    positionInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response1AssetsInner
     */
    openOrderInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response1AssetsInner
     */
    crossWalletBalance?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response1AssetsInner
     */
    crossUnPnl?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response1AssetsInner
     */
    availableBalance?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV3Response1AssetsInner
     */
    maxWithdrawAmount?: string;
    /**
     *
     * @type {number}
     * @memberof AccountInformationV3Response1AssetsInner
     */
    updateTime?: number;
}
