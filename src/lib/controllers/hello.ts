import { BaseController, Route } from './base';

export class HelloController extends BaseController {
    public initRoutes(): Route[] {
        return [
            {
                method: 'get',
                path: '/',
                handler: (req, res) => {
                    console.log(1);
                    res.send(this.indexAction());
                }
            }
        ];
    }

    protected indexAction() {
        return 'second hello';
    }
}
