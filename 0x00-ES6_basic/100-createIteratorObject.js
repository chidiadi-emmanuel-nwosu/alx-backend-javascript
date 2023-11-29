export default function createIteratorObject(report) {
  const array = Object.values(report.allEmployees);
  return [].concat(...array);
}
