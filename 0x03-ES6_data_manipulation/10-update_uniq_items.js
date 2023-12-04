export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  map.forEach((value, key, map) => value === 1 && map.set(key, 100));
}
