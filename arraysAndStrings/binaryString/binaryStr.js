/* Given a string containing of ‘0’, ‘1’ and ‘?’ wildcard characters, generate all binary strings that can be formed by replacing each wildcard character by ‘0’ or ‘1’.
Example :

Input str = "1??0?101"
Output:
        10000101
        10001101
        10100101
        10101101
        11000101
        11001101
        11100101
        11101101 */

const binaryStr = (str) => {
  const results = [];
  getBinaryStrings(str, 0, '', results);
  return results;
};

const getBinaryStrings = (str, i, currStr, allStrings) => {
  if (i >= str.length) {
    allStrings.push(currStr);
    return;
  }
  if (str[i] !== '?') {
    currStr += str[i];
    getBinaryStrings(str, i + 1, currStr, allStrings);
  } else {
    getBinaryStrings(str, i + 1, currStr + 0, allStrings);
    getBinaryStrings(str, i + 1, currStr + 1, allStrings);
  }
};

console.log(binaryStr('1??0?101'));
console.log(binaryStr('1??1'));
