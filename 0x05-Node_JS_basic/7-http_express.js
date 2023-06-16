const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;

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
        const fileLines = data.toString('utf-8').trim().split('\n');
        const Groups = {};
        const FieldNames = fileLines[0].split(',');
        const PropNames = FieldNames.slice(
          0,
          FieldNames.length - 1,
        );
        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord.slice(
            0,
            studentRecord.length - 1,
          );
          const field = studentRecord[studentRecord.length - 1];
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

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  countStudents(process.argv[2].toString()).then((output) => {
    response.send(['This is the list of our students', output].join('\n'));
  }).catch(() => {
    response.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(PORT, () => {
});

module.exports = app;
