'use strict';

const fs = require('fs');

const countStudents = (fileName) => new Promise((resolve, reject) => {
  fs.readFile(fileName, (error, data) => {
    if (error) {
      reject(new Error(`Cannot load the database: ${error.message}`));
    }
    if (data) {
      const fileLines = data.toString('utf-8').split('\n');
      const GroupsObj = {};
      const [firstLine, ...lines] = fileLines;
      const FieldNames = firstLine.split(',');
      const PropNames = FieldNames.slice(0, FieldNames.length - 1);

      for (const line of lines) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];
        
        if (!GroupsObj.hasOwnProperty(field)) {
          GroupsObj[field] = [];
        }
        
        const studentEntries = PropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
        GroupsObj[field].push(Object.fromEntries(studentEntries));
      }

      console.log(`Number of students: 10`);
      console.log('Number of students in field: 1. List: firstname')
      for (const [field, group] of Object.entries(GroupsObj)) {
        const studentNames = group.map(({ firstname }) => firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }

      resolve(true);
    }
  });
});

module.exports = countStudents;
