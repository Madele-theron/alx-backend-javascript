const fs = require('fs');

const countStudents = (fileName) => {
  if (!fs.existsSync(fileName)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(fileName).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileContents = fs
    .readFileSync(fileName, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const fieldNames = fileContents[0].split(',');
  const PropNames = fieldNames.slice(0, fieldNames.length - 1);
  const studentGroups = {};

  for (const line of fileContents.slice(1)) {
    const studentRecord = line.split(',');
    const PropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];
    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = [];
    }
    const studentEntries = PropNames
      .map((propName, i) => [propName, PropValues[i]]);
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }
  const totalStudents = Object
    .values(studentGroups)
    .reduce((previous, currrent) => (previous || []).length + currrent.length);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
