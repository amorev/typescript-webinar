export class Repository<T> {
    private elements: T[] = [];

    addElement(element: T): void {
        this.elements.push(element);
    }

    findElement<K extends keyof T>(key: K, value: T[K]): T {
        return this.elements.find(e => e[key] === value);
    }

    delete<K extends keyof T>(key: K, value: T[K]): void {
        const index = this.elements.findIndex(e => e[key] === value);
        if (index !== -1) {
            this.elements.splice(index, 1);
        }
    }

    getElements(): T[] {
        return this.elements;
    }
}
