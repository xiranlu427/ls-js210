function concat(arr1, arr2) {
  let newArr = [];
  for (let index = 0; index < arr1.length; index += 1) {
    newArr.push(arr1[index]);
  }

  for (let index = 0; index < arr2.length; index += 1) {
    newArr.push(arr2[index]);
  }

  return newArr;
}

concat([1, 2, 3], [4, 5, 6]);       // [ 1, 2, 3, 4, 5, 6 ]