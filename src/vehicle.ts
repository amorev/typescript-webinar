abstract class Vehicle {
    public go() {
        console.log('i am going');
    }
}

export class Car extends Vehicle {
    public park() {
        console.log('i am parking');
    }
}
