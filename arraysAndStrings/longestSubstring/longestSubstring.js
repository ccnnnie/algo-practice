// write function that takes in a string and returns the length of the longest substring of distinct characters.

// this solution is O(n^2) time
// const longestSubstring = (string) => {
//   if (string.length < 2) return string.length;

//   let i = 0;
//   let j = 0;
//   let chars = new Set();
//   let maxLength = 0;

//   while (j < string.length) {
//     if (!chars.has(string[j])) {
//       chars.add(string[j]);
//       j++;
//       maxLength = Math.max(maxLength, chars.size);
//     } else {
//       chars.clear();
//       i++;
//       j = i;
//     }
//   }
//   return maxLength;
// };

module.exports = longestSubstring;
