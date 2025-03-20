function isPalindrome(str) {
  let midIndex = parseInt(str.length / 2, 10);
  for (let index = 0; index <= midIndex; index += 1) {
    if (str[index] !== str[str.length - 1 - index]) {
      return false;
    }
  }

  return true;
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true


function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}

function isRealPalindrome(str) {
  str = str.toLowerCase();
  let newStr = '';

  for (let index = 0; index < str.length; index += 1) {
    if (isLetter(str[index]) || isNumber(str[index])) {
      newStr += str[index];
    }
  }
  return isPalindrome(newStr);

}
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false