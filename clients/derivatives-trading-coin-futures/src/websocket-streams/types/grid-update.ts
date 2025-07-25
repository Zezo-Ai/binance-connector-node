/* tslint:disable */
/* eslint-disable */

/**
 * Binance Derivatives Trading COIN Futures WebSocket Market Streams
 *
 * OpenAPI Specification for the Binance Derivatives Trading COIN Futures WebSocket Market Streams
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
import type { GridUpdateGu } from './grid-update-gu';

/**
 *
 * @export
 * @interface GridUpdate
 */
export interface GridUpdate {
    /**
     *
     * @type {number}
     * @memberof GridUpdate
     */
    T?: number;
    /**
     *
     * @type {number}
     * @memberof GridUpdate
     */
    E?: number;
    /**
     *
     * @type {GridUpdateGu}
     * @memberof GridUpdate
     */
    gu?: GridUpdateGu;
}
