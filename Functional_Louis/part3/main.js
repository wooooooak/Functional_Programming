function map(arr, fn) {
  const len = arr.length,
    result = new Array(len);
  for (let idx = 0; idx < len; ++idx) {
    result[idx] = fn(arr[idx], idx, arr);
  }
  return result;
}
