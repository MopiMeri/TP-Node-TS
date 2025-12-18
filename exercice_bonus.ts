type User = { name: string; age: number; country: string };

const data: User[] = [
  { name: "Alice", age: 25, country: "France" },
  { name: "Bob", age: 15, country: "France" },
  { name: "Charlie", age: 30, country: "Spain" },
  { name: "Diana", age: 22, country: "France" },
];

const adultes = data
  .filter(u => u.age >= 18 && u.country === "France")
  .sort((a, b) => b.age - a.age);

const names_adultes = adultes.map(u => u.name);

const moyenne_age =
  adultes.reduce((acc, u) => acc + u.age, 0) / adultes.length;

console.log(names_adultes);
console.log(moyenne_age); 