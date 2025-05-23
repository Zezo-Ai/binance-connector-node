import { SubAccount, SUB_ACCOUNT_REST_API_PROD_URL } from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? SUB_ACCOUNT_REST_API_PROD_URL,
};
const client = new SubAccount({ configurationRestAPI });

async function queryManagedSubAccountTransferLogMasterAccountInvestor() {
    try {
        const response =
            await client.restAPI.queryManagedSubAccountTransferLogMasterAccountInvestor({
                email: 'sub-account-email@email.com',
                startTime: 1623319461670,
                endTime: 1641782889000,
                page: 789,
                limit: 789,
            });

        const rateLimits = response.rateLimits!;
        console.log(
            'queryManagedSubAccountTransferLogMasterAccountInvestor() rate limits:',
            rateLimits
        );

        const data = await response.data();
        console.log('queryManagedSubAccountTransferLogMasterAccountInvestor() response:', data);
    } catch (error) {
        console.error('queryManagedSubAccountTransferLogMasterAccountInvestor() error:', error);
    }
}

queryManagedSubAccountTransferLogMasterAccountInvestor();
