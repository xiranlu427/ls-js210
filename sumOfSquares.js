function sumOfSquares(arr) {
  return arr.reduce((acc, el) => acc += el * el, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83