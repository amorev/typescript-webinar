import { BaseController } from '../controllers/BaseController';

function httpMethodDecorator(method: string) {
    return function (route?: string) {
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
                path: route || '/' + propertyKey,
                handler: (req, res) => {
                    res.json(descriptor.value(req, res));
                }
            });
            return descriptor;
        };
    };
}

export function logger(category: string = 'main') {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function loggerWrapper() {
            console.log(Date.now() / 1000 | 0, 'Log event in', category, 'body', arguments[0].body);
            return originalMethod.apply(this, arguments);
        };
        return descriptor;
    };
};

export const get = httpMethodDecorator('get');
export const post = httpMethodDecorator('post');
