/* tslint:disable */
/* eslint-disable */

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

// May contain unused imports in some cases
// @ts-ignore
import type { GetPortfolioMarginProSpanAccountInfoResponseRiskUnitMMListInner } from './get-portfolio-margin-pro-span-account-info-response-risk-unit-mmlist-inner';

/**
 *
 * @export
 * @interface GetPortfolioMarginProSpanAccountInfoResponse
 */
export interface GetPortfolioMarginProSpanAccountInfoResponse {
    /**
     *
     * @type {string}
     * @memberof GetPortfolioMarginProSpanAccountInfoResponse
     */
    uniMMR?: string;
    /**
     *
     * @type {string}
     * @memberof GetPortfolioMarginProSpanAccountInfoResponse
     */
    accountEquity?: string;
    /**
     *
     * @type {string}
     * @memberof GetPortfolioMarginProSpanAccountInfoResponse
     */
    actualEquity?: string;
    /**
     *
     * @type {string}
     * @memberof GetPortfolioMarginProSpanAccountInfoResponse
     */
    accountMaintMargin?: string;
    /**
     *
     * @type {Array<GetPortfolioMarginProSpanAccountInfoResponseRiskUnitMMListInner>}
     * @memberof GetPortfolioMarginProSpanAccountInfoResponse
     */
    riskUnitMMList?: Array<GetPortfolioMarginProSpanAccountInfoResponseRiskUnitMMListInner>;
    /**
     *
     * @type {string}
     * @memberof GetPortfolioMarginProSpanAccountInfoResponse
     */
    marginMM?: string;
    /**
     *
     * @type {string}
     * @memberof GetPortfolioMarginProSpanAccountInfoResponse
     */
    otherMM?: string;
    /**
     *
     * @type {string}
     * @memberof GetPortfolioMarginProSpanAccountInfoResponse
     */
    accountStatus?: string;
    /**
     *
     * @type {string}
     * @memberof GetPortfolioMarginProSpanAccountInfoResponse
     */
    accountType?: string;
}
