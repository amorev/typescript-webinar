import axios from 'axios';
import { CheckerInterface, CheckParams, CheckResult } from '../checker';

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

export class CheckHtml implements CheckerInterface {
    async check(config: CheckParams): Promise<CheckResult> {
        try {
            const result = await axios.get(config.url);
            if (result.data.indexOf(config.data) !== -1) {
                return {
                    success: true
                };
            }
            throw new Error("not needed html");
        } catch (e) {
            return {
                success: false,
                info: e
            };
        }
    }
}

export class CheckSize implements CheckerInterface {
    async check(config: CheckParams): Promise<CheckResult> {
        try {
            const result = await axios.get(config.url);
            return {
                success: true
            };
        } catch (e) {
            return {
                success: false,
                info: e
            };
        }
    }
}
