function makeDecorator(method: string) {
    return function (path: string) {
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
            const constructor: any = target.constructor;
            if (!constructor.routes) {
                constructor.routes = [];
            }
            constructor.routes.push({
                method: method,
                path: path,
                handler: async (req, res) => {
                    let value = await descriptor.value(req, res);
                    res.json(value);
                }
            });
        };
    }
}



export const post = makeDecorator('post');
export const get = makeDecorator('get');
export const del = makeDecorator('delete');
