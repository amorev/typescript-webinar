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

    @post()
    @logger()
    public sendMoney(req) {
        const body: SendRequest = <SendRequest>req.body;
        console.log(body);
        // do something with sendMoneyOrder
        const response: SendResponse = {
            transactionId: 123123
        };
        return response;
    }
}
