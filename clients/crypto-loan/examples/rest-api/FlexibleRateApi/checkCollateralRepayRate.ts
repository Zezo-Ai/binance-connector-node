import { CryptoLoan, CRYPTO_LOAN_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? CRYPTO_LOAN_REST_API_PROD_URL,
};
const client = new CryptoLoan({ configurationRestAPI });

async function checkCollateralRepayRate() {
    try {
        const response = await client.restAPI.checkCollateralRepayRate({
            loanCoin: 'loanCoin_example',
            collateralCoin: 'collateralCoin_example',
        });

        const rateLimits = response.rateLimits!;
        console.log('checkCollateralRepayRate() rate limits:', rateLimits);

        const data = await response.data();
        console.log('checkCollateralRepayRate() response:', data);
    } catch (error) {
        console.error('checkCollateralRepayRate() error:', error);
    }
}

checkCollateralRepayRate();
