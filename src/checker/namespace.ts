import axios from 'axios';

export namespace Checker {
    type checkResult = {
        success: boolean,
        data?: any
    }

    export interface check {
        checkSite(info: any): Promise<checkResult>
    }

    export interface Checker200Data {
        url: string
    }

    export class Checker200 implements check {
        async checkSite(info: Checker200Data): Promise<checkResult> {
            try {
                const data = await axios(info.url);
                return {
                    success: data.status === 200
                };
            } catch (e) {
                return {
                    success: false,
                    data: e
                };
            }
        }
    }

    export const Check200 = '200check';

    export class CheckersFabric {
        private checkersMap: any = {
            '200check': Checker200
        };

        public getChecker(type: string): check {
            if (!this.checkersMap[type]) {
                return null;
            }
            return new this.checkersMap[type];
        }
    }
}
