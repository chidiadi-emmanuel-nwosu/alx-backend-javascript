export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const isValidEndpoint = endpoint
    && typeof endpoint === 'object'
    && Object.keys(endpoint).length === 2
    && 'protocol' in endpoint
    && 'name' in endpoint;

  if (isValidEndpoint) {
    const queryCount = weakMap.get(endpoint) || 0;
    if (queryCount >= 5) throw new Error('Endpoint load is high');
    weakMap.set(endpoint, queryCount + 1);
  }
}
