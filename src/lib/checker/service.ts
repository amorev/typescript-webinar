import { Check200 } from './constants';
import axios from 'axios';

export class CheckerService {
    private checkFabric: CheckerFabric;

    constructor() {
        this.checkFabric = new CheckerFabric();
    }

    public async checkSite(type: string, url: string): Promise<boolean> {
        const checker = this.checkFabric.getChecker(type);
        let checkResultPromise = await checker.checkSite({url});

        return checkResultPromise.success;
    }
}

class CheckerFabric {
    public getChecker(type: string): CheckerInterface {
        switch (type) {
            case Check200:
                return new Checker200();
        }
        throw Error("no checker found");
    }
}

type CheckInfo = {
    url: string
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
