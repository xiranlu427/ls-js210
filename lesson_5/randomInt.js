function randomInt(min, max) {
  if (min === max) {
    return min;
  } else if (min > max) {
    let temp = min;
    min = max;
    max = temp;
  }

  let diff = max - min;

  return min + Math.round(Math.random() * diff);
}