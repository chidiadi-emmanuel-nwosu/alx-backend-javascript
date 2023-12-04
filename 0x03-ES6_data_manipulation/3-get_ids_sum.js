export default function getStudentIdsSum(array) {
  return array.reduce((acc, cur) => acc + cur.id, 0);
}
