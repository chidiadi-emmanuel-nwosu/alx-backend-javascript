export default function hasValuesFromArray(set, array) {
  return array.every((element) => Array.from(set).includes(element));
}
