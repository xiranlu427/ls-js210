function push(arr, value) {
  let length = arr.length;
  arr[length] = value;
  return arr;
}

function splice(arr, start, count) {
  let removed = [];
  for (let index = start; index < arr.length; index += 1) {
    if (index < start + count) {
      push(removed, arr[index]);
    }
  }

  arr[index] = arr[index + count];

  arr.length -= count;
  return removed;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
splice(count, 2, 5);                   // [ 3, 4, 5, 6, 7 ]
count;                                 // [ 1, 2, 8 ]