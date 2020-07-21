import { ServiceInterface } from '../index';
import { BaseController } from '../../../controllers/BaseController';
import { AuthController } from './controllers/login';

export class AuthService implements ServiceInterface {
    getRoutes(): BaseController[] {
        return [
            new AuthController()
        ];
    }
}
