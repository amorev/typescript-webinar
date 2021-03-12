import axios, { AxiosInstance } from 'axios';

type CheckerSettings = {
    url: string,
    data?: any
}

interface CheckerInterface {
    check(settings: CheckerSettings): Promise<boolean>;
}

export enum CheckerType {
    check200,
    checkHtml,
    checkUrl
}

class Check200 implements CheckerInterface {
    protected axios;

    constructor(axiosInstance: AxiosInstance) {
        console.log('i am creating');
        this.axios = axiosInstance;
    }

    async check(settings: CheckerSettings): Promise<boolean> {
        return this.axios.get(settings.url)
            .then(r => {
                return (r.status === 200);
            })
            .catch(e => {
                return false;
            });
    }
}

class CheckHTML implements CheckerInterface {
    protected debugger;

    constructor(debuggerFunction: Function) {
        console.log('i am creating');
        this.debugger = debuggerFunction;
    }

    async check(settings: CheckerSettings): Promise<boolean> {
        return axios.get(settings.url)
            .then(r => {
                this.debugger('success');
                return (r.data.indexOf(settings.data) !== -1);
            })
            .catch(e => {
                this.debugger('error');
                return false;
            });
    }
}


export class CheckersFabric {
    protected static instances: CheckerInterface[] = [];

    public static GetChecker(type: CheckerType): CheckerInterface {
        if (!this.instances[type]) {
            switch (type) {
                case CheckerType.check200:
                    this.instances[type] = new Check200(axios);
                    break;
                case CheckerType.checkHtml:
                    this.instances[type] = new CheckHTML((d) => {
                        console.log(d);
                    });
            }
        }

        return this.instances[type];
    }
}

export class CorrectUrlChecker implements CheckerInterface {
    check(settings: CheckerSettings): Promise<boolean> {
        if (settings.url.match(('http:/?')))
            return Promise.resolve(false);
    }
}
