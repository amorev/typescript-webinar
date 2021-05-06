import { Registerable } from './register';

interface IVehicle {
    go(): void;
}

abstract class Car implements IVehicle {
    go(): void {
        console.log('i am going by 4 wheels');
    }
}

export class Truck extends Car implements Registerable {
    public load() {
        console.log('i am loading');
    }

    showNumber(): string {
        return '123123123';
    }
}

export class SportCar extends Car {
    public race() {
        console.log('i am racing');
    }
}

abstract class Moto implements IVehicle {
    go(): void {
        console.log('i am going by 2 wheels');
    }
}

export class Chopper extends Moto implements Registerable {
    showNumber(): string {
        return '321321';
    }
}

