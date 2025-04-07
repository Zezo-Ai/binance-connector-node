/* tslint:disable */
/* eslint-disable */

/**
 * Binance Derivatives Trading COIN Futures REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading COIN Futures REST API
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
import type { NotionalBracketForPairResponseInnerBracketsInner } from './notional-bracket-for-pair-response-inner-brackets-inner';

/**
 *
 * @export
 * @interface NotionalBracketForSymbolResponseInner
 */
export interface NotionalBracketForSymbolResponseInner {
    /**
     *
     * @type {string}
     * @memberof NotionalBracketForSymbolResponseInner
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof NotionalBracketForSymbolResponseInner
     */
    notionalCoef?: number;
    /**
     *
     * @type {Array<NotionalBracketForPairResponseInnerBracketsInner>}
     * @memberof NotionalBracketForSymbolResponseInner
     */
    brackets?: Array<NotionalBracketForPairResponseInnerBracketsInner>;
}
