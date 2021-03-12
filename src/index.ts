
const LOGS_ENABLE = false;
function loggerDecorator() {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        const oldDescriptor = descriptor.value;
        descriptor.value = function () {
            LOGS_ENABLE && console.log(arguments);
            return oldDescriptor.apply(this, arguments);
        };
        return descriptor;
    };
}

function div(a,b) {
    return a/b
}

class Mathematics {
    @loggerDecorator()
    sum(a, b) {
        return a + b;
    }

    @loggerDecorator()
    minus(a, b) {
        return a - b;
    }
}

const c = new Mathematics();

console.log(c.sum(1, 3));
console.log(c.minus(1, 3));
