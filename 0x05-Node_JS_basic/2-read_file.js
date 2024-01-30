const fs = require('fs');
const displayMessage = require('./0-console');

function filterStudentsByCourse(data, course) {
  const students = [];
  for (let i = 1; i < data.length; i += 1) {
    const [firstname, lastname, age, field] = data[i].split(',');
    if (lastname && age && field.trim() === course) {
      students.push(firstname);
    }
  }
  return {
    count: students.length,
    list: students.join(', '),
  };
}

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.trim().split('\n');
    const totalStudents = lines.length - 1;

    const csStudents = filterStudentsByCourse(lines, 'CS');
    const sweStudents = filterStudentsByCourse(lines, 'SWE');

    displayMessage(`Number of students: ${totalStudents}`);
    displayMessage(`Number of students in CS: ${csStudents.count}. List: ${csStudents.list}`);
    displayMessage(`Number of students in SWE: ${sweStudents.count}. List: ${sweStudents.list}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
