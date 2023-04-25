export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const newStudentList = studentList.map((student) => {
    const gradeObj = newGrades.filter((grade) => grade.studentId === student.id)[0];
    const grade = gradeObj ? gradeObj.grade : 'N/A';
    return { ...student, grade };
  });
  return newStudentList.filter((student) => student.location === city);
}
