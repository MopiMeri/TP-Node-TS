let counter = 0;

function add(a: number, b: number): number {
    return a + b;
}

function increment(): number {
    counter++;
    return counter;
}

console.log("test");
console.log(add(2, 3));
console.log(add(2, 3));

console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
