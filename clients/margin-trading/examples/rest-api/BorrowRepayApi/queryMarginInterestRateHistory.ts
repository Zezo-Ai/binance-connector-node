import { MarginTrading, MARGIN_TRADING_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? MARGIN_TRADING_REST_API_PROD_URL,
};
const client = new MarginTrading({ configurationRestAPI });

async function queryMarginInterestRateHistory() {
    try {
        const response = await client.restAPI.queryMarginInterestRateHistory({
            asset: 'asset_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('queryMarginInterestRateHistory() rate limits:', rateLimits);

        const data = await response.data();
        console.log('queryMarginInterestRateHistory() response:', data);
    } catch (error) {
        console.error('queryMarginInterestRateHistory() error:', error);
    }
}

queryMarginInterestRateHistory();
