/**
 * Binance VIP Loan REST API
 *
 * OpenAPI Specification for the Binance VIP Loan REST API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    ConfigurationRestAPI,
    TimeUnit,
    RestApiResponse,
    sendRequest,
    type RequestArgs,
} from '@binance/common';
import type {
    CheckVIPLoanCollateralAccountResponse,
    GetVIPLoanOngoingOrdersResponse,
    QueryApplicationStatusResponse,
} from '../types';

/**
 * UserInformationApi - axios parameter creator
 */
const UserInformationApiAxiosParamCreator = function (configuration: ConfigurationRestAPI) {
    return {
        /**
         * VIP loan is available for VIP users only
         *
         * If the login account is loan account, all collateral accounts under the loan account can be queried.
         * If the login account is collateral account, only the current collateral account can be queried.
         *
         * Weight: 6000
         *
         * @summary Check VIP Loan Collateral Account (USER_DATA)
         * @param {number} [orderId]
         * @param {number} [collateralAccountId]
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        checkVIPLoanCollateralAccount: async (
            orderId?: number,
            collateralAccountId?: number,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            const localVarQueryParameter: Record<string, unknown> = {};

            if (orderId !== undefined && orderId !== null) {
                localVarQueryParameter['orderId'] = orderId;
            }

            if (collateralAccountId !== undefined && collateralAccountId !== null) {
                localVarQueryParameter['collateralAccountId'] = collateralAccountId;
            }

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/loan/vip/collateral/account',
                method: 'GET',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * VIP loan is available for VIP users only.
         *
         * Weight: 400
         *
         * @summary Get VIP Loan Ongoing Orders(USER_DATA)
         * @param {number} [orderId]
         * @param {number} [collateralAccountId]
         * @param {string} [loanCoin]
         * @param {string} [collateralCoin]
         * @param {number} [current] Currently querying page. Start from 1, Default:1, Max: 1000.
         * @param {number} [limit] Default: 10, Max: 100
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        getVIPLoanOngoingOrders: async (
            orderId?: number,
            collateralAccountId?: number,
            loanCoin?: string,
            collateralCoin?: string,
            current?: number,
            limit?: number,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            const localVarQueryParameter: Record<string, unknown> = {};

            if (orderId !== undefined && orderId !== null) {
                localVarQueryParameter['orderId'] = orderId;
            }

            if (collateralAccountId !== undefined && collateralAccountId !== null) {
                localVarQueryParameter['collateralAccountId'] = collateralAccountId;
            }

            if (loanCoin !== undefined && loanCoin !== null) {
                localVarQueryParameter['loanCoin'] = loanCoin;
            }

            if (collateralCoin !== undefined && collateralCoin !== null) {
                localVarQueryParameter['collateralCoin'] = collateralCoin;
            }

            if (current !== undefined && current !== null) {
                localVarQueryParameter['current'] = current;
            }

            if (limit !== undefined && limit !== null) {
                localVarQueryParameter['limit'] = limit;
            }

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/loan/vip/ongoing/orders',
                method: 'GET',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * Query Application Status
         *
         * Weight: 400
         *
         * @summary Query Application Status(USER_DATA)
         * @param {number} [current] Currently querying page. Start from 1, Default:1, Max: 1000.
         * @param {number} [limit] Default: 10, Max: 100
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        queryApplicationStatus: async (
            current?: number,
            limit?: number,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            const localVarQueryParameter: Record<string, unknown> = {};

            if (current !== undefined && current !== null) {
                localVarQueryParameter['current'] = current;
            }

            if (limit !== undefined && limit !== null) {
                localVarQueryParameter['limit'] = limit;
            }

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/loan/vip/request/data',
                method: 'GET',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
    };
};

/**
 * UserInformationApi - interface
 * @interface UserInformationApi
 */
export interface UserInformationApiInterface {
    /**
     * VIP loan is available for VIP users only
     *
     * If the login account is loan account, all collateral accounts under the loan account can be queried.
     * If the login account is collateral account, only the current collateral account can be queried.
     *
     * Weight: 6000
     *
     * @summary Check VIP Loan Collateral Account (USER_DATA)
     * @param {CheckVIPLoanCollateralAccountRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof UserInformationApiInterface
     */
    checkVIPLoanCollateralAccount(
        requestParameters?: CheckVIPLoanCollateralAccountRequest
    ): Promise<RestApiResponse<CheckVIPLoanCollateralAccountResponse>>;
    /**
     * VIP loan is available for VIP users only.
     *
     * Weight: 400
     *
     * @summary Get VIP Loan Ongoing Orders(USER_DATA)
     * @param {GetVIPLoanOngoingOrdersRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof UserInformationApiInterface
     */
    getVIPLoanOngoingOrders(
        requestParameters?: GetVIPLoanOngoingOrdersRequest
    ): Promise<RestApiResponse<GetVIPLoanOngoingOrdersResponse>>;
    /**
     * Query Application Status
     *
     * Weight: 400
     *
     * @summary Query Application Status(USER_DATA)
     * @param {QueryApplicationStatusRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof UserInformationApiInterface
     */
    queryApplicationStatus(
        requestParameters?: QueryApplicationStatusRequest
    ): Promise<RestApiResponse<QueryApplicationStatusResponse>>;
}

/**
 * Request parameters for checkVIPLoanCollateralAccount operation in UserInformationApi.
 * @interface CheckVIPLoanCollateralAccountRequest
 */
export interface CheckVIPLoanCollateralAccountRequest {
    /**
     *
     * @type {number}
     * @memberof UserInformationApiCheckVIPLoanCollateralAccount
     */
    readonly orderId?: number;

    /**
     *
     * @type {number}
     * @memberof UserInformationApiCheckVIPLoanCollateralAccount
     */
    readonly collateralAccountId?: number;

    /**
     *
     * @type {number}
     * @memberof UserInformationApiCheckVIPLoanCollateralAccount
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for getVIPLoanOngoingOrders operation in UserInformationApi.
 * @interface GetVIPLoanOngoingOrdersRequest
 */
export interface GetVIPLoanOngoingOrdersRequest {
    /**
     *
     * @type {number}
     * @memberof UserInformationApiGetVIPLoanOngoingOrders
     */
    readonly orderId?: number;

    /**
     *
     * @type {number}
     * @memberof UserInformationApiGetVIPLoanOngoingOrders
     */
    readonly collateralAccountId?: number;

    /**
     *
     * @type {string}
     * @memberof UserInformationApiGetVIPLoanOngoingOrders
     */
    readonly loanCoin?: string;

    /**
     *
     * @type {string}
     * @memberof UserInformationApiGetVIPLoanOngoingOrders
     */
    readonly collateralCoin?: string;

    /**
     * Currently querying page. Start from 1, Default:1, Max: 1000.
     * @type {number}
     * @memberof UserInformationApiGetVIPLoanOngoingOrders
     */
    readonly current?: number;

    /**
     * Default: 10, Max: 100
     * @type {number}
     * @memberof UserInformationApiGetVIPLoanOngoingOrders
     */
    readonly limit?: number;

    /**
     *
     * @type {number}
     * @memberof UserInformationApiGetVIPLoanOngoingOrders
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for queryApplicationStatus operation in UserInformationApi.
 * @interface QueryApplicationStatusRequest
 */
export interface QueryApplicationStatusRequest {
    /**
     * Currently querying page. Start from 1, Default:1, Max: 1000.
     * @type {number}
     * @memberof UserInformationApiQueryApplicationStatus
     */
    readonly current?: number;

    /**
     * Default: 10, Max: 100
     * @type {number}
     * @memberof UserInformationApiQueryApplicationStatus
     */
    readonly limit?: number;

    /**
     *
     * @type {number}
     * @memberof UserInformationApiQueryApplicationStatus
     */
    readonly recvWindow?: number;
}

/**
 * UserInformationApi - object-oriented interface
 * @class UserInformationApi
 */
export class UserInformationApi implements UserInformationApiInterface {
    private readonly configuration: ConfigurationRestAPI;
    private localVarAxiosParamCreator;

    constructor(configuration: ConfigurationRestAPI) {
        this.configuration = configuration;
        this.localVarAxiosParamCreator = UserInformationApiAxiosParamCreator(configuration);
    }

    /**
     * VIP loan is available for VIP users only
     *
     * If the login account is loan account, all collateral accounts under the loan account can be queried.
     * If the login account is collateral account, only the current collateral account can be queried.
     *
     * Weight: 6000
     *
     * @summary Check VIP Loan Collateral Account (USER_DATA)
     * @param {CheckVIPLoanCollateralAccountRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<CheckVIPLoanCollateralAccountResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof UserInformationApi
     * @see {@link https://developers.binance.com/docs/vip_loan/user-information/Check-Locked-Value-of-VIP-Collateral-Account Binance API Documentation}
     */
    public async checkVIPLoanCollateralAccount(
        requestParameters: CheckVIPLoanCollateralAccountRequest = {}
    ): Promise<RestApiResponse<CheckVIPLoanCollateralAccountResponse>> {
        const localVarAxiosArgs =
            await this.localVarAxiosParamCreator.checkVIPLoanCollateralAccount(
                requestParameters?.orderId,
                requestParameters?.collateralAccountId,
                requestParameters?.recvWindow
            );
        return sendRequest<CheckVIPLoanCollateralAccountResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * VIP loan is available for VIP users only.
     *
     * Weight: 400
     *
     * @summary Get VIP Loan Ongoing Orders(USER_DATA)
     * @param {GetVIPLoanOngoingOrdersRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetVIPLoanOngoingOrdersResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof UserInformationApi
     * @see {@link https://developers.binance.com/docs/vip_loan/user-information/Get-VIP-Loan-Ongoing-Orders Binance API Documentation}
     */
    public async getVIPLoanOngoingOrders(
        requestParameters: GetVIPLoanOngoingOrdersRequest = {}
    ): Promise<RestApiResponse<GetVIPLoanOngoingOrdersResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.getVIPLoanOngoingOrders(
            requestParameters?.orderId,
            requestParameters?.collateralAccountId,
            requestParameters?.loanCoin,
            requestParameters?.collateralCoin,
            requestParameters?.current,
            requestParameters?.limit,
            requestParameters?.recvWindow
        );
        return sendRequest<GetVIPLoanOngoingOrdersResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * Query Application Status
     *
     * Weight: 400
     *
     * @summary Query Application Status(USER_DATA)
     * @param {QueryApplicationStatusRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<QueryApplicationStatusResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof UserInformationApi
     * @see {@link https://developers.binance.com/docs/vip_loan/user-information/Query-Application-Status Binance API Documentation}
     */
    public async queryApplicationStatus(
        requestParameters: QueryApplicationStatusRequest = {}
    ): Promise<RestApiResponse<QueryApplicationStatusResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.queryApplicationStatus(
            requestParameters?.current,
            requestParameters?.limit,
            requestParameters?.recvWindow
        );
        return sendRequest<QueryApplicationStatusResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }
}
