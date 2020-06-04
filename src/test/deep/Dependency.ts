export class DeepDependency {
    constructor(private name: string) {
    }

    public sayYourName(): void {
        console.log(this.name);
    }

    public getName(): string {
        return this.name;
    }
}
