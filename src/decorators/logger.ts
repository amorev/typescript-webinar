export function logger(block: string) {
    return function (t: any, k: string, d: PropertyDescriptor) {
        const oldFunc = d.value;
        d.value = function () {
            console.log((new Date), block, 'start');
            let apply = oldFunc.apply(this, arguments);
            console.log((new Date), block, 'end', apply);
            return apply;
        };
        return d;
    };

}

