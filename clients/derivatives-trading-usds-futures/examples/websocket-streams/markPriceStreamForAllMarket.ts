import {
    DerivativesTradingUsdsFutures,
    DERIVATIVES_TRADING_USDS_FUTURES_WS_STREAMS_PROD_URL,
} from '../../src';

const configurationWebsocketStreams = {
    wsURL: process.env.WS_STREAMS_URL ?? DERIVATIVES_TRADING_USDS_FUTURES_WS_STREAMS_PROD_URL,
};
const client = new DerivativesTradingUsdsFutures({ configurationWebsocketStreams });

async function markPriceStreamForAllMarket() {
    let connection;

    try {
        connection = await client.websocketStreams.connect();

        const stream = connection.markPriceStreamForAllMarket();

        stream.on('message', (data) => {
            console.info(data);
        });
    } catch (error) {
        console.error(error);
    } finally {
        // disconnect after 20 seconds
        setTimeout(async () => await connection!.disconnect(), 20000);
    }
}

markPriceStreamForAllMarket();
