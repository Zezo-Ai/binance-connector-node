/* tslint:disable */
/* eslint-disable */

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

// May contain unused imports in some cases
// @ts-ignore
import type { QueryManagedSubAccountSnapshotResponse3SnapshotVosInnerData } from './query-managed-sub-account-snapshot-response3-snapshot-vos-inner-data';

/**
 *
 * @export
 * @interface QueryManagedSubAccountSnapshotResponse3SnapshotVosInner
 */
export interface QueryManagedSubAccountSnapshotResponse3SnapshotVosInner {
    /**
     *
     * @type {QueryManagedSubAccountSnapshotResponse3SnapshotVosInnerData}
     * @memberof QueryManagedSubAccountSnapshotResponse3SnapshotVosInner
     */
    data?: QueryManagedSubAccountSnapshotResponse3SnapshotVosInnerData;
    /**
     *
     * @type {string}
     * @memberof QueryManagedSubAccountSnapshotResponse3SnapshotVosInner
     */
    type?: string;
    /**
     *
     * @type {number}
     * @memberof QueryManagedSubAccountSnapshotResponse3SnapshotVosInner
     */
    updateTime?: number;
}
