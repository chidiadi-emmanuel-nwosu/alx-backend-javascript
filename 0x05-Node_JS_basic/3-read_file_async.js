const fs = require('fs');
const displayMessage = require('./0-console');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const totalStudents = lines.length - 1;

      const csStudents = filterStudentsByCourse(lines, 'CS');
      const sweStudents = filterStudentsByCourse(lines, 'SWE');

      const msg1 = `Number of students: ${totalStudents}`;
      const msg2 = `Number of students in CS: ${csStudents.count}. List: ${csStudents.list}`;
      const msg3 = `Number of students in SWE: ${sweStudents.count}. List: ${sweStudents.list}`;

      displayMessage(msg1);
      displayMessage(msg2);
      displayMessage(msg3);
      resolve([msg1, msg2, msg3]);
    });
  });
}

function filterStudentsByCourse (data, course) {
  const students = [];
  for (let i = 1; i < data.length; i++) {
    const [firstname, lastname, age, field] = data[i].split(',');
    if (field.trim() === course) {
      students.push(firstname);
    }
  }
  return {
    count: students.length,
    list: students.join(', ')
  };
}

module.exports = countStudents;
