/* tslint:disable */
/* eslint-disable */

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

// May contain unused imports in some cases
// @ts-ignore
import type { OrderTestResponse2ResultDiscount } from './order-test-response2-result-discount';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderTestResponse2ResultStandardCommissionForOrder } from './order-test-response2-result-standard-commission-for-order';

/**
 *
 * @export
 * @interface OrderTestResponse2Result
 */
export interface OrderTestResponse2Result {
    /**
     *
     * @type {OrderTestResponse2ResultStandardCommissionForOrder}
     * @memberof OrderTestResponse2Result
     */
    standardCommissionForOrder?: OrderTestResponse2ResultStandardCommissionForOrder;
    /**
     *
     * @type {OrderTestResponse2ResultStandardCommissionForOrder}
     * @memberof OrderTestResponse2Result
     */
    taxCommissionForOrder?: OrderTestResponse2ResultStandardCommissionForOrder;
    /**
     *
     * @type {OrderTestResponse2ResultDiscount}
     * @memberof OrderTestResponse2Result
     */
    discount?: OrderTestResponse2ResultDiscount;
}
