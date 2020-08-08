// write a function which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array.

// solution using Set - can work with unsorted array
// space complexity O(n) where n is length of array
// time complexity O(n) where n is length of array
// const countUniqueVals = (arr) => {
//   let unique = new Set(arr);
//   return unique.size;
// };

// solution using pointers - only works with sorted array
// space complexity O(1)
// time complexity O(n) where n is length of array
const countUniqueVals = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;
  let j = 1;
  let count = 1;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      count++;
      i = j;
      j++;
    }
  }
  return count;
};

module.exports = countUniqueVals;
