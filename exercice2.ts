const student = { name: "Léo", grade: 14 };

function updateGrade(student: { name: string; grade: number }, newGrade: number) {
  return { ...student, grade: newGrade };
}

const student_modifie = updateGrade(student, 18);

console.log(student);      
console.log(student_modifie); 
