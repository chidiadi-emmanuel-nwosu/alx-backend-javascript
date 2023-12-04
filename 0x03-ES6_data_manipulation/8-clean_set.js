export default function cleanSet(set, startString) {
  if (!set || !startString || !startString.length) return '';

  const stringSet = [...set].filter((element) => typeof element === 'string');

  const cleanedString = stringSet
    .filter((element) => element.startsWith(startString))
    .map((element) => element.slice(startString.length))
    .join('-');

  return cleanedString;
}
