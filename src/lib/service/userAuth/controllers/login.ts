import { RouterController } from '../../../../decorators/controller';
import { BaseController } from '../../../../controllers/BaseController';
import { get, logger, post } from '../../../../decorators/methods';
import { LoginRequest, LoginResponse } from '../models/send';

@RouterController('/auth')
export class AuthController extends BaseController {
    @get('/')
    public index() {
        return {
            active: true
        };
    }

    @post('/login')
    @logger()
    public login(req): LoginResponse {
        const body: LoginRequest = req.body;
        console.log(body);
        // do something with sendMoneyOrder
        return {
            token: '123123'
        };
    }
}
