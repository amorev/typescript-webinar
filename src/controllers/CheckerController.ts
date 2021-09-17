import { Request, Response } from 'express';
import * as express from 'express';

export class CheckerController {
    public router = express.Router();

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
