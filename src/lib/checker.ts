import axios from 'axios';

type CheckParams = {
    url: string,
    data?: any
};

type CheckResult = {
    success: boolean,
    info?: any
};

export interface CheckerInterface {
    check(config: CheckParams): Promise<CheckResult>
}

export class Check200 implements CheckerInterface {
    async check(config: CheckParams): Promise<CheckResult> {
        try {
            const result = await axios.get(config.url);
            if (result.status === 200) {
                return {
                    success: true
                };
            }
        } catch (e) {
            return {
                success: false,
                info: e
            };
        }
    }
}
