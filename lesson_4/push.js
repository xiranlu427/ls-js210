function push(arr, value) {
  let length = arr.length;
  arr[length] = value;
  return arr;
}

let count = [0, 1, 2];
push(count, 3);         // 4
count;                  // [ 0, 1, 2, 3 ]