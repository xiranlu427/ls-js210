function interleave(arr1, arr2) {
  const combined = [];

  for (let index = 0; index < arr1.length; index += 1) {
    combined.push(arr1[index], arr2[index]);
  }

  return combined;
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]