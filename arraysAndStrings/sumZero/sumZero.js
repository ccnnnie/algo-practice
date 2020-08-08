// write a function that accepts a sorted array.
// the function should find the first pair of numbers where the sum is zero.
// return a sorted array of both numbers or undefined if a pair does not exist.

// first pair means the first number has the smallest index in the array

const sumZero = (arr) => {
  if (arr.length < 2) return undefined;

  let i = 0; // left pointer
  let j = arr.length - 1; // right pointer

  while (i < j) {
    if (arr[i] > 0 && arr[j] > 0) return undefined;
    if (arr[i] < 0 && arr[j] < 0) return undefined;
    let sum = arr[j] + arr[i];
    if (sum === 0) {
      return [arr[i], arr[j]];
    } else if (sum > 0) {
      j--;
    } else {
      i++;
    }
  }
  return undefined;
};

module.exports = sumZero;
