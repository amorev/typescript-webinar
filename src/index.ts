type Book = {
    title: string,
    author: string,
}

type Author = {
    title: string,
    age: number
}

class Repository<T> {
    private elements: T[] = [];

    public getElement<K extends keyof T>(key: K, value: any): T | undefined {
        return this.elements.find(e => e[key] === value);
    }

    public addElement(book: T) {
        this.elements.push(book);
    }

    public deleteElement<K extends keyof T>(key: K, value: any): void {
        const index = this.elements.findIndex(el => el[key] === value);
        if (index !== -1) {
            this.elements.splice(index, 1);
        }
    }

    public getElements(): T[] {
        return this.elements;
    }
}

const bookRepository = new Repository<Book>();
bookRepository.addElement({
    author: 'asdasd',
    title: 'asdasd'
});

console.log(bookRepository.getElements());

const AuthorRepository = new Repository<Author>();
AuthorRepository.addElement({
    age: 50,
    title: "Author"
});
console.log(AuthorRepository.getElements());
const el = AuthorRepository.getElement('title', 'Author')
console.log(el);
