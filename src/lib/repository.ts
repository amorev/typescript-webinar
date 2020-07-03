export class Repository<T> {
    get entities(): T[] {
        return this._entities;
    }

    private _entities: T[] = [];

    public add(element: T): void {
        this._entities.push(element);
    }

    public find<K extends keyof T>(key: K, value: any): T | null {
        return this._entities.find(e => e[key] === value);
    }

    public delete<K extends keyof T>(key: K, value: any): void {
        const index = this._entities.findIndex(e => e[key] === value);
        if (index !== -1) {
            this._entities.splice(index, 1);
        }
    }
}
