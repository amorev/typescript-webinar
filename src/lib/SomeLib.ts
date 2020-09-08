export class SomeLib {
    public getLibRating() {
        return this.getRandomInt(10);
    }

    public getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}
