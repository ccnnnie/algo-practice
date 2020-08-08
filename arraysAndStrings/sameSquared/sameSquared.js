// Write function that accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of the values must be the same.

// use hashmap/dictionary to look up frequency of squares

const sameSquared = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let count1 = {};
  let count2 = {};

  for (let num of arr1) {
    count1[num ** 2] = (count1[num ** 2] || 0) + 1;
  }

  for (let num of arr2) {
    count2[num] = (count2[num] || 0) + 1;
  }

  for (let num in count1) {
    if (count1[num] !== count2[num]) return false;
  }

  return true;
};

module.exports = sameSquared;
