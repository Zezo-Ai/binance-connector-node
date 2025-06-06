/* tslint:disable */

/**
 * Binance Wallet REST API
 *
 * OpenAPI Specification for the Binance Wallet REST API
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
 * @interface AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
 */
export interface AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner {
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    network?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    coin?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    withdrawIntegerMultiple?: string;
    /**
     *
     * @type {boolean}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    isDefault?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    depositEnable?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    withdrawEnable?: boolean;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    depositDesc?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    withdrawDesc?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    specialTips?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    specialWithdrawTips?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    name?: string;
    /**
     *
     * @type {boolean}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    resetAddressStatus?: boolean;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    addressRegex?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    memoRegex?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    withdrawFee?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    withdrawMin?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    withdrawMax?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    withdrawInternalMin?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    depositDust?: string;
    /**
     *
     * @type {number}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    minConfirm?: number;
    /**
     *
     * @type {number}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    unLockConfirm?: number;
    /**
     *
     * @type {boolean}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    sameAddress?: boolean;
    /**
     *
     * @type {number}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    estimatedArrivalTime?: number;
    /**
     *
     * @type {boolean}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    busy?: boolean;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    contractAddressUrl?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    contractAddress?: string;
    /**
     *
     * @type {number}
     * @memberof AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner
     */
    denomination?: number;
}
