import {
    DerivativesTradingCoinFutures,
    DERIVATIVES_TRADING_COIN_FUTURES_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_COIN_FUTURES_REST_API_PROD_URL,
};
const client = new DerivativesTradingCoinFutures({ configurationRestAPI });

async function accountInformation() {
    try {
        const response = await client.restAPI.accountInformation();

        const rateLimits = response.rateLimits!;
        console.log('accountInformation() rate limits:', rateLimits);

        const data = await response.data();
        console.log('accountInformation() response:', data);
    } catch (error) {
        console.error('accountInformation() error:', error);
    }
}

accountInformation();
