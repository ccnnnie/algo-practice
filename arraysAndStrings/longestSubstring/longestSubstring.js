// write function that takes in a string and returns the length of the longest substring of distinct characters.

// O(n) time complexity
function findLongestSubstring(str) {
  let longestLength = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      // set new start of window to be index at seen[char] if it is higher than current start
      // this is because there may be other repeated characters between start and i
      // start may be at a highter index than the first iteration of the character you are looking at (ex. "thecactus")
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longestLength = Math.max(longestLength, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longestLength;
}

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
