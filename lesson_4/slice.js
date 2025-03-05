function push(arr, value) {
  let length = arr.length;
  arr[length] = value;
  return arr;
}

function slice(arr, start, end) {
  let newArr = [];
  for (let index = start; index < end; index += 1) {
    push(newArr, arr[index]);
  }

  return newArr;
}

slice([1, 2, 3, 4, 5], 0, 2);                      // [ 1, 2 ]
slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);  // [ 'b', 'c' ]