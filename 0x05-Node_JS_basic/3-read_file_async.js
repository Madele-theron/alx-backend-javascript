const fs = require('fs');

const countStudents = (FileName) => new Promise((resolve, reject) => {
  fs.readFile(FileName, (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const fileLines = data
        .toString('utf-8')
        .split('\n');
      const Groups = {};
      const FieldNames = fileLines[0].split(',');
      const PropNames = FieldNames
        .slice(0, FieldNames.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord
          .slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(Groups).includes(field)) {
          Groups[field] = [];
        }
        const studentEntries = PropNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        Groups[field].push(Object.fromEntries(studentEntries));
      }

      const totalStudents = Object
        .values(Groups)
        .reduce((previous, current) => (previous || []).length + current.length);
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(Groups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;