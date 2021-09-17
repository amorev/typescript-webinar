import { Request, Response } from 'express';
import { BaseController } from './BaseController';
import { get, post } from '../decorators/http';

export class NewController extends BaseController {
    public path = '/new';

    @get('/check')
    public check() {
        return 321;
    }

    @post('/post')
    public post() {
        return 'post'
    }
}
