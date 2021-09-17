import * as express from 'express';

export abstract class BaseController {
    public path = '/';

    public router = express.Router();

    abstract initRoutes();
}
