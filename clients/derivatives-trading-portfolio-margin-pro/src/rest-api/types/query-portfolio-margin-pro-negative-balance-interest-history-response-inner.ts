/* tslint:disable */

/**
 * Binance Derivatives Trading Portfolio Margin Pro REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading Portfolio Margin Pro REST API
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
 * @interface QueryPortfolioMarginProNegativeBalanceInterestHistoryResponseInner
 */
export interface QueryPortfolioMarginProNegativeBalanceInterestHistoryResponseInner {
    /**
     *
     * @type {string}
     * @memberof QueryPortfolioMarginProNegativeBalanceInterestHistoryResponseInner
     */
    asset?: string;
    /**
     *
     * @type {string}
     * @memberof QueryPortfolioMarginProNegativeBalanceInterestHistoryResponseInner
     */
    interest?: string;
    /**
     *
     * @type {number}
     * @memberof QueryPortfolioMarginProNegativeBalanceInterestHistoryResponseInner
     */
    interestAccruedTime?: number;
    /**
     *
     * @type {string}
     * @memberof QueryPortfolioMarginProNegativeBalanceInterestHistoryResponseInner
     */
    interestRate?: string;
    /**
     *
     * @type {string}
     * @memberof QueryPortfolioMarginProNegativeBalanceInterestHistoryResponseInner
     */
    principal?: string;
}
