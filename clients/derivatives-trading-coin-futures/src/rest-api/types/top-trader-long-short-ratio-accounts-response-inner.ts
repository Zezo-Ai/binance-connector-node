/* tslint:disable */

/**
 * Binance Derivatives Trading COIN Futures REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading COIN Futures REST API
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
 * @interface TopTraderLongShortRatioAccountsResponseInner
 */
export interface TopTraderLongShortRatioAccountsResponseInner {
    /**
     *
     * @type {string}
     * @memberof TopTraderLongShortRatioAccountsResponseInner
     */
    pair?: string;
    /**
     *
     * @type {string}
     * @memberof TopTraderLongShortRatioAccountsResponseInner
     */
    longShortRatio?: string;
    /**
     *
     * @type {string}
     * @memberof TopTraderLongShortRatioAccountsResponseInner
     */
    longAccount?: string;
    /**
     *
     * @type {string}
     * @memberof TopTraderLongShortRatioAccountsResponseInner
     */
    shortAccount?: string;
    /**
     *
     * @type {number}
     * @memberof TopTraderLongShortRatioAccountsResponseInner
     */
    timestamp?: number;
}
