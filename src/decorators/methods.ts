import { BaseController } from '../controllers/BaseController';

function httpMethodDecorator(method: string) {
    return function (route: string) {
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            if (!(target instanceof BaseController)) {
                throw `Class ${target.constructor.name} should extend class BaseController!`;
            }
            const constructor = <any>target.constructor;
            if (!constructor.routes) {
                constructor.routes = [];
            }
            console.log('constructor');
            constructor.routes.push({
                method: method,
                path: route,
                handler: (req, res) => {
                    res.json(descriptor.value(req, res));
                }
            });
            return descriptor;
        };
    };
}

export const get = httpMethodDecorator('get');
export const post = httpMethodDecorator('post');
