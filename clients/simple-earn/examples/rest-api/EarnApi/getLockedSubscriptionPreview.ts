import { SimpleEarn, SIMPLE_EARN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SIMPLE_EARN_REST_API_PROD_URL,
};
const client = new SimpleEarn({ configurationRestAPI });

async function getLockedSubscriptionPreview() {
    try {
        const response = await client.restAPI.getLockedSubscriptionPreview({
            projectId: '1',
            amount: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('getLockedSubscriptionPreview() rate limits:', rateLimits);

        const data = await response.data();
        console.log('getLockedSubscriptionPreview() response:', data);
    } catch (error) {
        console.error('getLockedSubscriptionPreview() error:', error);
    }
}

getLockedSubscriptionPreview();
