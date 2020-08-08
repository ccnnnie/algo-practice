// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another.
// ex. cinema / iceman

// use hashmap/dictionary to look up frequency of letters

const validAnagram = (str1, str2) => {
  if (!str1 || !str2) return undefined;

  let charCount1 = {};
  let charCount2 = {};

  for (let char of str1) {
    if (!charCount1[char]) charCount1[char] = 1;
    else charCount1[char]++;
  }

  for (let char of str2) {
    if (!charCount2[char]) charCount2[char] = 1;
    else charCount2[char]++;
  }

  for (let key in charCount1) {
    if (key !== ' ') {
      if (charCount1[key] !== charCount2[key]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = validAnagram;
