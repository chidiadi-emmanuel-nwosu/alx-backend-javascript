const displayMessage = require('./0-console');

process.stdin.setEncoding('utf8');

displayMessage('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (name) => {
  process.stdout.write(`Your name is: ${name}`);
  if (process.stdin.isTTY) process.exit();
});

process.stdin.on('end', () => {
  displayMessage('This important software is now closing');
});
