process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', () => {
  const inputName = process.stdin.read();

  if (inputName) {
    process.stdout.write(`Your name is: ${inputName}\n`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
