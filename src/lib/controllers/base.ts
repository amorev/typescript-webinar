import * as express from 'express';

export type Route = {
    method: 'get' | 'post'
    path: string
    handler: (req, res) => void
}

export abstract class BaseController {
    private router = express.Router();
    protected routes: Route[] = [];

    constructor() {
        this.initRoutes().forEach(route => {
            this.router[route.method](route.path, route.handler);
        });
    }

    abstract initRoutes(): Route[];
}
