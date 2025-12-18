var usersWithHobbies = [
    { name: "Alice", hobbies: ["climbing", "yoga"] },
    { name: "Bob", hobbies: ["gaming"] },
    { name: "Charlie", hobbies: ["reading", "hiking"] },
];
var listes_hobbies = usersWithHobbies.flatMap(function (u) { return u.hobbies; });
console.log(listes_hobbies);
