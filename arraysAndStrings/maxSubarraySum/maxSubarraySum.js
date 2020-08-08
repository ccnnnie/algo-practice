// write a function that accepts an array of integers and a number called n
// the function should calculate the max sum of n consecutive numbers

// sliding window pattern
// create a window to keep track of a subset of data in an array or string
// on a certain condition, the window will increase in size or close (and then a new window is created)

const maxSubarraySum = (arr, n) => {
  if (!arr.length) return null;
  if (n > arr.length || n <= 0) return null;

  let start = 0;
  let end = n - 1;
  let maxSum = 0;
  let currSum = 0;

  for (let i = 0; i <= end; i++) {
    currSum += arr[i];
  }

  maxSum = currSum;

  while (end + 1 < arr.length) {
    currSum = currSum + arr[end + 1] - arr[start];
    if (currSum > maxSum) {
      maxSum = currSum;
    }
    end++;
    start++;
  }

  return maxSum;
};

module.exports = maxSubarraySum;
