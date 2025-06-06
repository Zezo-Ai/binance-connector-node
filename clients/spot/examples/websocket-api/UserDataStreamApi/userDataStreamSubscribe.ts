import { Spot, SPOT_WS_API_PROD_URL } from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? SPOT_WS_API_PROD_URL,
};
const client = new Spot({ configurationWebsocketAPI });

async function userDataStreamSubscribe() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const res = await connection.userDataStreamSubscribe();

        const response = res.response;

        const rateLimits = response.rateLimits!;
        console.log('userDataStreamSubscribe() rate limits:', rateLimits);

        const data = response.data;
        console.log('userDataStreamSubscribe() response:', data);

        const stream = res.stream;
        stream.on('message', (data) => {
            console.log('userDataStreamSubscribe() stream data:', data);
        });
    } catch (error) {
        console.error('userDataStreamSubscribe() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

userDataStreamSubscribe();
