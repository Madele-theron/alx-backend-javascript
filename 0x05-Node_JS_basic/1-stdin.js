process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on('data', () => {
    const input = process.stdin.read();

    if (input) {
        process.stdout.write(`Your name is ${input}`)
    }
})

process.stdout.on('end', () => {
    process.stdout.write('This important software is now closing\n');
});
