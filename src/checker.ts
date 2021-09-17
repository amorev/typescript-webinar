import axios from 'axios';

type CheckInfo = {
    url: string,
    checkData?: any
}

type CheckResult = {
    success: boolean,
    info?: any
}

export interface Checker {
    checkSite(checkInfo: CheckInfo): Promise<CheckResult>;
}

export class CheckersFabric {
    public static getChecker(type: '200' | 'html'): Checker {
        let checker = new Check200()
        if (type === 'html') {
            checker = new CheckHtml();
        }
        return checker;
    }
}

class Check200 implements Checker {
    async checkSite(checkInfo: CheckInfo): Promise<CheckResult> {
        const result: CheckResult = {
            success: false
        };
        try {
            const data = await axios.get(checkInfo.url);
            result.success = data.status === 200;
        } catch (e) {
            result.success = false;
        }

        return result;
    }
}

class CheckHtml implements Checker {
    async checkSite(checkInfo: CheckInfo): Promise<CheckResult> {
        const result: CheckResult = {
            success: false
        };
        try {
            const data = await axios.get(checkInfo.url);
            result.success = data.data.indexOf(checkInfo.checkData) !== -1;
        } catch (e) {
            result.success = false;
        }

        return result;
    }
}
