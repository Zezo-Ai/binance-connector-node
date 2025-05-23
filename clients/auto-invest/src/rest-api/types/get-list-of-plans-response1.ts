/* tslint:disable */
/* eslint-disable */

/**
 * Binance Auto Invest REST API
 *
 * OpenAPI Specification for the Binance Auto Invest REST API
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
import type { GetListOfPlansResponse1PlansInner } from './get-list-of-plans-response1-plans-inner';

/**
 *
 * @export
 * @interface GetListOfPlansResponse1
 */
export interface GetListOfPlansResponse1 {
    /**
     *
     * @type {string}
     * @memberof GetListOfPlansResponse1
     */
    planValueInUSD?: string;
    /**
     *
     * @type {string}
     * @memberof GetListOfPlansResponse1
     */
    planValueInBTC?: string;
    /**
     *
     * @type {string}
     * @memberof GetListOfPlansResponse1
     */
    pnlInUSD?: string;
    /**
     *
     * @type {string}
     * @memberof GetListOfPlansResponse1
     */
    roi?: string;
    /**
     *
     * @type {Array<GetListOfPlansResponse1PlansInner>}
     * @memberof GetListOfPlansResponse1
     */
    plans?: Array<GetListOfPlansResponse1PlansInner>;
}
