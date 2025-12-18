var numbers = [1, 2, 3, 4, 5, 6];
function sum(arr) {
    return arr.reduce(function (acc, n) { return acc + n; }, 0);
}
function average(arr) {
    return sum(arr) / arr.length;
}
function product(arr) {
    return arr.reduce(function (acc, n) { return acc * n; }, 1);
}
console.log(sum(numbers));
console.log(average(numbers));
console.log(product(numbers));
