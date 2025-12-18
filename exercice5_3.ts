const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 17 },
];

const prenoms = users.map(u => u.name);

console.log(prenoms.includes("Alice")); 
console.log(prenoms.includes("Eve"));