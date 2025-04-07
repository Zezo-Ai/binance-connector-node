/* tslint:disable */

/**
 * Binance Spot WebSocket API
 *
 * OpenAPI Specifications for the Binance Spot WebSocket API
 *
 * API documents:
 * - [Github web-socket-api documentation file](https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-api.md)
 * - [General API information for web-socket-api on website](https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/general-api-information)
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
 * @interface MyAllocationsResponseResultInner
 */
export interface MyAllocationsResponseResultInner {
    /**
     *
     * @type {string}
     * @memberof MyAllocationsResponseResultInner
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof MyAllocationsResponseResultInner
     */
    allocationId?: number;
    /**
     *
     * @type {string}
     * @memberof MyAllocationsResponseResultInner
     */
    allocationType?: string;
    /**
     *
     * @type {number}
     * @memberof MyAllocationsResponseResultInner
     */
    orderId?: number;
    /**
     *
     * @type {number}
     * @memberof MyAllocationsResponseResultInner
     */
    orderListId?: number;
    /**
     *
     * @type {string}
     * @memberof MyAllocationsResponseResultInner
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof MyAllocationsResponseResultInner
     */
    qty?: string;
    /**
     *
     * @type {string}
     * @memberof MyAllocationsResponseResultInner
     */
    quoteQty?: string;
    /**
     *
     * @type {string}
     * @memberof MyAllocationsResponseResultInner
     */
    commission?: string;
    /**
     *
     * @type {string}
     * @memberof MyAllocationsResponseResultInner
     */
    commissionAsset?: string;
    /**
     *
     * @type {number}
     * @memberof MyAllocationsResponseResultInner
     */
    time?: number;
    /**
     *
     * @type {boolean}
     * @memberof MyAllocationsResponseResultInner
     */
    isBuyer?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof MyAllocationsResponseResultInner
     */
    isMaker?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof MyAllocationsResponseResultInner
     */
    isAllocator?: boolean;
}
