export default function cleanSet(set, startString) {
  if (!startString || !startString.length) return '';

  const cleanedString = [...set]
    .filter((element) => typeof element === 'string' && element.startsWith(startString))
    .map((element) => element.slice(startString.length))
    .join('-');

  return cleanedString;
}
