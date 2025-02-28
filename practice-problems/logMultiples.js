function logMultiples(number) {
  for (let num = 100; num >= number; num -= 1) {
    if (num % number === 0 && num % 2 === 1) {
      console.log(num)
    }
  }
}


function logMultiples2(number) {
  let max = Math.floor(100 / number) * number;

  for (let num = max; num > 0; num -= number) {
    if (num % 2 === 1) {
      console.log(num)
    }
  }
}


logMultiples2(17);
// output (5x, 3x and 1x)
// 85
// 51
// 17

logMultiples2(21);
// output (3x and 1x)
// 63
// 21