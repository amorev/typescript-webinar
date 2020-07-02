import * as express from 'express';

export abstract class BaseController {
    public router = express.Router();

    public routes = [];

    public initRoutes() {
        const routes = this.routes.concat((<any>this.constructor).routes);
        routes.forEach(route => {
            this.router[route.method](route.path, (req, res) => route.handler(req, res));
        });
    }
}
