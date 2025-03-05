function shift(arr) {
  let shifted = arr[0];

  if (arr.length === 0) {
    return undefined;
  }
  
  for (let index = 0; index < arr.length - 1; index += 1) {
    arr[index] = arr[index + 1];
  }
  arr.length -= 1;
  return shifted;
}

let count = [1, 2, 3];
shift(count);           // 1
count;                  // [ 2, 3 ]