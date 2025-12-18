const usersWithHobbies = [
  { name: "Alice", hobbies: ["climbing", "yoga"] },
  { name: "Bob", hobbies: ["gaming"] },
  { name: "Charlie", hobbies: ["reading", "hiking"] },
];

const listes_hobbies = usersWithHobbies.flatMap(u => u.hobbies);

console.log(listes_hobbies);
