import { Spot, SpotWebsocketAPI, SPOT_WS_API_PROD_URL } from '../../../src';

const configurationWebsocketAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    wsURL: process.env.WS_API_URL ?? SPOT_WS_API_PROD_URL,
};
const client = new Spot({ configurationWebsocketAPI });

async function sorOrderTest() {
    let connection;

    try {
        connection = await client.websocketAPI.connect();

        const response = await connection.sorOrderTest({
            symbol: 'BNBUSDT',
            side: SpotWebsocketAPI.SorOrderTestSideEnum.BUY,
            type: SpotWebsocketAPI.SorOrderTestTypeEnum.MARKET,
            quantity: 1.0,
        });

        const rateLimits = response.rateLimits!;
        console.log('sorOrderTest() rate limits:', rateLimits);

        const data = response.data;
        console.log('sorOrderTest() response:', data);
    } catch (error) {
        console.error('sorOrderTest() error:', error);
    } finally {
        await connection!.disconnect();
    }
}

sorOrderTest();
