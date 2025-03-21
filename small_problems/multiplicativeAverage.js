function showMultiplicativeAverage(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i += 1) {
    product *= arr[i];
  }

  return (product / arr.length).toFixed(3);

}
showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"