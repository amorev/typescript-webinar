type Book = {
    title: string,
    author: string
}

class BookRepository {
    private _elements: Book[] = [];

    public getElements() {
        return this._elements;
    }

    public addElement(element: Book) {
        this._elements.push(element);
    }

    public getElement(key: string, value: any) {
        return this._elements.find(e => e[key] === value);
    }

    public deleteElement(key: string, value: any) {
        const index = this._elements.findIndex(e => e[key] === value);
        if (index !== -1) {
            this._elements.splice(index, 1);
        }
    }
}

const c = new BookRepository();
c.addElement({
    author: "anton Morev",
    title: "The best book about typescript"
});
c.addElement({
    author: "SomebodyMore",
    title: "Not the best book about typescript"
});
console.log(c.getElements());
console.log(c.getElement('author', 'anton Morev'));
console.log(c.deleteElement('author', 'SomebodyMore'));
console.log(c.getElements());
