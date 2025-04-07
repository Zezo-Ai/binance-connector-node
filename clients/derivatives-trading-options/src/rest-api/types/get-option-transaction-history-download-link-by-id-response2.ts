/* tslint:disable */

/**
 * Binance Derivatives Trading Options REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading Options REST API
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
 * @interface GetOptionTransactionHistoryDownloadLinkByIdResponse2
 */
export interface GetOptionTransactionHistoryDownloadLinkByIdResponse2 {
    /**
     *
     * @type {string}
     * @memberof GetOptionTransactionHistoryDownloadLinkByIdResponse2
     */
    downloadId?: string;
    /**
     *
     * @type {string}
     * @memberof GetOptionTransactionHistoryDownloadLinkByIdResponse2
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof GetOptionTransactionHistoryDownloadLinkByIdResponse2
     */
    url?: string;
    /**
     *
     * @type {boolean}
     * @memberof GetOptionTransactionHistoryDownloadLinkByIdResponse2
     */
    notified?: boolean;
    /**
     *
     * @type {number}
     * @memberof GetOptionTransactionHistoryDownloadLinkByIdResponse2
     */
    expirationTimestamp?: number;
    /**
     *
     * @type {string}
     * @memberof GetOptionTransactionHistoryDownloadLinkByIdResponse2
     */
    isExpired?: string;
}
