import { BaseController, Route } from './base';

export class HomeController extends BaseController {
    public initRoutes(): Route[] {
        return [
            {
                method: 'get',
                path: '/',
                handler: (req, res) => {
                    console.log(1);
                    res.send('hello');
                }
            }
        ];
    }
}
