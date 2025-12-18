const numbers = [1, 2, 3, 4, 5, 6];


const resultat = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((acc, n) => acc + n, 0);

console.log(resultat);

