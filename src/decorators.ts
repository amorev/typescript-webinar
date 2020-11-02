type LogsPlaceType = 'stdout' | 'file'
const place: LogsPlaceType = 'stdout';

export function myDecor(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const oldDescriprtor = descriptor.value;
    descriptor.value = function () {
        if (place === 'stdout')
            console.log('me was called');
        if (place === 'file') {
            //    писать в файл
        }
        return oldDescriprtor.apply(this, arguments);
    };
    return descriptor;
}

export function authorizedRequest(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const oldDescriprtor = descriptor.value;
    console.log(target);
    descriptor.value = function () {
        if (place === 'stdout')
            console.log('me was called');
        if (place === 'file') {
            //    писать в файл
        }
        return oldDescriprtor.apply(this, arguments);
    };
    return descriptor;
}
