export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const newDataView = new DataView(buffer);

  if (position >= length) {
    throw new Error('Position outside range');
  }
  newDataView.setInt8(position, value);

  return newDataView;
}
