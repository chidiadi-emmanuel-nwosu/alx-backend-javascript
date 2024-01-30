const displayMessage = require('./0-console');

process.stdin.setEncoding('utf8');

displayMessage('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (chunk) => {
  displayMessage(`Your name is: ${chunk}`);
  if (process.stdin.isTTY) process.exit();
});

process.on('exit', () => {
  displayMessage('This important software is now closing');
});
