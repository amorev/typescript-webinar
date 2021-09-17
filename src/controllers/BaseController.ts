import * as express from 'express';

export abstract class BaseController {
    public path = '/';

    public router = express.Router();

    public initRoutes() {
        const constructorRoutes = (<any>this.constructor).routes;
        console.log({constructorRoutes});
        constructorRoutes.forEach(route => {
            this.router[route.method](route.path, (req, res) => route.handler(req, res));
        });
    }
}
