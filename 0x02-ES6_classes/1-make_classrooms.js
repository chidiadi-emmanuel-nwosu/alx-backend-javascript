import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const capacities = [19, 20, 34];
  return capacities.map((capacity) => new ClassRoom(capacity));
}
