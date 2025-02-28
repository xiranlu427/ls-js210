function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log("Input must be an integer")
    return;
  }
  
  result = (num % 2 === 0) ? 'even' : 'odd';
  console.log(result);
}

evenOrOdd(31.2);
evenOrOdd(91);