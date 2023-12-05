export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const isValidEndpoint = endpoint
    && typeof endpoint === 'object'
    && Object.keys(endpoint).length === 2
    && 'protocol' in endpoint
    && 'name' in endpoint;

  if (isValidEndpoint) {
    if (!weakMap.has(endpoint)) {
      weakMap.set(endpoint, 1);
    } else if (weakMap.get(endpoint) >= 5) {
      throw new Error('Endpoint load is high');
    } else {
      weakMap.set(endpoint, weakMap.get(endpoint) + 1);
    }
  }
}
