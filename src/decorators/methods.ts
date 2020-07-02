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
            constructor.routes.push({
                method: method,
                path: route,
                handler: (req, res) => {
                    res.json(descriptor.value());
                }
            });
            console.log(constructor);
            console.log({target, propertyKey, descriptor, constructor});
            return descriptor;
        };
    };
}

export const get = httpMethodDecorator('get');
export const post = httpMethodDecorator('post');
