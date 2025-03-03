function gcd(num1, num2) {
  let min = (num1 > num2) ? num2 : num1;
  for (let number = min; number >= 1; number -= 1) {
    if ((num1 % number === 0) && (num2 % number === 0)) {
      return number;
    }
  }
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1