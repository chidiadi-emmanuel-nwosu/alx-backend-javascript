import { readFile } from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const lines = data.trim().split('\n');
      const res = {};
      lines.forEach((line, index) => {
        if (index) {
          const [firstname, /* lastname */, /* age */, field] = line.split(',');
          if (field.trim() in res) {
            res[field.trim()].push(firstname);
          } else {
            res[field.trim()] = [firstname];
          }
        }
      });
      resolve(res);
    });
  });
}

export default readDatabase;
