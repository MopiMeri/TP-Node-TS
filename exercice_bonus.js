var data = [
    { name: "Alice", age: 25, country: "France" },
    { name: "Bob", age: 15, country: "France" },
    { name: "Charlie", age: 30, country: "Spain" },
    { name: "Diana", age: 22, country: "France" },
];
var adultes = data
    .filter(function (u) { return u.age >= 18 && u.country === "France"; })
    .sort(function (a, b) { return b.age - a.age; });
var names_adultes = adultes.map(function (u) { return u.name; });
var moyenne_age = adultes.reduce(function (acc, u) { return acc + u.age; }, 0) / adultes.length;
console.log(names_adultes);
console.log(moyenne_age);
