function join(arr, separator) {
  let result = '';
  for (let index = 0; index < arr.length - 1; index += 1) {
    result += String(arr[index]);

    if (index < arr.length - 1) {
      result += separator;
    }
    
  }

  return result;
}

join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
join([1, 2, 3], ' and ');                 // '1 and 2 and 3'