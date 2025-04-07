/* tslint:disable */

/**
 * Binance Convert REST API
 *
 * OpenAPI Specification for the Binance Convert REST API
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
 * @interface OrderStatusResponse
 */
export interface OrderStatusResponse {
    /**
     *
     * @type {number}
     * @memberof OrderStatusResponse
     */
    orderId?: number;
    /**
     *
     * @type {string}
     * @memberof OrderStatusResponse
     */
    orderStatus?: string;
    /**
     *
     * @type {string}
     * @memberof OrderStatusResponse
     */
    fromAsset?: string;
    /**
     *
     * @type {string}
     * @memberof OrderStatusResponse
     */
    fromAmount?: string;
    /**
     *
     * @type {string}
     * @memberof OrderStatusResponse
     */
    toAsset?: string;
    /**
     *
     * @type {string}
     * @memberof OrderStatusResponse
     */
    toAmount?: string;
    /**
     *
     * @type {string}
     * @memberof OrderStatusResponse
     */
    ratio?: string;
    /**
     *
     * @type {string}
     * @memberof OrderStatusResponse
     */
    inverseRatio?: string;
    /**
     *
     * @type {number}
     * @memberof OrderStatusResponse
     */
    createTime?: number;
}
