function showMyFullName(person: Person) {
    console.log(person.fname + ' ' + person.lname);
}

type A = {
    str: string
}

type B = {
    num: number
}

type C = A | B
const el: C = {
    num: 1,
};
console.log(el);

type Person  = {
    fname: string,
    lname: string,
    age: number
}

const me: Person = {
    fname: "anton",
    lname: "morev",
    age: 26,
    otch: "123"
};

showMyFullName({
    fname: "anton",
    lname: "morev",
    age: 26
});
