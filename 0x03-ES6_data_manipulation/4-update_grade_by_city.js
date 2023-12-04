export default function updateStudentGradeByCity(array, city, newGrades) {
  const updateStudent = array
    .filter((student) => student.location === city)
    .map((student) => {
      const matchGrade = newGrades.find((grade) => student.id === grade.studentId);
      if (matchGrade) return { ...student, grade: matchGrade.grade };
      return { ...student, grade: 'N/A' };
    });

  return updateStudent;
}
