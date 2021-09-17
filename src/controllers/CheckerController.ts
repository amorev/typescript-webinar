import { Request, Response } from 'express';
import { BaseController } from './BaseController';

export class CheckerController extends BaseController {
    public path = '/checker';

    public initRoutes() {
        this.router.get('/200', (req, res) => {
            return this.check(req, res);
        });
    }

    public check(req: Request, res: Response) {
        res.json(123);
    }
}
