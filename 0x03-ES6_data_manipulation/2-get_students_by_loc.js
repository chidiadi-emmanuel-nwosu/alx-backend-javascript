export default function getStudentsByLocation(array, city) {
  if (Array.isArray(city)) return [];
  return array.filter((e) => e.location === city);
}
