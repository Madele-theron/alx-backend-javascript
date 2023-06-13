process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (input) => {
  const inputName = input.toString().trim();

  if (inputName) {
    process.stdout.write(`Your name is: ${inputName}\n`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
