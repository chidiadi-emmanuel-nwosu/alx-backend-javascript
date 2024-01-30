const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((output) => {
      const msg = 'This is the list of our students\n';
      res.send(`${msg}${output.join('\n')}`);
    })
    .catch((err) => {
      res.send(`${msg}${err.message}`);
    });
});

app.listen(port);
