type Book = {
    title: string,
    author: string,
    pagesSize?: number,
}

type Author = {
    name: string
}

class Repository<T> {
    elements: T[] = [];

    addElement(book: T): void {
        this.elements.push(book);
    }

    getElements(): T[] {
        return this.elements;
    }

    findElement<K extends keyof T>(key: K, value: T[K]): {
        element: T
    } {
        return {
            element: this.elements.find(e => e[key] === value)
        };
    }

    deleteElement<K extends keyof T>(key: K, value: T[K]): void {
        const index = this.elements.findIndex(e => e[key] === value);
        if (index !== -1) {
            this.elements.splice(index, 1);
        }
    }
}

const bookRepository = new Repository<Book>();
bookRepository.addElement({
    title: "Best book about typescript",
    author: "Anton Morev"
});
bookRepository.addElement({
    title: "Not Best book about typescript",
    author: "Not Anton Morev"
});
console.log(bookRepository.getElements(), 'before delete');
bookRepository.deleteElement('author', "Best book about typescript");
bookRepository.findElement('author', 'asd')
console.log(bookRepository.getElements(), 'after delete');

const authorRepository = new Repository<Author>();
authorRepository.addElement({
    name: 'asdasd'
});
authorRepository.findElement('name', 'asdads')
