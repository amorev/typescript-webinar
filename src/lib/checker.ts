import { Check200, CheckHtml, CheckSize } from './checker/logic';

export type CheckParams = {
    url: string,
    data?: any
};

export type CheckResult = {
    success: boolean,
    info?: any
};

export interface CheckerInterface {
    check(config: CheckParams): Promise<CheckResult>
}

export class CheckersFabric {
    public getChecker(type: "200" | "html" | "size"): CheckerInterface {
        let handler = null;
        switch (type) {
            case '200':
                handler = new Check200();
                break;
            case 'html':
                handler = new CheckHtml();
                break;
            case 'size':
                handler = new CheckSize();
                break;
        }

        return handler;
    }
}
