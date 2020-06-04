let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let color: string = "blue";
color = "red";

// Массивы
let array1: number[] = [1, 2, 3];
let array2: Array<number> = [1, 2, 3];

let x: [string, number];
x = ["hello", 10];

enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
let list: any[] = [1, true, "free"];

list[1] = 100;
