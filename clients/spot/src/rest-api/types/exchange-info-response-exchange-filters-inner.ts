/* tslint:disable */

/**
 * Binance Spot REST API
 *
 * OpenAPI Specifications for the Binance Spot REST API
 *
 * API documents:
 * - [Github rest-api documentation file](https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md)
 * - [General API information for rest-api on website](https://developers.binance.com/docs/binance-spot-api-docs/rest-api/general-api-information)
 *
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
 * @interface ExchangeInfoResponseExchangeFiltersInner
 */
export interface ExchangeInfoResponseExchangeFiltersInner {
    /**
     *
     * @type {string}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    filterType?: string;
    /**
     *
     * @type {string}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    minPrice?: string;
    /**
     *
     * @type {string}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    maxPrice?: string;
    /**
     *
     * @type {string}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    tickSize?: string;
    /**
     *
     * @type {string}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    multiplierUp?: string;
    /**
     *
     * @type {string}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    multiplierDown?: string;
    /**
     *
     * @type {number}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    avgPriceMins?: number;
    /**
     *
     * @type {string}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    bidMultiplierUp?: string;
    /**
     *
     * @type {string}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    bidMultiplierDown?: string;
    /**
     *
     * @type {string}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    askMultiplierUp?: string;
    /**
     *
     * @type {string}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    askMultiplierDown?: string;
    /**
     *
     * @type {string}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    minQty?: string;
    /**
     *
     * @type {string}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    maxQty?: string;
    /**
     *
     * @type {string}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    stepSize?: string;
    /**
     *
     * @type {string}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    minNotional?: string;
    /**
     *
     * @type {boolean}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    applyToMarket?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    applyMinToMarket?: boolean;
    /**
     *
     * @type {string}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    maxNotional?: string;
    /**
     *
     * @type {boolean}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    applyMaxToMarket?: boolean;
    /**
     *
     * @type {number}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    limit?: number;
    /**
     *
     * @type {number}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    maxNumOrders?: number;
    /**
     *
     * @type {number}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    maxNumAlgoOrders?: number;
    /**
     *
     * @type {number}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    maxNumIcebergOrders?: number;
    /**
     *
     * @type {string}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    maxPosition?: string;
    /**
     *
     * @type {number}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    minTrailingAboveDelta?: number;
    /**
     *
     * @type {number}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    maxTrailingAboveDelta?: number;
    /**
     *
     * @type {number}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    minTrailingBelowDelta?: number;
    /**
     *
     * @type {number}
     * @memberof ExchangeInfoResponseExchangeFiltersInner
     */
    maxTrailingBelowDelta?: number;
}
