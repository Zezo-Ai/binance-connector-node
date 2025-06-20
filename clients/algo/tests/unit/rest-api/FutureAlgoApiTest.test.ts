/**
 * Binance Algo REST API
 *
 * OpenAPI Specification for the Binance Algo REST API
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

import { FutureAlgoApi } from '../../../src/rest-api';
import {
    CancelAlgoOrderFutureAlgoRequest,
    QueryCurrentAlgoOpenOrdersFutureAlgoRequest,
    QueryHistoricalAlgoOrdersFutureAlgoRequest,
    QuerySubOrdersFutureAlgoRequest,
    TimeWeightedAveragePriceFutureAlgoRequest,
    VolumeParticipationFutureAlgoRequest,
} from '../../../src/rest-api';
import type {
    CancelAlgoOrderFutureAlgoResponse,
    QueryCurrentAlgoOpenOrdersFutureAlgoResponse,
    QueryHistoricalAlgoOrdersFutureAlgoResponse,
    QuerySubOrdersFutureAlgoResponse,
    TimeWeightedAveragePriceFutureAlgoResponse,
    VolumeParticipationFutureAlgoResponse,
} from '../../../src/rest-api/types';

describe('FutureAlgoApi', () => {
    let client: FutureAlgoApi;
    let config: ConfigurationRestAPI;
    let mockResponse: object = {};

    beforeEach(() => {
        config = new ConfigurationRestAPI({
            apiKey: 'test-api-key',
            apiSecret: 'test-api-secret',
            basePath: '',
        });
        client = new FutureAlgoApi(config);
    });

    describe('cancelAlgoOrderFutureAlgo()', () => {
        it('should execute cancelAlgoOrderFutureAlgo() successfully with required parameters only', async () => {
            const params: CancelAlgoOrderFutureAlgoRequest = {
                algoId: 1,
            };

            mockResponse = { algoId: 14511, success: true, code: 0, msg: 'OK' };

            const spy = jest.spyOn(client, 'cancelAlgoOrderFutureAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<CancelAlgoOrderFutureAlgoResponse>)
            );
            const response = await client.cancelAlgoOrderFutureAlgo(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute cancelAlgoOrderFutureAlgo() successfully with optional parameters', async () => {
            const params: CancelAlgoOrderFutureAlgoRequest = {
                algoId: 1,
                recvWindow: 5000,
            };

            mockResponse = { algoId: 14511, success: true, code: 0, msg: 'OK' };

            const spy = jest.spyOn(client, 'cancelAlgoOrderFutureAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<CancelAlgoOrderFutureAlgoResponse>)
            );
            const response = await client.cancelAlgoOrderFutureAlgo(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when algoId is missing', async () => {
            const _params: CancelAlgoOrderFutureAlgoRequest = {
                algoId: 1,
            };
            const params = Object.assign({ ..._params });
            delete params?.algoId;

            await expect(client.cancelAlgoOrderFutureAlgo(params)).rejects.toThrow(
                'Required parameter algoId was null or undefined when calling cancelAlgoOrderFutureAlgo.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: CancelAlgoOrderFutureAlgoRequest = {
                algoId: 1,
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
                .spyOn(client, 'cancelAlgoOrderFutureAlgo')
                .mockRejectedValueOnce(mockError);
            await expect(client.cancelAlgoOrderFutureAlgo(params)).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('queryCurrentAlgoOpenOrdersFutureAlgo()', () => {
        it('should execute queryCurrentAlgoOpenOrdersFutureAlgo() successfully with required parameters only', async () => {
            mockResponse = {
                total: 1,
                orders: [
                    {
                        algoId: 14517,
                        symbol: 'ETHUSDT',
                        side: 'SELL',
                        positionSide: 'SHORT',
                        totalQty: '5.000',
                        executedQty: '0.000',
                        executedAmt: '0.00000000',
                        avgPrice: '0.00',
                        clientAlgoId: 'd7096549481642f8a0bb69e9e2e31f2e',
                        bookTime: 1649756817004,
                        endTime: 0,
                        algoStatus: 'WORKING',
                        algoType: 'VP',
                        urgency: 'LOW',
                    },
                ],
            };

            const spy = jest.spyOn(client, 'queryCurrentAlgoOpenOrdersFutureAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryCurrentAlgoOpenOrdersFutureAlgoResponse>)
            );
            const response = await client.queryCurrentAlgoOpenOrdersFutureAlgo();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute queryCurrentAlgoOpenOrdersFutureAlgo() successfully with optional parameters', async () => {
            const params: QueryCurrentAlgoOpenOrdersFutureAlgoRequest = {
                recvWindow: 5000,
            };

            mockResponse = {
                total: 1,
                orders: [
                    {
                        algoId: 14517,
                        symbol: 'ETHUSDT',
                        side: 'SELL',
                        positionSide: 'SHORT',
                        totalQty: '5.000',
                        executedQty: '0.000',
                        executedAmt: '0.00000000',
                        avgPrice: '0.00',
                        clientAlgoId: 'd7096549481642f8a0bb69e9e2e31f2e',
                        bookTime: 1649756817004,
                        endTime: 0,
                        algoStatus: 'WORKING',
                        algoType: 'VP',
                        urgency: 'LOW',
                    },
                ],
            };

            const spy = jest.spyOn(client, 'queryCurrentAlgoOpenOrdersFutureAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryCurrentAlgoOpenOrdersFutureAlgoResponse>)
            );
            const response = await client.queryCurrentAlgoOpenOrdersFutureAlgo(params);
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
                .spyOn(client, 'queryCurrentAlgoOpenOrdersFutureAlgo')
                .mockRejectedValueOnce(mockError);
            await expect(client.queryCurrentAlgoOpenOrdersFutureAlgo()).rejects.toThrow(
                'ResponseError'
            );
            spy.mockRestore();
        });
    });

    describe('queryHistoricalAlgoOrdersFutureAlgo()', () => {
        it('should execute queryHistoricalAlgoOrdersFutureAlgo() successfully with required parameters only', async () => {
            mockResponse = {
                total: 1,
                orders: [
                    {
                        algoId: 14518,
                        symbol: 'BNBUSDT',
                        side: 'BUY',
                        positionSide: 'BOTH',
                        totalQty: '100.00',
                        executedQty: '0.00',
                        executedAmt: '0.00000000',
                        avgPrice: '0.000',
                        clientAlgoId: 'acacab56b3c44bef9f6a8f8ebd2a8408',
                        bookTime: 1649757019503,
                        endTime: 1649757088101,
                        algoStatus: 'CANCELLED',
                        algoType: 'VP',
                        urgency: 'LOW',
                    },
                ],
            };

            const spy = jest.spyOn(client, 'queryHistoricalAlgoOrdersFutureAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryHistoricalAlgoOrdersFutureAlgoResponse>)
            );
            const response = await client.queryHistoricalAlgoOrdersFutureAlgo();
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute queryHistoricalAlgoOrdersFutureAlgo() successfully with optional parameters', async () => {
            const params: QueryHistoricalAlgoOrdersFutureAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                startTime: 1623319461670,
                endTime: 1641782889000,
                page: 1,
                pageSize: 100,
                recvWindow: 5000,
            };

            mockResponse = {
                total: 1,
                orders: [
                    {
                        algoId: 14518,
                        symbol: 'BNBUSDT',
                        side: 'BUY',
                        positionSide: 'BOTH',
                        totalQty: '100.00',
                        executedQty: '0.00',
                        executedAmt: '0.00000000',
                        avgPrice: '0.000',
                        clientAlgoId: 'acacab56b3c44bef9f6a8f8ebd2a8408',
                        bookTime: 1649757019503,
                        endTime: 1649757088101,
                        algoStatus: 'CANCELLED',
                        algoType: 'VP',
                        urgency: 'LOW',
                    },
                ],
            };

            const spy = jest.spyOn(client, 'queryHistoricalAlgoOrdersFutureAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QueryHistoricalAlgoOrdersFutureAlgoResponse>)
            );
            const response = await client.queryHistoricalAlgoOrdersFutureAlgo(params);
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
                .spyOn(client, 'queryHistoricalAlgoOrdersFutureAlgo')
                .mockRejectedValueOnce(mockError);
            await expect(client.queryHistoricalAlgoOrdersFutureAlgo()).rejects.toThrow(
                'ResponseError'
            );
            spy.mockRestore();
        });
    });

    describe('querySubOrdersFutureAlgo()', () => {
        it('should execute querySubOrdersFutureAlgo() successfully with required parameters only', async () => {
            const params: QuerySubOrdersFutureAlgoRequest = {
                algoId: 1,
            };

            mockResponse = {
                total: 1,
                executedQty: '1.000',
                executedAmt: '3229.44000000',
                subOrders: [
                    {
                        algoId: 13723,
                        orderId: 8389765519993909000,
                        orderStatus: 'FILLED',
                        executedQty: '1.000',
                        executedAmt: '3229.44000000',
                        feeAmt: '-1.61471999',
                        feeAsset: 'USDT',
                        bookTime: 1649319001964,
                        avgPrice: '3229.44',
                        side: 'SELL',
                        symbol: 'ETHUSDT',
                        subId: 1,
                        timeInForce: 'IMMEDIATE_OR_CANCEL',
                        origQty: '1.000',
                    },
                ],
            };

            const spy = jest.spyOn(client, 'querySubOrdersFutureAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QuerySubOrdersFutureAlgoResponse>)
            );
            const response = await client.querySubOrdersFutureAlgo(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute querySubOrdersFutureAlgo() successfully with optional parameters', async () => {
            const params: QuerySubOrdersFutureAlgoRequest = {
                algoId: 1,
                page: 1,
                pageSize: 100,
                recvWindow: 5000,
            };

            mockResponse = {
                total: 1,
                executedQty: '1.000',
                executedAmt: '3229.44000000',
                subOrders: [
                    {
                        algoId: 13723,
                        orderId: 8389765519993909000,
                        orderStatus: 'FILLED',
                        executedQty: '1.000',
                        executedAmt: '3229.44000000',
                        feeAmt: '-1.61471999',
                        feeAsset: 'USDT',
                        bookTime: 1649319001964,
                        avgPrice: '3229.44',
                        side: 'SELL',
                        symbol: 'ETHUSDT',
                        subId: 1,
                        timeInForce: 'IMMEDIATE_OR_CANCEL',
                        origQty: '1.000',
                    },
                ],
            };

            const spy = jest.spyOn(client, 'querySubOrdersFutureAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<QuerySubOrdersFutureAlgoResponse>)
            );
            const response = await client.querySubOrdersFutureAlgo(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when algoId is missing', async () => {
            const _params: QuerySubOrdersFutureAlgoRequest = {
                algoId: 1,
            };
            const params = Object.assign({ ..._params });
            delete params?.algoId;

            await expect(client.querySubOrdersFutureAlgo(params)).rejects.toThrow(
                'Required parameter algoId was null or undefined when calling querySubOrdersFutureAlgo.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: QuerySubOrdersFutureAlgoRequest = {
                algoId: 1,
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
                .spyOn(client, 'querySubOrdersFutureAlgo')
                .mockRejectedValueOnce(mockError);
            await expect(client.querySubOrdersFutureAlgo(params)).rejects.toThrow('ResponseError');
            spy.mockRestore();
        });
    });

    describe('timeWeightedAveragePriceFutureAlgo()', () => {
        it('should execute timeWeightedAveragePriceFutureAlgo() successfully with required parameters only', async () => {
            const params: TimeWeightedAveragePriceFutureAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.0,
                duration: 5000,
            };

            mockResponse = {
                clientAlgoId: '65ce1630101a480b85915d7e11fd5078',
                success: true,
                code: 0,
                msg: 'OK',
            };

            const spy = jest.spyOn(client, 'timeWeightedAveragePriceFutureAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<TimeWeightedAveragePriceFutureAlgoResponse>)
            );
            const response = await client.timeWeightedAveragePriceFutureAlgo(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute timeWeightedAveragePriceFutureAlgo() successfully with optional parameters', async () => {
            const params: TimeWeightedAveragePriceFutureAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.0,
                duration: 5000,
                positionSide: 'BOTH',
                clientAlgoId: '1',
                reduceOnly: false,
                limitPrice: 1.0,
                recvWindow: 5000,
            };

            mockResponse = {
                clientAlgoId: '65ce1630101a480b85915d7e11fd5078',
                success: true,
                code: 0,
                msg: 'OK',
            };

            const spy = jest.spyOn(client, 'timeWeightedAveragePriceFutureAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<TimeWeightedAveragePriceFutureAlgoResponse>)
            );
            const response = await client.timeWeightedAveragePriceFutureAlgo(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when symbol is missing', async () => {
            const _params: TimeWeightedAveragePriceFutureAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.0,
                duration: 5000,
            };
            const params = Object.assign({ ..._params });
            delete params?.symbol;

            await expect(client.timeWeightedAveragePriceFutureAlgo(params)).rejects.toThrow(
                'Required parameter symbol was null or undefined when calling timeWeightedAveragePriceFutureAlgo.'
            );
        });

        it('should throw RequiredError when side is missing', async () => {
            const _params: TimeWeightedAveragePriceFutureAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.0,
                duration: 5000,
            };
            const params = Object.assign({ ..._params });
            delete params?.side;

            await expect(client.timeWeightedAveragePriceFutureAlgo(params)).rejects.toThrow(
                'Required parameter side was null or undefined when calling timeWeightedAveragePriceFutureAlgo.'
            );
        });

        it('should throw RequiredError when quantity is missing', async () => {
            const _params: TimeWeightedAveragePriceFutureAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.0,
                duration: 5000,
            };
            const params = Object.assign({ ..._params });
            delete params?.quantity;

            await expect(client.timeWeightedAveragePriceFutureAlgo(params)).rejects.toThrow(
                'Required parameter quantity was null or undefined when calling timeWeightedAveragePriceFutureAlgo.'
            );
        });

        it('should throw RequiredError when duration is missing', async () => {
            const _params: TimeWeightedAveragePriceFutureAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.0,
                duration: 5000,
            };
            const params = Object.assign({ ..._params });
            delete params?.duration;

            await expect(client.timeWeightedAveragePriceFutureAlgo(params)).rejects.toThrow(
                'Required parameter duration was null or undefined when calling timeWeightedAveragePriceFutureAlgo.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: TimeWeightedAveragePriceFutureAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.0,
                duration: 5000,
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
                .spyOn(client, 'timeWeightedAveragePriceFutureAlgo')
                .mockRejectedValueOnce(mockError);
            await expect(client.timeWeightedAveragePriceFutureAlgo(params)).rejects.toThrow(
                'ResponseError'
            );
            spy.mockRestore();
        });
    });

    describe('volumeParticipationFutureAlgo()', () => {
        it('should execute volumeParticipationFutureAlgo() successfully with required parameters only', async () => {
            const params: VolumeParticipationFutureAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.0,
                urgency: 'LOW',
            };

            mockResponse = {
                clientAlgoId: '00358ce6a268403398bd34eaa36dffe7',
                success: true,
                code: 0,
                msg: 'OK',
            };

            const spy = jest.spyOn(client, 'volumeParticipationFutureAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<VolumeParticipationFutureAlgoResponse>)
            );
            const response = await client.volumeParticipationFutureAlgo(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should execute volumeParticipationFutureAlgo() successfully with optional parameters', async () => {
            const params: VolumeParticipationFutureAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.0,
                urgency: 'LOW',
                positionSide: 'BOTH',
                clientAlgoId: '1',
                reduceOnly: false,
                limitPrice: 1.0,
                recvWindow: 5000,
            };

            mockResponse = {
                clientAlgoId: '00358ce6a268403398bd34eaa36dffe7',
                success: true,
                code: 0,
                msg: 'OK',
            };

            const spy = jest.spyOn(client, 'volumeParticipationFutureAlgo').mockReturnValue(
                Promise.resolve({
                    data: () => Promise.resolve(mockResponse),
                    status: 200,
                    headers: {},
                    rateLimits: [],
                } as RestApiResponse<VolumeParticipationFutureAlgoResponse>)
            );
            const response = await client.volumeParticipationFutureAlgo(params);
            expect(response).toBeDefined();
            await expect(response.data()).resolves.toBe(mockResponse);
            spy.mockRestore();
        });

        it('should throw RequiredError when symbol is missing', async () => {
            const _params: VolumeParticipationFutureAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.0,
                urgency: 'LOW',
            };
            const params = Object.assign({ ..._params });
            delete params?.symbol;

            await expect(client.volumeParticipationFutureAlgo(params)).rejects.toThrow(
                'Required parameter symbol was null or undefined when calling volumeParticipationFutureAlgo.'
            );
        });

        it('should throw RequiredError when side is missing', async () => {
            const _params: VolumeParticipationFutureAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.0,
                urgency: 'LOW',
            };
            const params = Object.assign({ ..._params });
            delete params?.side;

            await expect(client.volumeParticipationFutureAlgo(params)).rejects.toThrow(
                'Required parameter side was null or undefined when calling volumeParticipationFutureAlgo.'
            );
        });

        it('should throw RequiredError when quantity is missing', async () => {
            const _params: VolumeParticipationFutureAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.0,
                urgency: 'LOW',
            };
            const params = Object.assign({ ..._params });
            delete params?.quantity;

            await expect(client.volumeParticipationFutureAlgo(params)).rejects.toThrow(
                'Required parameter quantity was null or undefined when calling volumeParticipationFutureAlgo.'
            );
        });

        it('should throw RequiredError when urgency is missing', async () => {
            const _params: VolumeParticipationFutureAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.0,
                urgency: 'LOW',
            };
            const params = Object.assign({ ..._params });
            delete params?.urgency;

            await expect(client.volumeParticipationFutureAlgo(params)).rejects.toThrow(
                'Required parameter urgency was null or undefined when calling volumeParticipationFutureAlgo.'
            );
        });

        it('should throw an error when server is returning an error', async () => {
            const params: VolumeParticipationFutureAlgoRequest = {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: 1.0,
                urgency: 'LOW',
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
                .spyOn(client, 'volumeParticipationFutureAlgo')
                .mockRejectedValueOnce(mockError);
            await expect(client.volumeParticipationFutureAlgo(params)).rejects.toThrow(
                'ResponseError'
            );
            spy.mockRestore();
        });
    });
});
