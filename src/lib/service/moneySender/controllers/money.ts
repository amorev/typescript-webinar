import { RouterController } from '../../../../decorators/controller';
import { BaseController } from '../../../../controllers/BaseController';
import { get, logger, post } from '../../../../decorators/methods';
import { SendRequest, SendResponse } from '../models/send';

@RouterController('/money')
export class MoneyController extends BaseController {
    @get('/')
    public index() {
        return {
            active: true
        };
    }

    @post('/send')
    @logger()
    public sendMoney(req): SendResponse {
        const body: SendRequest = req.body;
        console.log(body);
        // do something with sendMoneyOrder
        return {
            transactionId: 123123
        };
    }
}
