export interface Registerable {
    showNumber(): string;
}

export class Register {
    public registered: string[] = [];

    public register(reg: Registerable) {
        this.registered.push(reg.showNumber());
    }
}
