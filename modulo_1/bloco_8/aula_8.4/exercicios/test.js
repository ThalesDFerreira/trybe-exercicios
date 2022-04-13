const grades = [9, 8, 10, 7, 5];

const b = grades.length;
const a = grades.reduce((acc, nota) => { return acc + nota})

const result = a / b;

console.log(result);