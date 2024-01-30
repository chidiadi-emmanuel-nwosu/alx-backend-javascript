const readDatabase = require('../utils');

function sortObject(obj) {
  const keys = Object.keys(obj);

  keys.sort();

  const sortedObject = {};
  keys.forEach((key) => {
    sortedObject[key] = obj[key];
  });

  return sortedObject;
}

class StudentsController {
  static getAllStudents(request, response, path) {
    readDatabase(path)
      .then((output) => {
        const object = sortObject(output);
        const msgs = ['This is the list of our students'];

        Object.entries(object).forEach(([key, value]) => {
          const msg = `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`;
          msgs.push(msg);
        });

        response.status(200).send(`${msgs.join('\n')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response, path) {
    readDatabase(path)
      .then((output) => {
        const { major } = request.params;

        if (major !== 'CS' && major !== 'SWE') {
          response.status(500).send('Major parameter must be CS or SWE');
          return;
        }

        const msg = `List: ${output[major].join(', ')}`;

        response.status(200).send(`${msg}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
