import axios, { AxiosResponse } from 'axios';

export type CheckSettings = {
    url: string,
    data?: any,
    neededDegree?: number
}

interface CheckerInterface {
    check(settings: CheckSettings): Promise<boolean>;
}

class CheckReqCache {
    protected static cache: AxiosResponse;

    public static async getReq(url: string): Promise<AxiosResponse> {
        if (!this.cache) {
            this.cache = await axios.get(url, {
                maxRedirects: 0
            });
        }
        return this.cache;
    }
}

class CheckWeatherNearSiteIp implements CheckerInterface {
    constructor(private weatherApiAddress: string) {

    }

    async check(settings: CheckSettings): Promise<boolean> {
        console.log(this.weatherApiAddress);
        // get ip of domain
        // get weather of ip
        // send result
        return true;
    }
}

class Check200 implements CheckerInterface {
    async check(settings: CheckSettings): Promise<boolean> {
        const {url} = settings;
        try {
            const response = await CheckReqCache.getReq(url);
            if (response.status === 200) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    }
}

class CheckHtml implements CheckerInterface {
    async check(settings: CheckSettings): Promise<boolean> {
        const {url, data} = settings;
        try {
            const response = await CheckReqCache.getReq(url);
            return response.data.indexOf(data) !== -1;
        } catch (e) {
            return false;
        }
    }
}

class CheckersFabric {
    getInstance(type: string): CheckerInterface {
        let result: CheckerInterface;
        switch (type) {
            case 'html':
                result = new CheckHtml();
                break;
            case 'weather':
                result = new CheckWeatherNearSiteIp('123123123');
                break;
            case '200':
            default:
                result = new Check200();
                break;
        }

        return result;
    }
}

export async function check(settings: CheckSettings, type: "200" | "html" | "weather"): Promise<boolean> {
    try {
        return (new CheckersFabric()).getInstance(type).check(settings);
    } catch (e) {
        return false;
    }
}
