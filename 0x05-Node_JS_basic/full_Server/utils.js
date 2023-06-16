const countStudents = require('./3-read_file_async');
const express = require('express');
const app = express();

const PORT = 1245

app.get('/', (request, response) => response.send('Hello Holberton School!'));
app.get('/students', async (request, response) => {
  const heading = 'This is the list of our students\n';
  try {
    const data = await countStudents(process.argv[2]);
    response.send(`${heading}${data.join('\n')}`);
  } catch (error) {
    response.send(`${heading}${error.message}`);
  }
});
app.listen(PORT);

module.exports = app;
