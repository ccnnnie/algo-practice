/* Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Example 4:
Input: s = "abc3[cd]xyz"
Output: "abccdcdcdxyz" */

var decodeString = function(s) {
  let stack = [];
  let num = '';
  let str = '';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (isNaN(char) && char !== '[' && char !== ']') {
      str += char;
    } else if (char === '[') {
      stack.push(str);
      stack.push(num);
      str = '';
      num = '';
    } else if (char === ']') {
      num = stack.pop();
      const repeat = str;
      for (let i = 0; i < parseInt(num, 10) - 1; i++) {
        str += repeat;
      }
      str = stack.pop() + str;
      num = '';
    } else if (!isNaN(char) && char !== '[') {
      num += char;
    }
  }

  return str;
};
