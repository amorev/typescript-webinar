import { MoneySenderService } from './moneySender';
import { BaseController } from '../../controllers/BaseController';
import { AuthService } from './userAuth';

export type servicesTypes = 'moneySender' | 'authenticator' | string;

export class ServiceHandler {
    public static getService(type: servicesTypes): ServiceInterface {
        switch (type) {
            case 'moneySender':
                return new MoneySenderService();
            case 'authenticator':
                return new AuthService();
        }
    }
}

export interface ServiceInterface {
    getRoutes(): BaseController[];
}
