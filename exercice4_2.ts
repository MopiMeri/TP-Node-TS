const numbers = [1, 2, 3, 4, 5, 6];

function sum(arr: number[]): number {
  return arr.reduce((acc, n) => acc + n, 0);
}

function average(arr: number[]): number {
  return sum(arr) / arr.length;
}

function product(arr: number[]): number {
  return arr.reduce((acc, n) => acc * n, 1);
}

console.log(sum(numbers));     
console.log(average(numbers));
console.log(product(numbers)); 
