function lastIndexOf(arr, value) {
  for (let index = arr.length - 1; index >= 0; index -= 1) {
    if (arr[index] === value) {
      return index;
    }
  }

  return -1;
}

lastIndexOf([1, 2, 3, 3], 3);     // 3
lastIndexOf([1, 2, 3], 4);        // -1