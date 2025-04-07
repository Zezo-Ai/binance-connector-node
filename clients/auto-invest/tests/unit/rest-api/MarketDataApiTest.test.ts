/**
 * Binance Auto Invest REST API
 *
 * OpenAPI Specification for the Binance Auto Invest REST API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { jest, expect, beforeEach, describe, it } from '@jest/globals';
import { ConfigurationRestAPI, type RestApiResponse } from '@binance/common';

import { MarketDataApi } from '../../../src/rest-api';
import {
    GetListOfPlansRequest,
    GetTargetAssetListRequest,
    GetTargetAssetRoiDataRequest,
    QueryAllSourceAssetAndTargetAssetRequest,
    QueryIndexDetailsRequest,
    QuerySourceAssetListRequest,
} from '../../../src/rest-api';
import type {
    GetListOfPlansResponse,
    GetTargetAssetListResponse,
    GetTargetAssetRoiDataResponse,
    QueryAllSourceAssetAndTargetAssetResponse,
    QueryIndexDetailsResponse,
    QuerySourceAssetListResponse,
} from '../../../src/rest-api/types';

describe('MarketDataApi', () => {
    let client: MarketDataApi;
    let config: ConfigurationRestAPI;
    let mockResponse: object = {};

    beforeEach(() => {
        config = new ConfigurationRestAPI({
            apiKey: 'test-api-key',
            apiSecret: 'test-api-secret',
            basePath: '',
        });
        client = new MarketDataApi(config);
    });

    describe('getListOfPlans()', () => {
        it('should execute getListOfPlans() successfully with required parameters only', async () => {
            const params: GetListOfPlansRequest = {
                planType: 'planType_example',
            };

            mockResponse = {
                planValueInUSD: '123',
                planValueInBTC: '0.1',
                pnlInUSD: '120',
                roi: '2.3',
                plans: [
                    {
                        planId: 12345,
                        planType: 'SINGLE',
                        editAllowed: 'true',
                        creationDateTime: 1648378800000,
                        firstExecutionDateTime: 1648378800000,
                        nextExecutionDateTime: 1648378800000,
                        status: 'ONGOING',
                        lastUpdatedDateTime: 1648378800000,
                        targetAsset: 'BTC',
                        totalTargetAmount: '0.111',
                        sourceAsset: 'BUSD',
                        totalInvestedInUSD: '4.555',
                        subscriptionAmount: '0.1',
                        subscriptionCycle: 'WEEKLY',
                        subscriptionStartDay: null,
                        subscriptionStartWeekday: 'MON',
                        subscriptionStartTime: '1',
                        sourceWallet: 'SPOT_WALLET',
                        flexibleAllowedToUse: 'false',
                        planValueInUSD: '101.2',
                        pnlInUSD: '101.2',
                        roi: '1.02',
                    },
                ],
            };

            const spy = jest.spyOn(client, 'getListOfPlans').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetListOfPlansResponse>)
            );
            const response = await client.getListOfPlans(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute getListOfPlans() successfully with optional parameters', async () => {
            const params: GetListOfPlansRequest = {
                planType: 'planType_example',
                recvWindow: 5000,
            };

            mockResponse = {
                planValueInUSD: '123',
                planValueInBTC: '0.1',
                pnlInUSD: '120',
                roi: '2.3',
                plans: [
                    {
                        planId: 12345,
                        planType: 'SINGLE',
                        editAllowed: 'true',
                        creationDateTime: 1648378800000,
                        firstExecutionDateTime: 1648378800000,
                        nextExecutionDateTime: 1648378800000,
                        status: 'ONGOING',
                        lastUpdatedDateTime: 1648378800000,
                        targetAsset: 'BTC',
                        totalTargetAmount: '0.111',
                        sourceAsset: 'BUSD',
                        totalInvestedInUSD: '4.555',
                        subscriptionAmount: '0.1',
                        subscriptionCycle: 'WEEKLY',
                        subscriptionStartDay: null,
                        subscriptionStartWeekday: 'MON',
                        subscriptionStartTime: '1',
                        sourceWallet: 'SPOT_WALLET',
                        flexibleAllowedToUse: 'false',
                        planValueInUSD: '101.2',
                        pnlInUSD: '101.2',
                        roi: '1.02',
                    },
                ],
            };

            const spy = jest.spyOn(client, 'getListOfPlans').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetListOfPlansResponse>)
            );
            const response = await client.getListOfPlans(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when planType is missing', async () => {
            const _params: GetListOfPlansRequest = {
                planType: 'planType_example',
            };
            const params = Object.assign({ ..._params });
            delete params?.planType;

            await expect(client.getListOfPlans(params)).rejects.toThrow(
                'Required parameter planType was null or undefined when calling getListOfPlans.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: GetListOfPlansRequest = {
                planType: 'planType_example',
            };

            const errorResponse = {
                code: -1111,
                msg: 'Server Error',
            };

            const mockError = new Error('ResponseError') as Error & {
                response?: { status: number; data: unknown };
            };
            mockError.response = { status: 400, data: errorResponse };
            const spy = jest.spyOn(client, 'getListOfPlans').mockRejectedValueOnce(mockError);
            await expect(client.getListOfPlans(params)).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('getTargetAssetList()', () => {
        it('should execute getTargetAssetList() successfully with required parameters only', async () => {
            mockResponse = {
                targetAssets: ['BTC'],
                autoInvestAssetList: [
                    {
                        targetAsset: 'BTC',
                        roiAndDimensionTypeList: [
                            { simulateRoi: '5.004', dimensionValue: '3', dimensionUnit: 'year' },
                            { simulateRoi: '2.004', dimensionValue: '1', dimensionUnit: 'year' },
                            { simulateRoi: '1.004', dimensionValue: '6', dimensionUnit: 'month' },
                            { simulateRoi: '0.904', dimensionValue: '3', dimensionUnit: 'month' },
                            { simulateRoi: '0.14', dimensionValue: '7', dimensionUnit: 'day' },
                        ],
                    },
                ],
            };

            const spy = jest.spyOn(client, 'getTargetAssetList').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetTargetAssetListResponse>)
            );
            const response = await client.getTargetAssetList();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute getTargetAssetList() successfully with optional parameters', async () => {
            const params: GetTargetAssetListRequest = {
                targetAsset: 789,
                size: 8,
                current: 1,
                recvWindow: 5000,
            };

            mockResponse = {
                targetAssets: ['BTC'],
                autoInvestAssetList: [
                    {
                        targetAsset: 'BTC',
                        roiAndDimensionTypeList: [
                            { simulateRoi: '5.004', dimensionValue: '3', dimensionUnit: 'year' },
                            { simulateRoi: '2.004', dimensionValue: '1', dimensionUnit: 'year' },
                            { simulateRoi: '1.004', dimensionValue: '6', dimensionUnit: 'month' },
                            { simulateRoi: '0.904', dimensionValue: '3', dimensionUnit: 'month' },
                            { simulateRoi: '0.14', dimensionValue: '7', dimensionUnit: 'day' },
                        ],
                    },
                ],
            };

            const spy = jest.spyOn(client, 'getTargetAssetList').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetTargetAssetListResponse>)
            );
            const response = await client.getTargetAssetList(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw an error when server is returning an error', async () => {
            const errorResponse = {
                code: -1111,
                msg: 'Server Error',
            };

            const mockError = new Error('ResponseError') as Error & {
                response?: { status: number; data: unknown };
            };
            mockError.response = { status: 400, data: errorResponse };
            const spy = jest.spyOn(client, 'getTargetAssetList').mockRejectedValueOnce(mockError);
            await expect(client.getTargetAssetList()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('getTargetAssetRoiData()', () => {
        it('should execute getTargetAssetRoiData() successfully with required parameters only', async () => {
            const params: GetTargetAssetRoiDataRequest = {
                targetAsset: 'targetAsset_example',
                hisRoiType: 'hisRoiType_example',
            };

            mockResponse = [
                { date: '1648378800000', simulateRoi: '1.75' },
                { date: '1648478800000', simulateRoi: '2.9' },
            ];

            const spy = jest.spyOn(client, 'getTargetAssetRoiData').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetTargetAssetRoiDataResponse>)
            );
            const response = await client.getTargetAssetRoiData(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute getTargetAssetRoiData() successfully with optional parameters', async () => {
            const params: GetTargetAssetRoiDataRequest = {
                targetAsset: 'targetAsset_example',
                hisRoiType: 'hisRoiType_example',
                recvWindow: 5000,
            };

            mockResponse = [
                { date: '1648378800000', simulateRoi: '1.75' },
                { date: '1648478800000', simulateRoi: '2.9' },
            ];

            const spy = jest.spyOn(client, 'getTargetAssetRoiData').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetTargetAssetRoiDataResponse>)
            );
            const response = await client.getTargetAssetRoiData(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when targetAsset is missing', async () => {
            const _params: GetTargetAssetRoiDataRequest = {
                targetAsset: 'targetAsset_example',
                hisRoiType: 'hisRoiType_example',
            };
            const params = Object.assign({ ..._params });
            delete params?.targetAsset;

            await expect(client.getTargetAssetRoiData(params)).rejects.toThrow(
                'Required parameter targetAsset was null or undefined when calling getTargetAssetRoiData.'
            );
        });

        it('should throw RequiredError when hisRoiType is missing', async () => {
            const _params: GetTargetAssetRoiDataRequest = {
                targetAsset: 'targetAsset_example',
                hisRoiType: 'hisRoiType_example',
            };
            const params = Object.assign({ ..._params });
            delete params?.hisRoiType;

            await expect(client.getTargetAssetRoiData(params)).rejects.toThrow(
                'Required parameter hisRoiType was null or undefined when calling getTargetAssetRoiData.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: GetTargetAssetRoiDataRequest = {
                targetAsset: 'targetAsset_example',
                hisRoiType: 'hisRoiType_example',
            };

            const errorResponse = {
                code: -1111,
                msg: 'Server Error',
            };

            const mockError = new Error('ResponseError') as Error & {
                response?: { status: number; data: unknown };
            };
            mockError.response = { status: 400, data: errorResponse };
            const spy = jest
                .spyOn(client, 'getTargetAssetRoiData')
                .mockRejectedValueOnce(mockError);
            await expect(client.getTargetAssetRoiData(params)).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('queryAllSourceAssetAndTargetAsset()', () => {
        it('should execute queryAllSourceAssetAndTargetAsset() successfully with required parameters only', async () => {
            mockResponse = { targetAssets: ['BTC', 'BNB'], sourceAssets: ['USDT', 'BUSD'] };

            const spy = jest.spyOn(client, 'queryAllSourceAssetAndTargetAsset').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryAllSourceAssetAndTargetAssetResponse>)
            );
            const response = await client.queryAllSourceAssetAndTargetAsset();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute queryAllSourceAssetAndTargetAsset() successfully with optional parameters', async () => {
            const params: QueryAllSourceAssetAndTargetAssetRequest = {
                recvWindow: 5000,
            };

            mockResponse = { targetAssets: ['BTC', 'BNB'], sourceAssets: ['USDT', 'BUSD'] };

            const spy = jest.spyOn(client, 'queryAllSourceAssetAndTargetAsset').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryAllSourceAssetAndTargetAssetResponse>)
            );
            const response = await client.queryAllSourceAssetAndTargetAsset(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw an error when server is returning an error', async () => {
            const errorResponse = {
                code: -1111,
                msg: 'Server Error',
            };

            const mockError = new Error('ResponseError') as Error & {
                response?: { status: number; data: unknown };
            };
            mockError.response = { status: 400, data: errorResponse };
            const spy = jest
                .spyOn(client, 'queryAllSourceAssetAndTargetAsset')
                .mockRejectedValueOnce(mockError);
            await expect(client.queryAllSourceAssetAndTargetAsset()).rejects.toThrow(
                'ResponseError'
            );
            spy.mockRestore();
        });
    });

    describe('queryIndexDetails()', () => {
        it('should execute queryIndexDetails() successfully with required parameters only', async () => {
            const params: QueryIndexDetailsRequest = {
                indexId: 1,
            };

            mockResponse = {
                indexId: 1,
                indexName: 'BINANCE TOP 10 EW ',
                status: 'RUNNING',
                assetAllocation: [
                    { targetAsset: 'ADA', allocation: '10' },
                    { targetAsset: 'BTC', allocation: '10' },
                ],
            };

            const spy = jest.spyOn(client, 'queryIndexDetails').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryIndexDetailsResponse>)
            );
            const response = await client.queryIndexDetails(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute queryIndexDetails() successfully with optional parameters', async () => {
            const params: QueryIndexDetailsRequest = {
                indexId: 1,
                recvWindow: 5000,
            };

            mockResponse = {
                indexId: 1,
                indexName: 'BINANCE TOP 10 EW ',
                status: 'RUNNING',
                assetAllocation: [
                    { targetAsset: 'ADA', allocation: '10' },
                    { targetAsset: 'BTC', allocation: '10' },
                ],
            };

            const spy = jest.spyOn(client, 'queryIndexDetails').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryIndexDetailsResponse>)
            );
            const response = await client.queryIndexDetails(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when indexId is missing', async () => {
            const _params: QueryIndexDetailsRequest = {
                indexId: 1,
            };
            const params = Object.assign({ ..._params });
            delete params?.indexId;

            await expect(client.queryIndexDetails(params)).rejects.toThrow(
                'Required parameter indexId was null or undefined when calling queryIndexDetails.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: QueryIndexDetailsRequest = {
                indexId: 1,
            };

            const errorResponse = {
                code: -1111,
                msg: 'Server Error',
            };

            const mockError = new Error('ResponseError') as Error & {
                response?: { status: number; data: unknown };
            };
            mockError.response = { status: 400, data: errorResponse };
            const spy = jest.spyOn(client, 'queryIndexDetails').mockRejectedValueOnce(mockError);
            await expect(client.queryIndexDetails(params)).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('querySourceAssetList()', () => {
        it('should execute querySourceAssetList() successfully with required parameters only', async () => {
            const params: QuerySourceAssetListRequest = {
                usageType: 'usageType_example',
            };

            mockResponse = {
                feeRate: '0.002',
                taxRate: '0.001',
                sourceAssets: [
                    {
                        sourceAsset: 'USDT',
                        assetMinAmount: '0.1',
                        assetMaxAmount: '1000000',
                        scale: '2',
                        flexibleAmount: '1111',
                    },
                    {
                        sourceAsset: 'BUSD',
                        assetMinAmount: '0.1',
                        assetMaxAmount: '1000000',
                        scale: '2',
                        flexibleAmount: '1111',
                    },
                ],
            };

            const spy = jest.spyOn(client, 'querySourceAssetList').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QuerySourceAssetListResponse>)
            );
            const response = await client.querySourceAssetList(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute querySourceAssetList() successfully with optional parameters', async () => {
            const params: QuerySourceAssetListRequest = {
                usageType: 'usageType_example',
                targetAsset: 789,
                indexId: 1,
                flexibleAllowedToUse: true,
                sourceType: 'sourceType_example',
                recvWindow: 5000,
            };

            mockResponse = {
                feeRate: '0.002',
                taxRate: '0.001',
                sourceAssets: [
                    {
                        sourceAsset: 'USDT',
                        assetMinAmount: '0.1',
                        assetMaxAmount: '1000000',
                        scale: '2',
                        flexibleAmount: '1111',
                    },
                    {
                        sourceAsset: 'BUSD',
                        assetMinAmount: '0.1',
                        assetMaxAmount: '1000000',
                        scale: '2',
                        flexibleAmount: '1111',
                    },
                ],
            };

            const spy = jest.spyOn(client, 'querySourceAssetList').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QuerySourceAssetListResponse>)
            );
            const response = await client.querySourceAssetList(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when usageType is missing', async () => {
            const _params: QuerySourceAssetListRequest = {
                usageType: 'usageType_example',
            };
            const params = Object.assign({ ..._params });
            delete params?.usageType;

            await expect(client.querySourceAssetList(params)).rejects.toThrow(
                'Required parameter usageType was null or undefined when calling querySourceAssetList.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: QuerySourceAssetListRequest = {
                usageType: 'usageType_example',
            };

            const errorResponse = {
                code: -1111,
                msg: 'Server Error',
            };

            const mockError = new Error('ResponseError') as Error & {
                response?: { status: number; data: unknown };
            };
            mockError.response = { status: 400, data: errorResponse };
            const spy = jest.spyOn(client, 'querySourceAssetList').mockRejectedValueOnce(mockError);
            await expect(client.querySourceAssetList(params)).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });
});
