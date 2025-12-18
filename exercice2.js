var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var student = { name: "Léo", grade: 14 };
function updateGrade(student, newGrade) {
    return __assign(__assign({}, student), { grade: newGrade });
}
var student_modifie = updateGrade(student, 18);
console.log(student); 
console.log(student_modifie);