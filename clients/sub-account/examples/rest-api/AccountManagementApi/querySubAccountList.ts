import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function querySubAccountList() {
    try {
        const response = await client.restAPI.querySubAccountList();

        const rateLimits = response.rateLimits!;
        console.log('querySubAccountList() rate limits:', rateLimits);

        const data = await response.data();
        console.log('querySubAccountList() response:', data);
    } catch (error) {
        console.error('querySubAccountList() error:', error);
    }
}

querySubAccountList();
