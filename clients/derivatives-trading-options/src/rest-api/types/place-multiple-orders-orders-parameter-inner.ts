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
 * @interface PlaceMultipleOrdersOrdersParameterInner
 */
export interface PlaceMultipleOrdersOrdersParameterInner {
    /**
     *
     * @type {string}
     * @memberof PlaceMultipleOrdersOrdersParameterInner
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof PlaceMultipleOrdersOrdersParameterInner
     */
    side?: PlaceMultipleOrdersOrdersParameterInnerSideEnum;
    /**
     *
     * @type {string}
     * @memberof PlaceMultipleOrdersOrdersParameterInner
     */
    type?: PlaceMultipleOrdersOrdersParameterInnerTypeEnum;
    /**
     *
     * @type {number}
     * @memberof PlaceMultipleOrdersOrdersParameterInner
     */
    quantity?: number;
    /**
     *
     * @type {number}
     * @memberof PlaceMultipleOrdersOrdersParameterInner
     */
    price?: number;
    /**
     *
     * @type {string}
     * @memberof PlaceMultipleOrdersOrdersParameterInner
     */
    timeInForce?: PlaceMultipleOrdersOrdersParameterInnerTimeInForceEnum;
    /**
     *
     * @type {boolean}
     * @memberof PlaceMultipleOrdersOrdersParameterInner
     */
    reduceOnly?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PlaceMultipleOrdersOrdersParameterInner
     */
    postOnly?: boolean;
    /**
     *
     * @type {string}
     * @memberof PlaceMultipleOrdersOrdersParameterInner
     */
    newOrderRespType?: PlaceMultipleOrdersOrdersParameterInnerNewOrderRespTypeEnum;
    /**
     *
     * @type {string}
     * @memberof PlaceMultipleOrdersOrdersParameterInner
     */
    clientOrderId?: string;
    /**
     *
     * @type {boolean}
     * @memberof PlaceMultipleOrdersOrdersParameterInner
     */
    isMmp?: boolean;
}

export const PlaceMultipleOrdersOrdersParameterInnerSideEnum = {
    BUY: 'BUY',
    SELL: 'SELL',
} as const;

export type PlaceMultipleOrdersOrdersParameterInnerSideEnum =
    (typeof PlaceMultipleOrdersOrdersParameterInnerSideEnum)[keyof typeof PlaceMultipleOrdersOrdersParameterInnerSideEnum];
export const PlaceMultipleOrdersOrdersParameterInnerTypeEnum = {
    LIMIT: 'LIMIT',
} as const;

export type PlaceMultipleOrdersOrdersParameterInnerTypeEnum =
    (typeof PlaceMultipleOrdersOrdersParameterInnerTypeEnum)[keyof typeof PlaceMultipleOrdersOrdersParameterInnerTypeEnum];
export const PlaceMultipleOrdersOrdersParameterInnerTimeInForceEnum = {
    GTC: 'GTC',
    IOC: 'IOC',
    FOK: 'FOK',
} as const;

export type PlaceMultipleOrdersOrdersParameterInnerTimeInForceEnum =
    (typeof PlaceMultipleOrdersOrdersParameterInnerTimeInForceEnum)[keyof typeof PlaceMultipleOrdersOrdersParameterInnerTimeInForceEnum];
export const PlaceMultipleOrdersOrdersParameterInnerNewOrderRespTypeEnum = {
    ACK: 'ACK',
    RESULT: 'RESULT',
} as const;

export type PlaceMultipleOrdersOrdersParameterInnerNewOrderRespTypeEnum =
    (typeof PlaceMultipleOrdersOrdersParameterInnerNewOrderRespTypeEnum)[keyof typeof PlaceMultipleOrdersOrdersParameterInnerNewOrderRespTypeEnum];
