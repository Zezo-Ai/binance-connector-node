/* tslint:disable */

/**
 * Binance Staking REST API
 *
 * OpenAPI Specification for the Binance Staking REST API
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
 * @interface GetBoostRewardsHistoryResponseRowsInner
 */
export interface GetBoostRewardsHistoryResponseRowsInner {
    /**
     *
     * @type {number}
     * @memberof GetBoostRewardsHistoryResponseRowsInner
     */
    time?: number;
    /**
     *
     * @type {string}
     * @memberof GetBoostRewardsHistoryResponseRowsInner
     */
    token?: string;
    /**
     *
     * @type {string}
     * @memberof GetBoostRewardsHistoryResponseRowsInner
     */
    amount?: string;
    /**
     *
     * @type {string}
     * @memberof GetBoostRewardsHistoryResponseRowsInner
     */
    bnsolHolding?: string;
    /**
     *
     * @type {string}
     * @memberof GetBoostRewardsHistoryResponseRowsInner
     */
    status?: string;
}
