/* tslint:disable */

/**
 * Binance Derivatives Trading COIN Futures WebSocket API
 *
 * OpenAPI Specification for the Binance Derivatives Trading COIN Futures WebSocket API
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
 * @interface AccountInformationResponseResultPositionsInner
 */
export interface AccountInformationResponseResultPositionsInner {
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponseResultPositionsInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponseResultPositionsInner
     */
    initialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponseResultPositionsInner
     */
    maintMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponseResultPositionsInner
     */
    unrealizedProfit?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponseResultPositionsInner
     */
    positionInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponseResultPositionsInner
     */
    openOrderInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponseResultPositionsInner
     */
    leverage?: string;
    /**
     *
     * @type {boolean}
     * @memberof AccountInformationResponseResultPositionsInner
     */
    isolated?: boolean;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponseResultPositionsInner
     */
    positionSide?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponseResultPositionsInner
     */
    entryPrice?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponseResultPositionsInner
     */
    maxQty?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponseResultPositionsInner
     */
    notionalValue?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponseResultPositionsInner
     */
    isolatedWallet?: string;
    /**
     *
     * @type {number}
     * @memberof AccountInformationResponseResultPositionsInner
     */
    updateTime?: number;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponseResultPositionsInner
     */
    positionAmt?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponseResultPositionsInner
     */
    breakEvenPrice?: string;
}
