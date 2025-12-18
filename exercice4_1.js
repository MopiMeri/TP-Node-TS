var numbers = [1, 2, 3, 4, 5, 6];
var resultat = numbers
    .filter(function (n) { return n % 2 === 0; })
    .map(function (n) { return n * 2; })
    .reduce(function (acc, n) { return acc + n; }, 0);
console.log(resultat);
