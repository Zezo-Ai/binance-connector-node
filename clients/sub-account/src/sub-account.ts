import {
    buildUserAgent,
    ConfigurationRestAPI,
    SUB_ACCOUNT_REST_API_PROD_URL,
} from '@binance/common';
import { name, version } from '../package.json';
import { RestAPI } from './rest-api';

export interface ConfigurationSubAccount {
    configurationRestAPI?: ConfigurationRestAPI;
}

export class SubAccount {
    public restAPI!: RestAPI;

    constructor(config: ConfigurationSubAccount) {
        const userAgent = buildUserAgent(name, version);

        if (config?.configurationRestAPI) {
            const configRestAPI = new ConfigurationRestAPI(
                config.configurationRestAPI
            ) as ConfigurationRestAPI & {
                baseOptions: Record<string, unknown>;
            };
            configRestAPI.basePath = configRestAPI.basePath || SUB_ACCOUNT_REST_API_PROD_URL;
            configRestAPI.baseOptions = configRestAPI.baseOptions || {};
            configRestAPI.baseOptions.headers = {
                ...(configRestAPI.baseOptions.headers || {}),
                'User-Agent': userAgent,
            };
            this.restAPI = new RestAPI(configRestAPI);
        }
    }
}
