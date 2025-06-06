/* tslint:disable */
/* eslint-disable */

/**
 * Binance Margin Trading REST API
 *
 * OpenAPI Specification for the Binance Margin Trading REST API
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
import type { MarginAccountNewOtocoResponseOrderReportsInner } from './margin-account-new-otoco-response-order-reports-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { MarginAccountNewOtocoResponseOrdersInner } from './margin-account-new-otoco-response-orders-inner';

/**
 *
 * @export
 * @interface MarginAccountNewOtocoResponse
 */
export interface MarginAccountNewOtocoResponse {
    /**
     *
     * @type {number}
     * @memberof MarginAccountNewOtocoResponse
     */
    orderListId?: number;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOtocoResponse
     */
    contingencyType?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOtocoResponse
     */
    listStatusType?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOtocoResponse
     */
    listOrderStatus?: string;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOtocoResponse
     */
    listClientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof MarginAccountNewOtocoResponse
     */
    transactionTime?: number;
    /**
     *
     * @type {string}
     * @memberof MarginAccountNewOtocoResponse
     */
    symbol?: string;
    /**
     *
     * @type {boolean}
     * @memberof MarginAccountNewOtocoResponse
     */
    isIsolated?: boolean;
    /**
     *
     * @type {Array<MarginAccountNewOtocoResponseOrdersInner>}
     * @memberof MarginAccountNewOtocoResponse
     */
    orders?: Array<MarginAccountNewOtocoResponseOrdersInner>;
    /**
     *
     * @type {Array<MarginAccountNewOtocoResponseOrderReportsInner>}
     * @memberof MarginAccountNewOtocoResponse
     */
    orderReports?: Array<MarginAccountNewOtocoResponseOrderReportsInner>;
}
