type Book = {
    title: string,
    author: string,
    year?: number
}

type Author = {
    name: string,
    city: string
}

class Repository<T> {
    private _elements: T[] = [];

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
}

class BookRepository extends Repository<Book> {

}

const c = new BookRepository();
c.addElement({
    author: "anton Morev",
    title: "The best book about typescript",
    year: 2021
});
c.addElement({
    author: "SomebodyMore",
    title: "Not the best book about typescript",
    year: 2011
});
console.log(c.getElements());
console.log(c.getElement('author', 'anton Morev'));
console.log(c.getElement('year', 2021));
