let rlSync = require('readline-sync');

let int = parseInt(
  rlSync.question('Please enter an integer greater than 0: '),
   10
  );
let option = rlSync.question('Enter "s" to compute the sum, or "p" to compute \
the product: ', {limit: ['s', 'p'], limitMessage: 'Sorry, "$<lastInput>" is \
not a valid option.'});

function sum(int) {
  let result = 0;
  for (let num = 1; num <= int; num += 1) {
    result += num;
  }

  return result;
}

function product(int) {
  let result = 1;
  for (let num = 1; num <= int; num += 1) {
    result *= num;
  }

  return result;
}

if (option === 's') {
  let result = sum(int);
  console.log(`The sum of the integers between 1 and ${int} is ${result}.`)
} else {
  let result = product(int);
  console.log(`The product of the integers between 1 and ${int} is ${result}.`)
}


// when input is an array
const sum2 = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
const product2 = (arr) => arr.reduce((acc, curr) => acc * curr, 1);
