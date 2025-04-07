/**
 * Binance Spot REST API
 *
 * OpenAPI Specifications for the Binance Spot REST API
 *
 * API documents:
 * - [Github rest-api documentation file](https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md)
 * - [General API information for rest-api on website](https://developers.binance.com/docs/binance-spot-api-docs/rest-api/general-api-information)
 *
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

import { GeneralApi, ExchangeInfoSymbolStatusEnum } from '../../../src/rest-api';
import { ExchangeInfoRequest } from '../../../src/rest-api';
import type { ExchangeInfoResponse, TimeResponse } from '../../../src/rest-api/types';

describe('GeneralApi', () => {
    let client: GeneralApi;
    let config: ConfigurationRestAPI;
    let mockResponse: object = {};

    beforeEach(() => {
        config = new ConfigurationRestAPI({
            apiKey: 'test-api-key',
            apiSecret: 'test-api-secret',
            basePath: '',
        });
        client = new GeneralApi(config);
    });

    describe('exchangeInfo()', () => {
        it('should execute exchangeInfo() successfully with required parameters only', async () => {
            const params: ExchangeInfoRequest = {
                symbol: 'BNBUSDT',
            };

            mockResponse = {
                timezone: 'UTC',
                serverTime: 1565246363776,
                rateLimits: [
                    {
                        rateLimitType: 'REQUEST_WEIGHT',
                        interval: 'MINUTE',
                        intervalNum: 1,
                        limit: 6000,
                    },
                    { rateLimitType: 'ORDERS', interval: 'DAY', intervalNum: 1, limit: 160000 },
                    {
                        rateLimitType: 'RAW_REQUESTS',
                        interval: 'MINUTE',
                        intervalNum: 5,
                        limit: 61000,
                    },
                ],
                exchangeFilters: [],
                symbols: [
                    {
                        symbol: 'ETHBTC',
                        status: 'TRADING',
                        baseAsset: 'ETH',
                        baseAssetPrecision: 8,
                        quoteAsset: 'BTC',
                        quotePrecision: 8,
                        quoteAssetPrecision: 8,
                        baseCommissionPrecision: 8,
                        quoteCommissionPrecision: 8,
                        orderTypes: [
                            'LIMIT LIMIT_MAKER MARKET STOP_LOSS STOP_LOSS_LIMIT TAKE_PROFIT TAKE_PROFIT_LIMIT',
                        ],
                        icebergAllowed: true,
                        ocoAllowed: true,
                        otoAllowed: true,
                        quoteOrderQtyMarketAllowed: true,
                        allowTrailingStop: false,
                        cancelReplaceAllowed: false,
                        isSpotTradingAllowed: true,
                        isMarginTradingAllowed: true,
                        filters: [
                            {
                                filterType: 'PRICE_FILTER',
                                minPrice: '0.01000000',
                                maxPrice: '1000000.00000000',
                                tickSize: '0.01000000',
                            },
                            {
                                filterType: 'LOT_SIZE',
                                minQty: '0.00001000',
                                maxQty: '9000.00000000',
                                stepSize: '0.00001000',
                            },
                        ],
                        permissions: [],
                        permissionSets: [['SPOT', 'MARGIN']],
                        defaultSelfTradePreventionMode: 'NONE',
                        allowedSelfTradePreventionModes: ['NONE'],
                    },
                ],
            };

            const spy = jest.spyOn(client, 'exchangeInfo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<ExchangeInfoResponse>)
            );
            const response = await client.exchangeInfo(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute exchangeInfo() successfully with optional parameters', async () => {
            const params: ExchangeInfoRequest = {
                symbol: 'BNBUSDT',
                symbols: ['null'],
                permissions: ['null'],
                showPermissionSets: true,
                symbolStatus: ExchangeInfoSymbolStatusEnum.PRE_TRADING,
            };

            mockResponse = {
                timezone: 'UTC',
                serverTime: 1565246363776,
                rateLimits: [
                    {
                        rateLimitType: 'REQUEST_WEIGHT',
                        interval: 'MINUTE',
                        intervalNum: 1,
                        limit: 6000,
                    },
                    { rateLimitType: 'ORDERS', interval: 'DAY', intervalNum: 1, limit: 160000 },
                    {
                        rateLimitType: 'RAW_REQUESTS',
                        interval: 'MINUTE',
                        intervalNum: 5,
                        limit: 61000,
                    },
                ],
                exchangeFilters: [],
                symbols: [
                    {
                        symbol: 'ETHBTC',
                        status: 'TRADING',
                        baseAsset: 'ETH',
                        baseAssetPrecision: 8,
                        quoteAsset: 'BTC',
                        quotePrecision: 8,
                        quoteAssetPrecision: 8,
                        baseCommissionPrecision: 8,
                        quoteCommissionPrecision: 8,
                        orderTypes: [
                            'LIMIT LIMIT_MAKER MARKET STOP_LOSS STOP_LOSS_LIMIT TAKE_PROFIT TAKE_PROFIT_LIMIT',
                        ],
                        icebergAllowed: true,
                        ocoAllowed: true,
                        otoAllowed: true,
                        quoteOrderQtyMarketAllowed: true,
                        allowTrailingStop: false,
                        cancelReplaceAllowed: false,
                        isSpotTradingAllowed: true,
                        isMarginTradingAllowed: true,
                        filters: [
                            {
                                filterType: 'PRICE_FILTER',
                                minPrice: '0.01000000',
                                maxPrice: '1000000.00000000',
                                tickSize: '0.01000000',
                            },
                            {
                                filterType: 'LOT_SIZE',
                                minQty: '0.00001000',
                                maxQty: '9000.00000000',
                                stepSize: '0.00001000',
                            },
                        ],
                        permissions: [],
                        permissionSets: [['SPOT', 'MARGIN']],
                        defaultSelfTradePreventionMode: 'NONE',
                        allowedSelfTradePreventionModes: ['NONE'],
                    },
                ],
            };

            const spy = jest.spyOn(client, 'exchangeInfo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<ExchangeInfoResponse>)
            );
            const response = await client.exchangeInfo(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when symbol is missing', async () => {
            const _params: ExchangeInfoRequest = {
                symbol: 'BNBUSDT',
            };
            const params = Object.assign({ ..._params });
            delete params?.symbol;

            await expect(client.exchangeInfo(params)).rejects.toThrow(
                'Required parameter symbol was null or undefined when calling exchangeInfo.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: ExchangeInfoRequest = {
                symbol: 'BNBUSDT',
            };

            const errorResponse = {
                code: -1111,
                msg: 'Server Error',
            };

            const mockError = new Error('ResponseError') as Error & {
                response?: { status: number; data: unknown };
            };
            mockError.response = { status: 400, data: errorResponse };
            const spy = jest.spyOn(client, 'exchangeInfo').mockRejectedValueOnce(mockError);
            await expect(client.exchangeInfo(params)).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('ping()', () => {
        it('should execute ping() successfully with required parameters only', async () => {
            const spy = jest.spyOn(client, 'ping').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<void>)
            );
            const response = await client.ping();

            await expect(response.data()).resolves.toBeUndefined();
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
            const spy = jest.spyOn(client, 'ping').mockRejectedValueOnce(mockError);
            await expect(client.ping()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('time()', () => {
        it('should execute time() successfully with required parameters only', async () => {
            mockResponse = { serverTime: 1499827319559 };

            const spy = jest.spyOn(client, 'time').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<TimeResponse>)
            );
            const response = await client.time();
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
            const spy = jest.spyOn(client, 'time').mockRejectedValueOnce(mockError);
            await expect(client.time()).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });
});
