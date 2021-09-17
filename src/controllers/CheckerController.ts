import { Request, Response } from 'express';
import { BaseController } from './BaseController';
import { get } from '../decorators/http';

export class CheckerController extends BaseController {
    public path = '/checker';

    @get('/200')
    public check() {
        return 123;
    }
}
