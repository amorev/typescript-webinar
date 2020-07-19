import { MoneySenderService } from './moneySender';
import { BaseController } from '../../controllers/BaseController';

export type servicesTypes = 'moneySender' | 'authenticator' | string;

export class ServiceHandler {
    public static getService(type: servicesTypes): ServiceInterface {
        switch (type) {
            case 'moneySender':
                return new MoneySenderService();
        }
    }
}

export interface ServiceInterface {
    getRoutes(): BaseController[];
}
