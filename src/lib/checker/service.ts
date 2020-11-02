import { Check200, CheckContains } from './constants';
import axios from 'axios';

export class CheckerService {
    private checkFabric: CheckerFabric;

    constructor() {
        this.checkFabric = new CheckerFabric();
    }

    public async checkSite(type: string, checkInfo: CheckInfo): Promise<boolean> {
        const checker = this.checkFabric.getChecker(type);
        let checkResultPromise = await checker.checkSite(checkInfo);

        return checkResultPromise.success;
    }
}

class CheckerFabric {
    public getChecker(type: string): CheckerInterface {
        switch (type) {
            case Check200:
                return new Checker200();
            case CheckContains:
                return new CheckerContains();
        }
        throw Error("no checker found");
    }
}

type CheckInfo = {
    url: string,
    info?: any
}
type CheckResult = {
    success: boolean,
    data?: any
}

interface CheckerInterface {
    checkSite(info: CheckInfo): Promise<CheckResult>;
}

class Checker200 implements CheckerInterface {
    async checkSite(info: CheckInfo): Promise<CheckResult> {
        try {
            const result = await axios.get(info.url);
            return {
                success: result.status === 200
            };
        } catch (e) {
            return {
                success: false,
                data: e
            };
        }
    }
}

class CheckerContains implements CheckerInterface {
    async checkSite(info: CheckInfo): Promise<CheckResult> {
        try {
            const result = await axios.get(info.url);
            return {
                success: result.data.indexOf(info.info) !== -1
            };
        } catch (e) {
            return {
                success: false,
                data: e
            };
        }
    }
}
