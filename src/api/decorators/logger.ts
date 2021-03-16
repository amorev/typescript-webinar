export function logger(category: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
        // console.log({target, propertyKey, descriptor});
        const oldMethod = descriptor.value;
        descriptor.value = function () {
            console.log(Date.now() / 1000, 'Request to', propertyKey, category);
            return oldMethod.apply(this, arguments);
        };
    };
}
