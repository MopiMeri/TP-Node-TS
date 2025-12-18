var users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 15 },
    { name: "Charlie", age: 30 },
    { name: "Diana", age: 17 },
];
var firstAdult = users.find(function (u) { return u.age >= 18; });
console.log(firstAdult);
