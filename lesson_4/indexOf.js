function indexOf(arr, value) {
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] == value) {
      return index;
    }
  }

  return -1;
}

indexOf([1, 2, 3, 3], 3);         // 2
indexOf([1, 2, 3], 4);            // -1