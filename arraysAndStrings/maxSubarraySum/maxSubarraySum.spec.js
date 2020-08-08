const maxSubarraySum = require('./maxSubarraySum');

describe('maxSubarraySum', () => {
  test('can find the max sum of consecutive numbers', () => {
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
    expect(maxSubarraySum([4, 2, 1, 10, 6], 1)).toBe(10);
    expect(maxSubarraySum([21, 4, 2, 1, 10, 6], 1)).toBe(21);
    expect(maxSubarraySum([21, 4, 2, 1, 10, 30], 1)).toBe(30);
    expect(maxSubarraySum([21, 4, -2, 1, -10, 6], 3)).toBe(23);
  });

  test('returns null if n is larger than array length', () => {
    expect(maxSubarraySum([1, 2, 5], 4)).toBeNull();
    expect(maxSubarraySum([1], 2)).toBeNull();
  });

  test('returns null if array is empty or n is 0', () => {
    expect(maxSubarraySum([], 4)).toBeNull();
    expect(maxSubarraySum([3, 6, 23, 8, -2], 0)).toBeNull();
    expect(maxSubarraySum([], 0)).toBeNull();
  });
});
