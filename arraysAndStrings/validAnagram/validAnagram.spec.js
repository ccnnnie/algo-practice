const validAnagram = require('./validAnagram');

describe('validAnagram', () => {
  test('returns undefined if input string is empty', () => {
    expect(validAnagram('', 'awsome')).toBeUndefined();
    expect(validAnagram('getaway', '')).toBeUndefined();
    expect(validAnagram('', '')).toBeUndefined();
  });

  test('returns true is second string if anagram of first', () => {
    expect(validAnagram('cinema', 'iceman')).toBe(true);
    expect(validAnagram('listen', 'silent')).toBe(true);
    expect(validAnagram('anagram', 'nag a ram')).toBe(true);
    expect(validAnagram('dirty room', 'dormitory')).toBe(true);
  });

  test('it ignores spaces', () => {
    expect(validAnagram('anagram', 'nag a ram')).toBe(true);
    expect(validAnagram('dirty room', 'dormitory')).toBe(true);
  });

  test('returns false if strings are not anagrams', () => {
    expect(validAnagram('awesome', 'awsome')).toBe(false);
    expect(validAnagram('getaway', 'yaweetg')).toBe(false);
    expect(validAnagram('car', 'rat')).toBe(false);
  });
});
