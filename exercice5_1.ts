const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 17 },
];

const premier_adulte = users.find(u => u.age >= 18);
console.log(premier_adulte);
