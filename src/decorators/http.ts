export function httpDecorator(method: string) {
    return function (path: string) {
        return function (t: any, k: string, d: PropertyDescriptor) {
            console.log({t, k, d});
            const constructor: any = t.constructor;
            constructor.routes = [{
                method,
                path,
                handler: (req, res) => {
                    res.json(d.value());
                }
            }];
            return d;
        };
    }
}

export const get = httpDecorator('get');
export const post = httpDecorator('post');
