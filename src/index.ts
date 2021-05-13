function logger(target, key, descriptor) {
    const beforeMethod = descriptor.value
    descriptor.value = function () {
        console.log('log', new Date());
        return beforeMethod.apply(this, arguments)
    }

    return descriptor
}


type Book = {
    title: string,
    author: string,
    year?: number
}
type Author = {
    name: string,
    city: string
}
function log() {
    console.log('log', new Date());

}


class Repository<T> {
    private _elements: T[] = [];

    @logger
    public getElements() {
        return this._elements;
    }

    public addElement(element: T) {
        this._elements.push(element);
    }

    public getElement<K extends keyof T>(key: K, value: T[K]): T {
        return this._elements.find(e => e[key] === value);
    }

    public deleteElement<K extends keyof T>(key: K, value: T[K]) {
        const index = this._elements.findIndex(e => e[key] === value);
        if (index !== -1) {
            this._elements.splice(index, 1);
        }
    }

    @logger
    public updateElement<K extends keyof T>(key: K, value: T[K], newValue: Partial<T>) {
        const index = this._elements.findIndex(e => e[key] === value);
        if (index !== -1) {
            this._elements[index] = {
                ...this._elements[index],
                ...newValue
            };
        }
    }
}

const b = new Repository<Author>();
b.addElement({name: 'anton', city: 'moscow'});
console.log(b.getElements());
b.updateElement('name', 'anton', {
    name: 'ivan'
})
console.log(b.getElements());
