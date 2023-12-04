export default function cleanSet(set, startString) {
  if (!set || !startString || !startString.length) return '';
  return [...set]
    .filter((element) => element.startsWith(startString))
    .map((element) => element.slice(startString.length))
    .join('-');
}
