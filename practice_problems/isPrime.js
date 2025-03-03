function isPrime(num) {
  if (num <= 1) {
    return false;
  } else {
    for (let number = 2; number <= Math.sqrt(num); number += 1) {
      if (num % number === 0) {
        return false;
      }
    }
    return true;
  }
}


isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false