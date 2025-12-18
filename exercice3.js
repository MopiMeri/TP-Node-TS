function applyNTimes(f, n, x) {
    var result = x;
    for (var i = 0; i < n; i++) {
        result = f(result);
    }
    return result;
}
var double = function (x) { return x * 2; };
console.log(applyNTimes(double, 3, 1)); 