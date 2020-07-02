import { BaseController } from '../controllers/BaseController';

export function get(route: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        if (!(target instanceof BaseController)) {
            throw `Class ${target.constructor.name} should extend class BaseController!`;
        }
        const constructor = <any>target.constructor;
        constructor.routes = [{
            method: 'get',
            path: route,
            handler: (req, res) => {
                res.json(descriptor.value());
            }
        }];
        console.log(constructor);
        console.log({target, propertyKey, descriptor, constructor});
        return descriptor;
    };
};
