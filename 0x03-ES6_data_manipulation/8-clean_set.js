export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let results = '';
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      const restOfValue = value.substring(startString.length);
      results += `${restOfValue}-`;
    }
  });
  return results.slice(0, -1);
}
