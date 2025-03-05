function unshift(arr, value) {
  arr.length += 1;
  for (let index = arr.length - 1; index > 0; index -= 1) {
    arr[index] = arr[index - 1];
  }
  arr[0] = value;
  return arr;
}

let count = [1, 2, 3];
unshift(count, 0);      // 4
count;                  // [ 0, 1, 2, 3 ]