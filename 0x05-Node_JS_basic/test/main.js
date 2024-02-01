const readDatabase = require('../full_server/utils');

readDatabase('database.csv')
  .then((output) => {
    console.log(output);
  })
  .catch((error) => {
    console.log(error);
  });
console.log('After!');
