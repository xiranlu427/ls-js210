function halvsies(arr) {
  const result = [];
  const midIndex = Math.ceil(arr.length / 2);
  result.push(arr.slice(0, midIndex));
  result.push(arr.slice(midIndex));

  return result;
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]