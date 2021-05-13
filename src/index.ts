import Require = NodeJS.Require;

type Book = {
    title: string,
    author: string,
    year?: number
}

type booksElements = "mine" | "other"
const b: Readonly<Required<Book>> = {
    author: "asd",
    title: "asd",
    year: 101
};
const books: Record<booksElements, Book> = {
    mine: b,
    other: b
};
type BookWithoutYear = Omit<Book, "author" | "title">
const bookWithoutYear: BookWithoutYear = {
    year: 123
};

function sth(): { title: string } {
    return {
        title: "asdas"
    };
}

const element: ReturnType<typeof sth> = {
    title: "dasd"
};

console.log(b);

type Author = {
    name: string,
    city: string
}

// console.log(a);


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

// const b = new Repository<Author>();
// b.addElement({name: 'anton', city: 'moscow'});
// console.log(b.getElements());
// b.updateElement('name', 'anton', {
//     name: 'ivan'
// })
// console.log(b.getElements());
