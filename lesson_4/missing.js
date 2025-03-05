function missing(arr) {
  let min = arr[0];
  let max = arr[arr.length - 1];
  let missingNums = [];

  for (let num = min + 1; num < max; num += 1) {
    if (arr.indexOf(num) === -1) {
      missingNums.push(num);
    }
  }

  return missingNums;
}

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []