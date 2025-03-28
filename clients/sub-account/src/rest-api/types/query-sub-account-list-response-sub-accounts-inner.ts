/* tslint:disable */

/**
 * Binance Sub Account REST API
 *
 * OpenAPI Specification for the Binance Sub Account REST API
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
 * @interface QuerySubAccountListResponseSubAccountsInner
 */
export interface QuerySubAccountListResponseSubAccountsInner {
    /**
     *
     * @type {string}
     * @memberof QuerySubAccountListResponseSubAccountsInner
     */
    email?: string;
    /**
     *
     * @type {boolean}
     * @memberof QuerySubAccountListResponseSubAccountsInner
     */
    isFreeze?: boolean;
    /**
     *
     * @type {number}
     * @memberof QuerySubAccountListResponseSubAccountsInner
     */
    createTime?: number;
    /**
     *
     * @type {boolean}
     * @memberof QuerySubAccountListResponseSubAccountsInner
     */
    isManagedSubAccount?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof QuerySubAccountListResponseSubAccountsInner
     */
    isAssetManagementSubAccount?: boolean;
}
