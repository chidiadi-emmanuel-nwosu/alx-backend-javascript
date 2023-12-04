export default function createInt8TypedArray(length, position, value) {
  if (position > length - 1) throw new Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const data = new DataView(buffer);
  data.setInt8(position, value);
  return data;
}
