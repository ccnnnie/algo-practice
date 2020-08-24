const longestSubstring = require('./longestSubstring');

describe('longestSubstring', () => {
  test('can return length of longest substring of distinct characters', () => {
    expect(longestSubstring('abcadefab')).toBe(6);
    expect(longestSubstring('thecatinthehat')).toBe(7);
    expect(longestSubstring('thisishowwedoit')).toBe(6);
    expect(longestSubstring('aaaaaa')).toBe(1);
    expect(longestSubstring('abcdef')).toBe(6);
    expect(longestSubstring('c')).toBe(1);
  });

  test('returns 0 if no distinct characters in string', () => {
    expect(longestSubstring('')).toBe(0);
  });
});
