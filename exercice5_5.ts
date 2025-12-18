const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 17 },
];

const users_tries = [...users].sort((a, b) => a.age - b.age);
const deux_plus_jeunes = users_tries.slice(0, 2);

console.log(deux_plus_jeunes);
