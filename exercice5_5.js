var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 15 },
    { name: "Charlie", age: 30 },
    { name: "Diana", age: 17 },
];
var users_tries = __spreadArray([], users, true).sort(function (a, b) { return a.age - b.age; });
var deux_plus_jeunes = users_tries.slice(0, 2);
console.log(deux_plus_jeunes);
