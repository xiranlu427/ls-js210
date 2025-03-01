function trim_head(str) {
  let head_trimmed = '';
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] == ' ') {
      if (head_trimmed.length > 0) {
        head_trimmed += str[index];
      }
    } else {
      head_trimmed += str[index];
    }
  }
  return head_trimmed;
}

function trim_tail(head_trimmed) {
  let trimmed = '';
  for (let index = head_trimmed.length - 1; index >= 0; index -= 1) {
    if (head_trimmed[index] == ' ') {
      if (trimmed.length > 0) {
        trimmed = head_trimmed[index] + trimmed;
      }
    } else {
      trimmed = head_trimmed[index] + trimmed;
    }
  }

  return trimmed;
}

function trim(str) {
  head_trimmed = trim_head(str);
  trimmed = trim_tail(head_trimmed);
  return trimmed;
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""