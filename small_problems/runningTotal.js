function runningTotal2(nums) {
  let result = [];
  let runningTotal = 0;

  for (let index = 0; index < nums.length; index += 1) {
    runningTotal += nums[index];
    result.push(runningTotal);
  }

  return result;
}

function runningTotal(nums) {
  let runningSum = 0;
  return nums.map((num) => {
    runningSum += num;
    return runningSum;
  });
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []