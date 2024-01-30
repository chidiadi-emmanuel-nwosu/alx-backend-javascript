const displayMessage = require('./0-console');

process.stdin.setEncoding('utf8');

displayMessage('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (chunk) => {
  const name = chunk.trim();
  displayMessage(`Your name is: ${name}`);
  if (process.stdin.isTTY) process.exit();
});

process.stdin.on('exit', () => {
  displayMessage('This important software is now closing');
});
