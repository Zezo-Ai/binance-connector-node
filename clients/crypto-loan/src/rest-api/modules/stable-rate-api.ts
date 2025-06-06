/**
 * Binance Crypto Loan REST API
 *
 * OpenAPI Specification for the Binance Crypto Loan REST API
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
    assertParamExists,
    sendRequest,
    type RequestArgs,
} from '@binance/common';
import type {
    CheckCollateralRepayRateStableRateResponse,
    GetCryptoLoansIncomeHistoryResponse,
    GetLoanBorrowHistoryResponse,
    GetLoanLtvAdjustmentHistoryResponse,
    GetLoanRepaymentHistoryResponse,
} from '../types';

/**
 * StableRateApi - axios parameter creator
 */
const StableRateApiAxiosParamCreator = function (configuration: ConfigurationRestAPI) {
    return {
        /**
         * Get the the rate of collateral coin / loan coin when using collateral repay, the rate will be valid within 8 second.
         *
         * Weight: 6000
         *
         * @summary Check Collateral Repay Rate(USER_DATA)
         * @param {string} loanCoin
         * @param {string} collateralCoin
         * @param {number} repayAmount repay amount of loanCoin
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        checkCollateralRepayRateStableRate: async (
            loanCoin: string,
            collateralCoin: string,
            repayAmount: number,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            // verify required parameter 'loanCoin' is not null or undefined
            assertParamExists('checkCollateralRepayRateStableRate', 'loanCoin', loanCoin);
            // verify required parameter 'collateralCoin' is not null or undefined
            assertParamExists(
                'checkCollateralRepayRateStableRate',
                'collateralCoin',
                collateralCoin
            );
            // verify required parameter 'repayAmount' is not null or undefined
            assertParamExists('checkCollateralRepayRateStableRate', 'repayAmount', repayAmount);

            const localVarQueryParameter: Record<string, unknown> = {};

            if (loanCoin !== undefined && loanCoin !== null) {
                localVarQueryParameter['loanCoin'] = loanCoin;
            }

            if (collateralCoin !== undefined && collateralCoin !== null) {
                localVarQueryParameter['collateralCoin'] = collateralCoin;
            }

            if (repayAmount !== undefined && repayAmount !== null) {
                localVarQueryParameter['repayAmount'] = repayAmount;
            }

            if (recvWindow !== undefined && recvWindow !== null) {
                localVarQueryParameter['recvWindow'] = recvWindow;
            }

            let _timeUnit: TimeUnit | undefined;
            if ('timeUnit' in configuration) _timeUnit = configuration.timeUnit as TimeUnit;

            return {
                endpoint: '/sapi/v1/loan/repay/collateral/rate',
                method: 'GET',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * Get Crypto Loans Income History
         *
         * If startTime and endTime are not sent, the recent 7-day data will be returned.
         * The max interval between startTime and endTime is 30 days.
         *
         * Weight: 6000
         *
         * @summary Get Crypto Loans Income History(USER_DATA)
         * @param {string} [asset]
         * @param {string} [type] All types will be returned by default. Enum：`borrowIn` ,`collateralSpent`, `repayAmount`, `collateralReturn`(Collateral return after repayment), `addCollateral`, `removeCollateral`, `collateralReturnAfterLiquidation`
         * @param {number} [startTime]
         * @param {number} [endTime]
         * @param {number} [limit] Default: 10; max: 100
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        getCryptoLoansIncomeHistory: async (
            asset?: string,
            type?: string,
            startTime?: number,
            endTime?: number,
            limit?: number,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            const localVarQueryParameter: Record<string, unknown> = {};

            if (asset !== undefined && asset !== null) {
                localVarQueryParameter['asset'] = asset;
            }

            if (type !== undefined && type !== null) {
                localVarQueryParameter['type'] = type;
            }

            if (startTime !== undefined && startTime !== null) {
                localVarQueryParameter['startTime'] = startTime;
            }

            if (endTime !== undefined && endTime !== null) {
                localVarQueryParameter['endTime'] = endTime;
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
                endpoint: '/sapi/v1/loan/income',
                method: 'GET',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * Get Loan Borrow History
         *
         * If startTime and endTime are not sent, the recent 90-day data will be returned.
         * The max interval between startTime and endTime is 180 days.
         *
         * Weight: 400
         *
         * @summary Get Loan Borrow History(USER_DATA)
         * @param {number} [orderId] orderId in `POST /sapi/v1/loan/borrow`
         * @param {string} [loanCoin]
         * @param {string} [collateralCoin]
         * @param {number} [startTime]
         * @param {number} [endTime]
         * @param {number} [current] Current querying page. Start from 1; default: 1; max: 1000
         * @param {number} [limit] Default: 10; max: 100
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        getLoanBorrowHistory: async (
            orderId?: number,
            loanCoin?: string,
            collateralCoin?: string,
            startTime?: number,
            endTime?: number,
            current?: number,
            limit?: number,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            const localVarQueryParameter: Record<string, unknown> = {};

            if (orderId !== undefined && orderId !== null) {
                localVarQueryParameter['orderId'] = orderId;
            }

            if (loanCoin !== undefined && loanCoin !== null) {
                localVarQueryParameter['loanCoin'] = loanCoin;
            }

            if (collateralCoin !== undefined && collateralCoin !== null) {
                localVarQueryParameter['collateralCoin'] = collateralCoin;
            }

            if (startTime !== undefined && startTime !== null) {
                localVarQueryParameter['startTime'] = startTime;
            }

            if (endTime !== undefined && endTime !== null) {
                localVarQueryParameter['endTime'] = endTime;
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
                endpoint: '/sapi/v1/loan/borrow/history',
                method: 'GET',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * Get Loan LTV Adjustment History
         *
         * If startTime and endTime are not sent, the recent 90-day data will be returned.
         * The max interval between startTime and endTime is 180 days.
         *
         * Weight: 400
         *
         * @summary Get Loan LTV Adjustment History(USER_DATA)
         * @param {number} [orderId] orderId in `POST /sapi/v1/loan/borrow`
         * @param {string} [loanCoin]
         * @param {string} [collateralCoin]
         * @param {number} [startTime]
         * @param {number} [endTime]
         * @param {number} [current] Current querying page. Start from 1; default: 1; max: 1000
         * @param {number} [limit] Default: 10; max: 100
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        getLoanLtvAdjustmentHistory: async (
            orderId?: number,
            loanCoin?: string,
            collateralCoin?: string,
            startTime?: number,
            endTime?: number,
            current?: number,
            limit?: number,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            const localVarQueryParameter: Record<string, unknown> = {};

            if (orderId !== undefined && orderId !== null) {
                localVarQueryParameter['orderId'] = orderId;
            }

            if (loanCoin !== undefined && loanCoin !== null) {
                localVarQueryParameter['loanCoin'] = loanCoin;
            }

            if (collateralCoin !== undefined && collateralCoin !== null) {
                localVarQueryParameter['collateralCoin'] = collateralCoin;
            }

            if (startTime !== undefined && startTime !== null) {
                localVarQueryParameter['startTime'] = startTime;
            }

            if (endTime !== undefined && endTime !== null) {
                localVarQueryParameter['endTime'] = endTime;
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
                endpoint: '/sapi/v1/loan/ltv/adjustment/history',
                method: 'GET',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
        /**
         * Get Loan Repayment History
         *
         * If startTime and endTime are not sent, the recent 90-day data will be returned.
         * The max interval between startTime and endTime is 180 days.
         *
         * Weight: 400
         *
         * @summary Get Loan Repayment History(USER_DATA)
         * @param {number} [orderId] orderId in `POST /sapi/v1/loan/borrow`
         * @param {string} [loanCoin]
         * @param {string} [collateralCoin]
         * @param {number} [startTime]
         * @param {number} [endTime]
         * @param {number} [current] Current querying page. Start from 1; default: 1; max: 1000
         * @param {number} [limit] Default: 10; max: 100
         * @param {number} [recvWindow]
         *
         * @throws {RequiredError}
         */
        getLoanRepaymentHistory: async (
            orderId?: number,
            loanCoin?: string,
            collateralCoin?: string,
            startTime?: number,
            endTime?: number,
            current?: number,
            limit?: number,
            recvWindow?: number
        ): Promise<RequestArgs> => {
            const localVarQueryParameter: Record<string, unknown> = {};

            if (orderId !== undefined && orderId !== null) {
                localVarQueryParameter['orderId'] = orderId;
            }

            if (loanCoin !== undefined && loanCoin !== null) {
                localVarQueryParameter['loanCoin'] = loanCoin;
            }

            if (collateralCoin !== undefined && collateralCoin !== null) {
                localVarQueryParameter['collateralCoin'] = collateralCoin;
            }

            if (startTime !== undefined && startTime !== null) {
                localVarQueryParameter['startTime'] = startTime;
            }

            if (endTime !== undefined && endTime !== null) {
                localVarQueryParameter['endTime'] = endTime;
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
                endpoint: '/sapi/v1/loan/repay/history',
                method: 'GET',
                params: localVarQueryParameter,
                timeUnit: _timeUnit,
            };
        },
    };
};

/**
 * StableRateApi - interface
 * @interface StableRateApi
 */
export interface StableRateApiInterface {
    /**
     * Get the the rate of collateral coin / loan coin when using collateral repay, the rate will be valid within 8 second.
     *
     * Weight: 6000
     *
     * @summary Check Collateral Repay Rate(USER_DATA)
     * @param {CheckCollateralRepayRateStableRateRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof StableRateApiInterface
     */
    checkCollateralRepayRateStableRate(
        requestParameters: CheckCollateralRepayRateStableRateRequest
    ): Promise<RestApiResponse<CheckCollateralRepayRateStableRateResponse>>;
    /**
     * Get Crypto Loans Income History
     *
     * If startTime and endTime are not sent, the recent 7-day data will be returned.
     * The max interval between startTime and endTime is 30 days.
     *
     * Weight: 6000
     *
     * @summary Get Crypto Loans Income History(USER_DATA)
     * @param {GetCryptoLoansIncomeHistoryRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof StableRateApiInterface
     */
    getCryptoLoansIncomeHistory(
        requestParameters?: GetCryptoLoansIncomeHistoryRequest
    ): Promise<RestApiResponse<GetCryptoLoansIncomeHistoryResponse>>;
    /**
     * Get Loan Borrow History
     *
     * If startTime and endTime are not sent, the recent 90-day data will be returned.
     * The max interval between startTime and endTime is 180 days.
     *
     * Weight: 400
     *
     * @summary Get Loan Borrow History(USER_DATA)
     * @param {GetLoanBorrowHistoryRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof StableRateApiInterface
     */
    getLoanBorrowHistory(
        requestParameters?: GetLoanBorrowHistoryRequest
    ): Promise<RestApiResponse<GetLoanBorrowHistoryResponse>>;
    /**
     * Get Loan LTV Adjustment History
     *
     * If startTime and endTime are not sent, the recent 90-day data will be returned.
     * The max interval between startTime and endTime is 180 days.
     *
     * Weight: 400
     *
     * @summary Get Loan LTV Adjustment History(USER_DATA)
     * @param {GetLoanLtvAdjustmentHistoryRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof StableRateApiInterface
     */
    getLoanLtvAdjustmentHistory(
        requestParameters?: GetLoanLtvAdjustmentHistoryRequest
    ): Promise<RestApiResponse<GetLoanLtvAdjustmentHistoryResponse>>;
    /**
     * Get Loan Repayment History
     *
     * If startTime and endTime are not sent, the recent 90-day data will be returned.
     * The max interval between startTime and endTime is 180 days.
     *
     * Weight: 400
     *
     * @summary Get Loan Repayment History(USER_DATA)
     * @param {GetLoanRepaymentHistoryRequest} requestParameters Request parameters.
     *
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof StableRateApiInterface
     */
    getLoanRepaymentHistory(
        requestParameters?: GetLoanRepaymentHistoryRequest
    ): Promise<RestApiResponse<GetLoanRepaymentHistoryResponse>>;
}

/**
 * Request parameters for checkCollateralRepayRateStableRate operation in StableRateApi.
 * @interface CheckCollateralRepayRateStableRateRequest
 */
export interface CheckCollateralRepayRateStableRateRequest {
    /**
     *
     * @type {string}
     * @memberof StableRateApiCheckCollateralRepayRateStableRate
     */
    readonly loanCoin: string;

    /**
     *
     * @type {string}
     * @memberof StableRateApiCheckCollateralRepayRateStableRate
     */
    readonly collateralCoin: string;

    /**
     * repay amount of loanCoin
     * @type {number}
     * @memberof StableRateApiCheckCollateralRepayRateStableRate
     */
    readonly repayAmount: number;

    /**
     *
     * @type {number}
     * @memberof StableRateApiCheckCollateralRepayRateStableRate
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for getCryptoLoansIncomeHistory operation in StableRateApi.
 * @interface GetCryptoLoansIncomeHistoryRequest
 */
export interface GetCryptoLoansIncomeHistoryRequest {
    /**
     *
     * @type {string}
     * @memberof StableRateApiGetCryptoLoansIncomeHistory
     */
    readonly asset?: string;

    /**
     * All types will be returned by default. Enum：`borrowIn` ,`collateralSpent`, `repayAmount`, `collateralReturn`(Collateral return after repayment), `addCollateral`, `removeCollateral`, `collateralReturnAfterLiquidation`
     * @type {string}
     * @memberof StableRateApiGetCryptoLoansIncomeHistory
     */
    readonly type?: string;

    /**
     *
     * @type {number}
     * @memberof StableRateApiGetCryptoLoansIncomeHistory
     */
    readonly startTime?: number;

    /**
     *
     * @type {number}
     * @memberof StableRateApiGetCryptoLoansIncomeHistory
     */
    readonly endTime?: number;

    /**
     * Default: 10; max: 100
     * @type {number}
     * @memberof StableRateApiGetCryptoLoansIncomeHistory
     */
    readonly limit?: number;

    /**
     *
     * @type {number}
     * @memberof StableRateApiGetCryptoLoansIncomeHistory
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for getLoanBorrowHistory operation in StableRateApi.
 * @interface GetLoanBorrowHistoryRequest
 */
export interface GetLoanBorrowHistoryRequest {
    /**
     * orderId in `POST /sapi/v1/loan/borrow`
     * @type {number}
     * @memberof StableRateApiGetLoanBorrowHistory
     */
    readonly orderId?: number;

    /**
     *
     * @type {string}
     * @memberof StableRateApiGetLoanBorrowHistory
     */
    readonly loanCoin?: string;

    /**
     *
     * @type {string}
     * @memberof StableRateApiGetLoanBorrowHistory
     */
    readonly collateralCoin?: string;

    /**
     *
     * @type {number}
     * @memberof StableRateApiGetLoanBorrowHistory
     */
    readonly startTime?: number;

    /**
     *
     * @type {number}
     * @memberof StableRateApiGetLoanBorrowHistory
     */
    readonly endTime?: number;

    /**
     * Current querying page. Start from 1; default: 1; max: 1000
     * @type {number}
     * @memberof StableRateApiGetLoanBorrowHistory
     */
    readonly current?: number;

    /**
     * Default: 10; max: 100
     * @type {number}
     * @memberof StableRateApiGetLoanBorrowHistory
     */
    readonly limit?: number;

    /**
     *
     * @type {number}
     * @memberof StableRateApiGetLoanBorrowHistory
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for getLoanLtvAdjustmentHistory operation in StableRateApi.
 * @interface GetLoanLtvAdjustmentHistoryRequest
 */
export interface GetLoanLtvAdjustmentHistoryRequest {
    /**
     * orderId in `POST /sapi/v1/loan/borrow`
     * @type {number}
     * @memberof StableRateApiGetLoanLtvAdjustmentHistory
     */
    readonly orderId?: number;

    /**
     *
     * @type {string}
     * @memberof StableRateApiGetLoanLtvAdjustmentHistory
     */
    readonly loanCoin?: string;

    /**
     *
     * @type {string}
     * @memberof StableRateApiGetLoanLtvAdjustmentHistory
     */
    readonly collateralCoin?: string;

    /**
     *
     * @type {number}
     * @memberof StableRateApiGetLoanLtvAdjustmentHistory
     */
    readonly startTime?: number;

    /**
     *
     * @type {number}
     * @memberof StableRateApiGetLoanLtvAdjustmentHistory
     */
    readonly endTime?: number;

    /**
     * Current querying page. Start from 1; default: 1; max: 1000
     * @type {number}
     * @memberof StableRateApiGetLoanLtvAdjustmentHistory
     */
    readonly current?: number;

    /**
     * Default: 10; max: 100
     * @type {number}
     * @memberof StableRateApiGetLoanLtvAdjustmentHistory
     */
    readonly limit?: number;

    /**
     *
     * @type {number}
     * @memberof StableRateApiGetLoanLtvAdjustmentHistory
     */
    readonly recvWindow?: number;
}

/**
 * Request parameters for getLoanRepaymentHistory operation in StableRateApi.
 * @interface GetLoanRepaymentHistoryRequest
 */
export interface GetLoanRepaymentHistoryRequest {
    /**
     * orderId in `POST /sapi/v1/loan/borrow`
     * @type {number}
     * @memberof StableRateApiGetLoanRepaymentHistory
     */
    readonly orderId?: number;

    /**
     *
     * @type {string}
     * @memberof StableRateApiGetLoanRepaymentHistory
     */
    readonly loanCoin?: string;

    /**
     *
     * @type {string}
     * @memberof StableRateApiGetLoanRepaymentHistory
     */
    readonly collateralCoin?: string;

    /**
     *
     * @type {number}
     * @memberof StableRateApiGetLoanRepaymentHistory
     */
    readonly startTime?: number;

    /**
     *
     * @type {number}
     * @memberof StableRateApiGetLoanRepaymentHistory
     */
    readonly endTime?: number;

    /**
     * Current querying page. Start from 1; default: 1; max: 1000
     * @type {number}
     * @memberof StableRateApiGetLoanRepaymentHistory
     */
    readonly current?: number;

    /**
     * Default: 10; max: 100
     * @type {number}
     * @memberof StableRateApiGetLoanRepaymentHistory
     */
    readonly limit?: number;

    /**
     *
     * @type {number}
     * @memberof StableRateApiGetLoanRepaymentHistory
     */
    readonly recvWindow?: number;
}

/**
 * StableRateApi - object-oriented interface
 * @class StableRateApi
 */
export class StableRateApi implements StableRateApiInterface {
    private readonly configuration: ConfigurationRestAPI;
    private localVarAxiosParamCreator;

    constructor(configuration: ConfigurationRestAPI) {
        this.configuration = configuration;
        this.localVarAxiosParamCreator = StableRateApiAxiosParamCreator(configuration);
    }

    /**
     * Get the the rate of collateral coin / loan coin when using collateral repay, the rate will be valid within 8 second.
     *
     * Weight: 6000
     *
     * @summary Check Collateral Repay Rate(USER_DATA)
     * @param {CheckCollateralRepayRateStableRateRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<CheckCollateralRepayRateStableRateResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof StableRateApi
     * @see {@link https://developers.binance.com/docs/crypto_loan/stable-rate/market-data/Check-Collateral-Repay-Rate Binance API Documentation}
     */
    public async checkCollateralRepayRateStableRate(
        requestParameters: CheckCollateralRepayRateStableRateRequest
    ): Promise<RestApiResponse<CheckCollateralRepayRateStableRateResponse>> {
        const localVarAxiosArgs =
            await this.localVarAxiosParamCreator.checkCollateralRepayRateStableRate(
                requestParameters?.loanCoin,
                requestParameters?.collateralCoin,
                requestParameters?.repayAmount,
                requestParameters?.recvWindow
            );
        return sendRequest<CheckCollateralRepayRateStableRateResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * Get Crypto Loans Income History
     *
     * If startTime and endTime are not sent, the recent 7-day data will be returned.
     * The max interval between startTime and endTime is 30 days.
     *
     * Weight: 6000
     *
     * @summary Get Crypto Loans Income History(USER_DATA)
     * @param {GetCryptoLoansIncomeHistoryRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetCryptoLoansIncomeHistoryResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof StableRateApi
     * @see {@link https://developers.binance.com/docs/crypto_loan/stable-rate/market-data/Get-Crypto-Loans-Income-History Binance API Documentation}
     */
    public async getCryptoLoansIncomeHistory(
        requestParameters: GetCryptoLoansIncomeHistoryRequest = {}
    ): Promise<RestApiResponse<GetCryptoLoansIncomeHistoryResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.getCryptoLoansIncomeHistory(
            requestParameters?.asset,
            requestParameters?.type,
            requestParameters?.startTime,
            requestParameters?.endTime,
            requestParameters?.limit,
            requestParameters?.recvWindow
        );
        return sendRequest<GetCryptoLoansIncomeHistoryResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * Get Loan Borrow History
     *
     * If startTime and endTime are not sent, the recent 90-day data will be returned.
     * The max interval between startTime and endTime is 180 days.
     *
     * Weight: 400
     *
     * @summary Get Loan Borrow History(USER_DATA)
     * @param {GetLoanBorrowHistoryRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetLoanBorrowHistoryResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof StableRateApi
     * @see {@link https://developers.binance.com/docs/crypto_loan/stable-rate/user-information/Get-Loan-Borrow-History Binance API Documentation}
     */
    public async getLoanBorrowHistory(
        requestParameters: GetLoanBorrowHistoryRequest = {}
    ): Promise<RestApiResponse<GetLoanBorrowHistoryResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.getLoanBorrowHistory(
            requestParameters?.orderId,
            requestParameters?.loanCoin,
            requestParameters?.collateralCoin,
            requestParameters?.startTime,
            requestParameters?.endTime,
            requestParameters?.current,
            requestParameters?.limit,
            requestParameters?.recvWindow
        );
        return sendRequest<GetLoanBorrowHistoryResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * Get Loan LTV Adjustment History
     *
     * If startTime and endTime are not sent, the recent 90-day data will be returned.
     * The max interval between startTime and endTime is 180 days.
     *
     * Weight: 400
     *
     * @summary Get Loan LTV Adjustment History(USER_DATA)
     * @param {GetLoanLtvAdjustmentHistoryRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetLoanLtvAdjustmentHistoryResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof StableRateApi
     * @see {@link https://developers.binance.com/docs/crypto_loan/stable-rate/user-information/Get-Loan-LTV-Adjustment-History Binance API Documentation}
     */
    public async getLoanLtvAdjustmentHistory(
        requestParameters: GetLoanLtvAdjustmentHistoryRequest = {}
    ): Promise<RestApiResponse<GetLoanLtvAdjustmentHistoryResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.getLoanLtvAdjustmentHistory(
            requestParameters?.orderId,
            requestParameters?.loanCoin,
            requestParameters?.collateralCoin,
            requestParameters?.startTime,
            requestParameters?.endTime,
            requestParameters?.current,
            requestParameters?.limit,
            requestParameters?.recvWindow
        );
        return sendRequest<GetLoanLtvAdjustmentHistoryResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }

    /**
     * Get Loan Repayment History
     *
     * If startTime and endTime are not sent, the recent 90-day data will be returned.
     * The max interval between startTime and endTime is 180 days.
     *
     * Weight: 400
     *
     * @summary Get Loan Repayment History(USER_DATA)
     * @param {GetLoanRepaymentHistoryRequest} requestParameters Request parameters.
     * @returns {Promise<RestApiResponse<GetLoanRepaymentHistoryResponse>>}
     * @throws {RequiredError | ConnectorClientError | UnauthorizedError | ForbiddenError | TooManyRequestsError | RateLimitBanError | ServerError | NotFoundError | NetworkError | BadRequestError}
     * @memberof StableRateApi
     * @see {@link https://developers.binance.com/docs/crypto_loan/stable-rate/user-information/Get-Loan-Repayment-History Binance API Documentation}
     */
    public async getLoanRepaymentHistory(
        requestParameters: GetLoanRepaymentHistoryRequest = {}
    ): Promise<RestApiResponse<GetLoanRepaymentHistoryResponse>> {
        const localVarAxiosArgs = await this.localVarAxiosParamCreator.getLoanRepaymentHistory(
            requestParameters?.orderId,
            requestParameters?.loanCoin,
            requestParameters?.collateralCoin,
            requestParameters?.startTime,
            requestParameters?.endTime,
            requestParameters?.current,
            requestParameters?.limit,
            requestParameters?.recvWindow
        );
        return sendRequest<GetLoanRepaymentHistoryResponse>(
            this.configuration,
            localVarAxiosArgs.endpoint,
            localVarAxiosArgs.method,
            localVarAxiosArgs.params,
            localVarAxiosArgs?.timeUnit,
            { isSigned: true }
        );
    }
}
