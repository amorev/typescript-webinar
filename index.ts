const title: string = "Anton";
const age: number = 25;
console.log(`Hello ${title}, you are ${age} years old`);
const secondUser: string = "Ivan";
let olderThan25: boolean;
const secondAge: number = 28;
olderThan25 = secondAge > 25;
if (olderThan25) {
    console.log(`Hello ${secondUser}, you are older than 25`);
} else {
    console.log(`Hello ${secondUser}, you are NOT older than 25`);
}

