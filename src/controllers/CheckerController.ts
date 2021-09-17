import { Request, Response } from 'express';
import { BaseController } from './BaseController';
import { get } from '../decorators/http';
import { logger } from '../decorators/logger';

export class CheckerController extends BaseController {
    public path = '/checker';

    @logger('checker')
    @get('/200')
    public check() {
        return 123;
    }
}
