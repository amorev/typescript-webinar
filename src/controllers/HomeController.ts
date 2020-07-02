import { Request, Response } from 'express';
import { BaseController } from './BaseController';
import { get } from '../decorators/methods';


class HomeController extends BaseController {
    public path = '/';

    public routes = [
        {
            method: 'get',
            path: '/simple',
            handler: (req, res) => this.indexSimple(req, res)
        }
    ];

    public initRoutes() {
        const routes = this.routes.concat((<any>this.constructor).routes);
        routes.forEach(route => {
            this.router[route.method](route.path, (req, res) => route.handler(req, res));
        });
    }

    @get('/test')
    public indexHandler() {
        return [
            {
                id: 1,
                name: 'Ali'
            },
            {
                id: 2,
                name: 'Can'
            },
            {
                id: 3,
                name: 'Ahmet'
            }
        ];
    }

    public indexSimple(req: Request, res: Response) {
        res.json(this.indexHandler());
    };
}

export default HomeController;
