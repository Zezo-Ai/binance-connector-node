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
 * @interface FlexibleLoanRepayResponse
 */
export interface FlexibleLoanRepayResponse {
    /**
     *
     * @type {string}
     * @memberof FlexibleLoanRepayResponse
     */
    loanCoin?: string;
    /**
     *
     * @type {string}
     * @memberof FlexibleLoanRepayResponse
     */
    collateralCoin?: string;
    /**
     *
     * @type {string}
     * @memberof FlexibleLoanRepayResponse
     */
    remainingDebt?: string;
    /**
     *
     * @type {string}
     * @memberof FlexibleLoanRepayResponse
     */
    remainingCollateral?: string;
    /**
     *
     * @type {boolean}
     * @memberof FlexibleLoanRepayResponse
     */
    fullRepayment?: boolean;
    /**
     *
     * @type {string}
     * @memberof FlexibleLoanRepayResponse
     */
    currentLTV?: string;
    /**
     *
     * @type {string}
     * @memberof FlexibleLoanRepayResponse
     */
    repayStatus?: string;
}
