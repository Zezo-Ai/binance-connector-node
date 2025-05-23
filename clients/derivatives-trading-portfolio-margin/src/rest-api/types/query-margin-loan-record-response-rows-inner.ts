/* tslint:disable */

/**
 * Binance Derivatives Trading Portfolio Margin REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading Portfolio Margin REST API
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
 * @interface QueryMarginLoanRecordResponseRowsInner
 */
export interface QueryMarginLoanRecordResponseRowsInner {
    /**
     *
     * @type {number}
     * @memberof QueryMarginLoanRecordResponseRowsInner
     */
    txId?: number;
    /**
     *
     * @type {string}
     * @memberof QueryMarginLoanRecordResponseRowsInner
     */
    asset?: string;
    /**
     *
     * @type {string}
     * @memberof QueryMarginLoanRecordResponseRowsInner
     */
    principal?: string;
    /**
     *
     * @type {number}
     * @memberof QueryMarginLoanRecordResponseRowsInner
     */
    timestamp?: number;
    /**
     *
     * @type {string}
     * @memberof QueryMarginLoanRecordResponseRowsInner
     */
    status?: string;
}
