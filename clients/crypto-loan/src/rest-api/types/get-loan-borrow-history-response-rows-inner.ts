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
 * @interface GetLoanBorrowHistoryResponseRowsInner
 */
export interface GetLoanBorrowHistoryResponseRowsInner {
    /**
     *
     * @type {number}
     * @memberof GetLoanBorrowHistoryResponseRowsInner
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof GetLoanBorrowHistoryResponseRowsInner
     */
    loanCoin?: string;
    /**
     *
     * @type {string}
     * @memberof GetLoanBorrowHistoryResponseRowsInner
     */
    initialLoanAmount?: string;
    /**
     *
     * @type {string}
     * @memberof GetLoanBorrowHistoryResponseRowsInner
     */
    hourlyInterestRate?: string;
    /**
     *
     * @type {string}
     * @memberof GetLoanBorrowHistoryResponseRowsInner
     */
    loanTerm?: string;
    /**
     *
     * @type {string}
     * @memberof GetLoanBorrowHistoryResponseRowsInner
     */
    collateralCoin?: string;
    /**
     *
     * @type {string}
     * @memberof GetLoanBorrowHistoryResponseRowsInner
     */
    initialCollateralAmount?: string;
    /**
     *
     * @type {number}
     * @memberof GetLoanBorrowHistoryResponseRowsInner
     */
    borrowTime?: number;
    /**
     *
     * @type {string}
     * @memberof GetLoanBorrowHistoryResponseRowsInner
     */
    status?: string;
}
