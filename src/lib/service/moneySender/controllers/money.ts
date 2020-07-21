import { RouterController } from '../../../../decorators/controller';
import { BaseController } from '../../../../controllers/BaseController';
import { get, logger, post } from '../../../../decorators/methods';
import { SendRequest, SendResponse } from '../models/send';
import { AuthServiceHandler } from '../../../connectors/AuthConnector';

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
    public async sendMoney(req): Promise<SendResponse> {
        const token = req.headers.token;
        const checkResult = await AuthServiceHandler.getInstance().validateToken(token);
        if (!checkResult) {
            throw new Error("Wrong token");
        }
        const body: SendRequest = req.body;
        console.log('doing something', body);
        // do something with sendMoneyOrder
        return {
            transactionId: 123123
        };
    }
}
