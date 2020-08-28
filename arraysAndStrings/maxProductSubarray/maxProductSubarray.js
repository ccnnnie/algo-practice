// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product and return thr largest product.

const maxProduct = (nums) => {
  let currMax = nums[0];
  let currMin = nums[0];
  let prevMin = nums[0];
  let prevMax = nums[0];
  let maxProd = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(prevMax * nums[i], prevMin * nums[i], nums[i]);
    currMin = Math.min(prevMax * nums[i], prevMin * nums[i], nums[i]);

    maxProd = Math.max(currMax, maxProd);
    prevMin = currMin;
    prevMax = currMax;
  }

  return maxProd;
};
