const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';

const countStudents = (fileName) => new Promise((resolve, reject) => {
  if (!fileName) {
    reject(new Error('Cannot load the database'));
  }
  if (fileName) {
    fs.readFile(fileName, (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const reportParts = [];
        const fileLines = data.toString().split('\n');
        const FieldNames = fileLines[0].split(',');
        const Groups = {};
        const PropNames = FieldNames.slice(
          0,
          FieldNames.length - 1,
        );
        for (const line of fileLines.slice(1)) {
          const Record = line.split(',');
          const studentPropValues = Record.slice(
            0,
            Record.length - 1,
          );
          const field = Record[Record.length - 1];
          if (!Object.keys(Groups).includes(field)) {
            Groups[field] = [];
          }
          const studentEntries = PropNames.map((propName, i) => [
            propName,
            studentPropValues[i],
          ]);
          Groups[field].push(Object.fromEntries(studentEntries));
        }
        const totalStudents = Object.values(Groups).reduce(
          (previous, current) => (previous || []).length + current.length,
        );
        reportParts.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(Groups)) {
          reportParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        resolve(reportParts.join('\n'));
      }
    });
  }
});

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  }
  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      const outString = output.slice(0, -1);
      response.end(outString);
    }).catch(() => {
      response.statusCode = 404;
      response.end('Cannot load the database');
    });
  }
});

app.listen(PORT, HOST, () => {
});

module.exports = app;
