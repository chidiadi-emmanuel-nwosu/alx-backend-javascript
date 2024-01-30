const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') res.end('Hello Holberton School!');

  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((output) => {
        res.end(`${output.join('\n')}`);
      })
      .catch((err) => {
        res.end(err.message);
      });
  }
});

app.listen(1245);

module.exports = app;
