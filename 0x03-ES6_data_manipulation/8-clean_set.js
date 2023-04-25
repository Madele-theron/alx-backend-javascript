export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0) {
    return '';
  }
  let results = '';
  set.forEach((value) => {
    if (value && value.startsWith(startString)) {
      const restOfValue = value.substring(startString.length);
      results += `${restOfValue}-`;
    }
  });
  return results.slice(0, -1);
}
