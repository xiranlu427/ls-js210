// less ideal version
function union2(arr1, arr2) {
  const combined = [];

  for (let index = 0; index < arr1.length; index += 1) {
    if (!combined.includes(arr1[index])) {
      combined.push(arr1[index]);
    }
  }

  for (let index = 0; index < arr2.length; index += 1) {
    if (!combined.includes(arr2[index])) {
      combined.push(arr2[index]);
    }
  }

  return combined;
}

// optimized version
function copyUniqueValuesTo(target, source) {
  source.forEach((value) => {
    if (!target.includes(value)) {
      target.push(value);
    }
  });
}

function union(...args) {
  const combined = [];

  args.forEach((arr) => copyUniqueValuesTo(combined, arr));

  return combined;
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]