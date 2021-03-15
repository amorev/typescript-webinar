type Book = {
    title: string,
    author: string,
    year?: number
}

type Author = {
    name: string
}

class Repository<T> {
    private elements: T[] = [];

    public addElement(book: T): void {
        this.elements.push(book);
    }

    public getElements(): T[] {
        return this.elements;
    }

    public deleteElement<K extends keyof T>(key: K, value: T[K]): void {
        const index = this.elements.findIndex(e => e[key] === value);
        if (index !== -1) {
            this.elements.splice(index, 1);
        }
    }
}

const repository = new Repository<Book>();
repository.addElement({
    author: "anton",
    title: "The best book about ts",
    year: 1992
});
repository.addElement({
    title: 'not best book about ts',
    author: "not anton",
    year: 2012
});
repository.deleteElement('year', 123123);
console.log(repository.getElements());

const arep = new Repository<Author>();
arep.addElement({
    name: 'anton'
});
console.log(arep.getElements());
