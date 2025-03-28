/* tslint:disable */
/* eslint-disable */

/**
 * Binance Wallet REST API
 *
 * OpenAPI Specification for the Binance Wallet REST API
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
import type { AccountApiTradingStatusResponseDataTriggerCondition } from './account-api-trading-status-response-data-trigger-condition';

/**
 *
 * @export
 * @interface AccountApiTradingStatusResponseData
 */
export interface AccountApiTradingStatusResponseData {
    /**
     *
     * @type {boolean}
     * @memberof AccountApiTradingStatusResponseData
     */
    isLocked?: boolean;
    /**
     *
     * @type {number}
     * @memberof AccountApiTradingStatusResponseData
     */
    plannedRecoverTime?: number;
    /**
     *
     * @type {AccountApiTradingStatusResponseDataTriggerCondition}
     * @memberof AccountApiTradingStatusResponseData
     */
    triggerCondition?: AccountApiTradingStatusResponseDataTriggerCondition;
    /**
     *
     * @type {number}
     * @memberof AccountApiTradingStatusResponseData
     */
    updateTime?: number;
}
