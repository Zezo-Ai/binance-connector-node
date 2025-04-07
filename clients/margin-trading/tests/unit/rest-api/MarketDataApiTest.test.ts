/**
 * Binance Margin Trading REST API
 *
 * OpenAPI Specification for the Binance Margin Trading REST API
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
    GetAllCrossMarginPairsRequest,
    GetAllIsolatedMarginSymbolRequest,
    GetAllMarginAssetsRequest,
    GetDelistScheduleRequest,
    QueryIsolatedMarginTierDataRequest,
    QueryMarginAvailableInventoryRequest,
    QueryMarginPriceindexRequest,
} from '../../../src/rest-api';
import type {
    CrossMarginCollateralRatioResponse,
    GetAllCrossMarginPairsResponse,
    GetAllIsolatedMarginSymbolResponse,
    GetAllMarginAssetsResponse,
    GetDelistScheduleResponse,
    QueryIsolatedMarginTierDataResponse,
    QueryLiabilityCoinLeverageBracketInCrossMarginProModeResponse,
    QueryMarginAvailableInventoryResponse,
    QueryMarginPriceindexResponse,
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

    describe('crossMarginCollateralRatio()', () => {
        it('should execute crossMarginCollateralRatio() successfully with required parameters only', async () => {
            mockResponse = [
                {
                    collaterals: [
                        { minUsdValue: '0', maxUsdValue: '13000000', discountRate: '1' },
                        { minUsdValue: '13000000', maxUsdValue: '20000000', discountRate: '0.975' },
                        { minUsdValue: '20000000', discountRate: '0' },
                    ],
                    assetNames: ['BNX'],
                },
                {
                    collaterals: [{ minUsdValue: '0', discountRate: '1' }],
                    assetNames: ['BTC', 'BUSD', 'ETH', 'USDT'],
                },
            ];

            const spy = jest.spyOn(client, 'crossMarginCollateralRatio').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<CrossMarginCollateralRatioResponse>)
            );
            const response = await client.crossMarginCollateralRatio();
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
                .spyOn(client, 'crossMarginCollateralRatio')
                .mockRejectedValueOnce(mockError);
            await expect(client.crossMarginCollateralRatio()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('getAllCrossMarginPairs()', () => {
        it('should execute getAllCrossMarginPairs() successfully with required parameters only', async () => {
            mockResponse = [
                {
                    base: 'BNB',
                    id: 351637150141315840,
                    isBuyAllowed: true,
                    isMarginTrade: true,
                    isSellAllowed: true,
                    quote: 'BTC',
                    symbol: 'BNBBTC',
                },
                {
                    base: 'TRX',
                    id: 351637923235429100,
                    isBuyAllowed: true,
                    isMarginTrade: true,
                    isSellAllowed: true,
                    quote: 'BTC',
                    symbol: 'TRXBTC',
                    delistTime: 1704973040,
                },
                {
                    base: 'XRP',
                    id: 351638112213990140,
                    isBuyAllowed: true,
                    isMarginTrade: true,
                    isSellAllowed: true,
                    quote: 'BTC',
                    symbol: 'XRPBTC',
                },
                {
                    base: 'ETH',
                    id: 351638524530850560,
                    isBuyAllowed: true,
                    isMarginTrade: true,
                    isSellAllowed: true,
                    quote: 'BTC',
                    symbol: 'ETHBTC',
                },
            ];

            const spy = jest.spyOn(client, 'getAllCrossMarginPairs').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetAllCrossMarginPairsResponse>)
            );
            const response = await client.getAllCrossMarginPairs();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute getAllCrossMarginPairs() successfully with optional parameters', async () => {
            const params: GetAllCrossMarginPairsRequest = {
                symbol: 'symbol_example',
            };

            mockResponse = [
                {
                    base: 'BNB',
                    id: 351637150141315840,
                    isBuyAllowed: true,
                    isMarginTrade: true,
                    isSellAllowed: true,
                    quote: 'BTC',
                    symbol: 'BNBBTC',
                },
                {
                    base: 'TRX',
                    id: 351637923235429100,
                    isBuyAllowed: true,
                    isMarginTrade: true,
                    isSellAllowed: true,
                    quote: 'BTC',
                    symbol: 'TRXBTC',
                    delistTime: 1704973040,
                },
                {
                    base: 'XRP',
                    id: 351638112213990140,
                    isBuyAllowed: true,
                    isMarginTrade: true,
                    isSellAllowed: true,
                    quote: 'BTC',
                    symbol: 'XRPBTC',
                },
                {
                    base: 'ETH',
                    id: 351638524530850560,
                    isBuyAllowed: true,
                    isMarginTrade: true,
                    isSellAllowed: true,
                    quote: 'BTC',
                    symbol: 'ETHBTC',
                },
            ];

            const spy = jest.spyOn(client, 'getAllCrossMarginPairs').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetAllCrossMarginPairsResponse>)
            );
            const response = await client.getAllCrossMarginPairs(params);
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
                .spyOn(client, 'getAllCrossMarginPairs')
                .mockRejectedValueOnce(mockError);
            await expect(client.getAllCrossMarginPairs()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('getAllIsolatedMarginSymbol()', () => {
        it('should execute getAllIsolatedMarginSymbol() successfully with required parameters only', async () => {
            mockResponse = [
                {
                    base: 'BNB',
                    isBuyAllowed: true,
                    isMarginTrade: true,
                    isSellAllowed: true,
                    quote: 'BTC',
                    symbol: 'BNBBTC',
                },
                {
                    base: 'TRX',
                    isBuyAllowed: true,
                    isMarginTrade: true,
                    isSellAllowed: true,
                    quote: 'BTC',
                    symbol: 'TRXBTC',
                },
            ];

            const spy = jest.spyOn(client, 'getAllIsolatedMarginSymbol').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetAllIsolatedMarginSymbolResponse>)
            );
            const response = await client.getAllIsolatedMarginSymbol();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute getAllIsolatedMarginSymbol() successfully with optional parameters', async () => {
            const params: GetAllIsolatedMarginSymbolRequest = {
                symbol: 'symbol_example',
                recvWindow: 5000,
            };

            mockResponse = [
                {
                    base: 'BNB',
                    isBuyAllowed: true,
                    isMarginTrade: true,
                    isSellAllowed: true,
                    quote: 'BTC',
                    symbol: 'BNBBTC',
                },
                {
                    base: 'TRX',
                    isBuyAllowed: true,
                    isMarginTrade: true,
                    isSellAllowed: true,
                    quote: 'BTC',
                    symbol: 'TRXBTC',
                },
            ];

            const spy = jest.spyOn(client, 'getAllIsolatedMarginSymbol').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetAllIsolatedMarginSymbolResponse>)
            );
            const response = await client.getAllIsolatedMarginSymbol(params);
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
                .spyOn(client, 'getAllIsolatedMarginSymbol')
                .mockRejectedValueOnce(mockError);
            await expect(client.getAllIsolatedMarginSymbol()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('getAllMarginAssets()', () => {
        it('should execute getAllMarginAssets() successfully with required parameters only', async () => {
            mockResponse = [
                {
                    assetFullName: 'USD coin',
                    assetName: 'USDC',
                    isBorrowable: true,
                    isMortgageable: true,
                    userMinBorrow: '0.00000000',
                    userMinRepay: '0.00000000',
                    delistTime: 1704973040,
                },
            ];

            const spy = jest.spyOn(client, 'getAllMarginAssets').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetAllMarginAssetsResponse>)
            );
            const response = await client.getAllMarginAssets();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute getAllMarginAssets() successfully with optional parameters', async () => {
            const params: GetAllMarginAssetsRequest = {
                asset: 'asset_example',
            };

            mockResponse = [
                {
                    assetFullName: 'USD coin',
                    assetName: 'USDC',
                    isBorrowable: true,
                    isMortgageable: true,
                    userMinBorrow: '0.00000000',
                    userMinRepay: '0.00000000',
                    delistTime: 1704973040,
                },
            ];

            const spy = jest.spyOn(client, 'getAllMarginAssets').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetAllMarginAssetsResponse>)
            );
            const response = await client.getAllMarginAssets(params);
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
            const spy = jest.spyOn(client, 'getAllMarginAssets').mockRejectedValueOnce(mockError);
            await expect(client.getAllMarginAssets()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('getDelistSchedule()', () => {
        it('should execute getDelistSchedule() successfully with required parameters only', async () => {
            mockResponse = [
                {
                    delistTime: 1686161202000,
                    crossMarginAssets: ['BTC', 'USDT'],
                    isolatedMarginSymbols: ['ADAUSDT', 'BNBUSDT'],
                },
                {
                    delistTime: 1686222232000,
                    crossMarginAssets: ['ADA'],
                    isolatedMarginSymbols: [],
                },
            ];

            const spy = jest.spyOn(client, 'getDelistSchedule').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetDelistScheduleResponse>)
            );
            const response = await client.getDelistSchedule();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute getDelistSchedule() successfully with optional parameters', async () => {
            const params: GetDelistScheduleRequest = {
                recvWindow: 5000,
            };

            mockResponse = [
                {
                    delistTime: 1686161202000,
                    crossMarginAssets: ['BTC', 'USDT'],
                    isolatedMarginSymbols: ['ADAUSDT', 'BNBUSDT'],
                },
                {
                    delistTime: 1686222232000,
                    crossMarginAssets: ['ADA'],
                    isolatedMarginSymbols: [],
                },
            ];

            const spy = jest.spyOn(client, 'getDelistSchedule').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<GetDelistScheduleResponse>)
            );
            const response = await client.getDelistSchedule(params);
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
            const spy = jest.spyOn(client, 'getDelistSchedule').mockRejectedValueOnce(mockError);
            await expect(client.getDelistSchedule()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('queryIsolatedMarginTierData()', () => {
        it('should execute queryIsolatedMarginTierData() successfully with required parameters only', async () => {
            const params: QueryIsolatedMarginTierDataRequest = {
                symbol: 'symbol_example',
            };

            mockResponse = [
                {
                    symbol: 'BTCUSDT',
                    tier: 1,
                    effectiveMultiple: '10',
                    initialRiskRatio: '1.111',
                    liquidationRiskRatio: '1.05',
                    baseAssetMaxBorrowable: '9',
                    quoteAssetMaxBorrowable: '70000',
                },
            ];

            const spy = jest.spyOn(client, 'queryIsolatedMarginTierData').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryIsolatedMarginTierDataResponse>)
            );
            const response = await client.queryIsolatedMarginTierData(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute queryIsolatedMarginTierData() successfully with optional parameters', async () => {
            const params: QueryIsolatedMarginTierDataRequest = {
                symbol: 'symbol_example',
                tier: 789,
                recvWindow: 5000,
            };

            mockResponse = [
                {
                    symbol: 'BTCUSDT',
                    tier: 1,
                    effectiveMultiple: '10',
                    initialRiskRatio: '1.111',
                    liquidationRiskRatio: '1.05',
                    baseAssetMaxBorrowable: '9',
                    quoteAssetMaxBorrowable: '70000',
                },
            ];

            const spy = jest.spyOn(client, 'queryIsolatedMarginTierData').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryIsolatedMarginTierDataResponse>)
            );
            const response = await client.queryIsolatedMarginTierData(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when symbol is missing', async () => {
            const _params: QueryIsolatedMarginTierDataRequest = {
                symbol: 'symbol_example',
            };
            const params = Object.assign({ ..._params });
            delete params?.symbol;

            await expect(client.queryIsolatedMarginTierData(params)).rejects.toThrow(
                'Required parameter symbol was null or undefined when calling queryIsolatedMarginTierData.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: QueryIsolatedMarginTierDataRequest = {
                symbol: 'symbol_example',
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
                .spyOn(client, 'queryIsolatedMarginTierData')
                .mockRejectedValueOnce(mockError);
            await expect(client.queryIsolatedMarginTierData(params)).rejects.toThrow(
                'ResponseError'
            );
            spy.mockRestore();
        });
    });

    describe('queryLiabilityCoinLeverageBracketInCrossMarginProMode()', () => {
        it('should execute queryLiabilityCoinLeverageBracketInCrossMarginProMode() successfully with required parameters only', async () => {
            mockResponse = [
                {
                    assetNames: ['SHIB', 'FDUSD', 'BTC', 'ETH', 'USDC'],
                    rank: 1,
                    brackets: [
                        {
                            leverage: 10,
                            maxDebt: 1000000,
                            maintenanceMarginRate: 0.02,
                            initialMarginRate: 0.1112,
                            fastNum: 0,
                        },
                        {
                            leverage: 3,
                            maxDebt: 4000000,
                            maintenanceMarginRate: 0.07,
                            initialMarginRate: 0.5,
                            fastNum: 60000,
                        },
                    ],
                },
            ];

            const spy = jest
                .spyOn(client, 'queryLiabilityCoinLeverageBracketInCrossMarginProMode')
                .mockReturnValue(
                    Promise.resolve({
                        data: () => Promise.resolve(mockResponse),
                        status: 200,
                        headers: {},
                        rateLimits: [],
                    } as RestApiResponse<QueryLiabilityCoinLeverageBracketInCrossMarginProModeResponse>)
                );
            const response = await client.queryLiabilityCoinLeverageBracketInCrossMarginProMode();
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
                .spyOn(client, 'queryLiabilityCoinLeverageBracketInCrossMarginProMode')
                .mockRejectedValueOnce(mockError);
            await expect(
                client.queryLiabilityCoinLeverageBracketInCrossMarginProMode()
            ).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('queryMarginAvailableInventory()', () => {
        it('should execute queryMarginAvailableInventory() successfully with required parameters only', async () => {
            const params: QueryMarginAvailableInventoryRequest = {
                type: 'type_example',
            };

            mockResponse = {
                assets: {
                    MATIC: '100000000',
                    STPT: '100000000',
                    TVK: '100000000',
                    SHIB: '97409653',
                },
                updateTime: 1699272487,
            };

            const spy = jest.spyOn(client, 'queryMarginAvailableInventory').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryMarginAvailableInventoryResponse>)
            );
            const response = await client.queryMarginAvailableInventory(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute queryMarginAvailableInventory() successfully with optional parameters', async () => {
            const params: QueryMarginAvailableInventoryRequest = {
                type: 'type_example',
            };

            mockResponse = {
                assets: {
                    MATIC: '100000000',
                    STPT: '100000000',
                    TVK: '100000000',
                    SHIB: '97409653',
                },
                updateTime: 1699272487,
            };

            const spy = jest.spyOn(client, 'queryMarginAvailableInventory').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryMarginAvailableInventoryResponse>)
            );
            const response = await client.queryMarginAvailableInventory(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when type is missing', async () => {
            const _params: QueryMarginAvailableInventoryRequest = {
                type: 'type_example',
            };
            const params = Object.assign({ ..._params });
            delete params?.type;

            await expect(client.queryMarginAvailableInventory(params)).rejects.toThrow(
                'Required parameter type was null or undefined when calling queryMarginAvailableInventory.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: QueryMarginAvailableInventoryRequest = {
                type: 'type_example',
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
                .spyOn(client, 'queryMarginAvailableInventory')
                .mockRejectedValueOnce(mockError);
            await expect(client.queryMarginAvailableInventory(params)).rejects.toThrow(
                'ResponseError'
            );
            spy.mockRestore();
        });
    });

    describe('queryMarginPriceindex()', () => {
        it('should execute queryMarginPriceindex() successfully with required parameters only', async () => {
            const params: QueryMarginPriceindexRequest = {
                symbol: 'symbol_example',
            };

            mockResponse = { calcTime: 1562046418000, price: '0.00333930', symbol: 'BNBBTC' };

            const spy = jest.spyOn(client, 'queryMarginPriceindex').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryMarginPriceindexResponse>)
            );
            const response = await client.queryMarginPriceindex(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute queryMarginPriceindex() successfully with optional parameters', async () => {
            const params: QueryMarginPriceindexRequest = {
                symbol: 'symbol_example',
            };

            mockResponse = { calcTime: 1562046418000, price: '0.00333930', symbol: 'BNBBTC' };

            const spy = jest.spyOn(client, 'queryMarginPriceindex').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryMarginPriceindexResponse>)
            );
            const response = await client.queryMarginPriceindex(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when symbol is missing', async () => {
            const _params: QueryMarginPriceindexRequest = {
                symbol: 'symbol_example',
            };
            const params = Object.assign({ ..._params });
            delete params?.symbol;

            await expect(client.queryMarginPriceindex(params)).rejects.toThrow(
                'Required parameter symbol was null or undefined when calling queryMarginPriceindex.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: QueryMarginPriceindexRequest = {
                symbol: 'symbol_example',
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
                .spyOn(client, 'queryMarginPriceindex')
                .mockRejectedValueOnce(mockError);
            await expect(client.queryMarginPriceindex(params)).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });
});
