process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on('data', () => {
    const input = input.toString().trim();

    if (input) {
        process.stdout.write(`Your name is: ${input}\n`);
    }
})

process.stdin.on('end', () => {
    process.stdout.write("This important software is now closing\n");
});
