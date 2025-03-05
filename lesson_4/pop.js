function pop(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let popped = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return popped;
}

let count = [1, 2, 3];
pop(count);             // 3
count;                  // [ 1, 2 ]