function multiplesOfThreeAndFive(num) {
  for (let currentNumber = 1; currentNumber <= 100; currentNumber += 1) {
    if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
      console.log(currentNumber + "!");
    } else if (currentNumber % 3 === 0 || currentNumber % 5 === 0) {
      console.log(String(currentNumber))
    }
  }
}

multiplesOfThreeAndFive();

// output on console
// '3'
// '5'
// '6'
// '9'
// '10'
// '12'
// '15!'
// … remainder of output omitted for brevity
