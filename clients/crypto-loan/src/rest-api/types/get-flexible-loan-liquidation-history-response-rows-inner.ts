/* tslint:disable */

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

/**
 *
 * @export
 * @interface GetFlexibleLoanLiquidationHistoryResponseRowsInner
 */
export interface GetFlexibleLoanLiquidationHistoryResponseRowsInner {
    /**
     *
     * @type {string}
     * @memberof GetFlexibleLoanLiquidationHistoryResponseRowsInner
     */
    loanCoin?: string;
    /**
     *
     * @type {string}
     * @memberof GetFlexibleLoanLiquidationHistoryResponseRowsInner
     */
    liquidationDebt?: string;
    /**
     *
     * @type {string}
     * @memberof GetFlexibleLoanLiquidationHistoryResponseRowsInner
     */
    collateralCoin?: string;
    /**
     *
     * @type {string}
     * @memberof GetFlexibleLoanLiquidationHistoryResponseRowsInner
     */
    liquidationCollateralAmount?: string;
    /**
     *
     * @type {string}
     * @memberof GetFlexibleLoanLiquidationHistoryResponseRowsInner
     */
    returnCollateralAmount?: string;
    /**
     *
     * @type {string}
     * @memberof GetFlexibleLoanLiquidationHistoryResponseRowsInner
     */
    liquidationFee?: string;
    /**
     *
     * @type {string}
     * @memberof GetFlexibleLoanLiquidationHistoryResponseRowsInner
     */
    liquidationStartingPrice?: string;
    /**
     *
     * @type {number}
     * @memberof GetFlexibleLoanLiquidationHistoryResponseRowsInner
     */
    liquidationStartingTime?: number;
    /**
     *
     * @type {string}
     * @memberof GetFlexibleLoanLiquidationHistoryResponseRowsInner
     */
    status?: string;
}
