// Starter data
const students = [
  { name: "Anna", grade: 92 },
  { name: "Ben", grade: 78 },
  { name: "Clara", grade: 88 },
  { name: "David", grade: 84 },
  { name: "Ella" } // no grade, should use default
];

// Start coding here...
console.log("All students (uppercase names):");
students.forEach(s => console.log(s.name.toUpperCase()));

console.log("\nStudents with grade ≥ 85:");
const highGrades = students.filter(s => (s.grade ?? 0) >= 85);
highGrades.forEach(s => console.log(`${s.name}: ${s.grade}`));

const totalGrades = students.reduce((sum, s) => sum + (s.grade ?? 0), 0);
const avgGrade = totalGrades / students.length;
console.log(`\nAverage grade: ${avgGrade.toFixed(2)}`);

function displayStudent({ name, grade = 0 }) {
  return `Student: ${name}, Grade: ${grade}`;
}

console.log("\nFormatted student info:");
students.forEach(s => console.log(displayStudent(s)));