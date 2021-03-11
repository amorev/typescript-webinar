type Wheel = {
    radius: number;
    type: 'tube' | 'tubeless' | 'plastic';
    rotate(): void;
}

type Sledge = {
    length: number;
    width: number;
}

type Boat = {
    depth: number;
}

type MovingMaker = (Wheel | Sledge) & Boat
type AmphybyMovingMaker = Wheel & Sledge & Boat

const asd: MovingMaker = {
    length: 123,
    width: 123,
    depth: 123
};

class Vehicle {
    public movingMakers: MovingMaker[];
    public speed: number;

    public move(): void {
        console.log('i am moving with speed', this.speed);
    }
}

interface WheelInterface {
    radius: number;
    type: 'tube' | 'tubeless' | 'plastic';

    rotate(): void;
}

interface AutomativeChangebleWheel {
    changeTyre(): void;
}

interface BttfWheel extends WheelInterface, AutomativeChangebleWheel {
    fly(): void;
}

class Car extends Vehicle {
    wheels: WheelInterface[] = [];

    move(): void {
        console.log('i am car and i am moving');
        console.log(this.wheels);
    }
}


const c = new Car();
c.wheels = [
    {
        radius: 10,
        type: 'tubeless',
        rotate() {
        }
    },
    {
        radius: 10,
        type: 'tubeless',
        rotate() {
        }
    },
    {
        radius: 10,
        type: 'tubeless',
        rotate() {
        }
    },
    {
        radius: 10,
        type: 'tubeless',
        rotate() {
        }
    }
];
c.speed = 10;
c.move();


