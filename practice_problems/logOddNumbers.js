/*
  Write a function that takes a positive integer as an argument, and logs all
  the odd numbers from 1 to the passed in number (inclusive). All numbers
  should be logged on separate lines.
*/


function logOddNumbers(num) {
  for (let currentNumber = 1; currentNumber <= num; currentNumber += 1) {
    if (currentNumber % 2 === 1) {
      console.log(currentNumber);
    }
  }
}

function logOddNumbers2(num) {
  for (let currentNumber = 1; currentNumber <= num; currentNumber += 2) {
    console.log(currentNumber);
  }
}

function logOddNumbers3(num) {
  for (let currentNumber = 1; currentNumber <= num; currentNumber += 1) {
    if (currentNumber % 2 === 0) {
      continue;
    }
    console.log(currentNumber);
  }
}

logOddNumbers3(19);

// output on console
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19