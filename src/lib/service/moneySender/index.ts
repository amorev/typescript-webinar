import { ServiceInterface } from '../index';
import { MoneyController } from './controllers/money';
import { BaseController } from '../../../controllers/BaseController';

export class MoneySenderService implements ServiceInterface {
    getRoutes(): BaseController[] {
        return [
            new MoneyController()
        ];
    }
}
