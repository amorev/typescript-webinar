import { Request, Response } from 'express';
import { BaseController } from './BaseController';

export class NewController extends BaseController {
    public path = '/new';

    public initRoutes() {
        this.router.get('/sth', (req, res) => {
            return this.check(req, res);
        });
    }

    public check(req: Request, res: Response) {
        res.json(321);
    }
}
