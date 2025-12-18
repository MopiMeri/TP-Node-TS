const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 17 },
];

const verif_mineur = users.some(u => u.age < 18);
const plus_de_dix = users.every(u => u.age > 10);

console.log(verif_mineur);
console.log(plus_de_dix);
