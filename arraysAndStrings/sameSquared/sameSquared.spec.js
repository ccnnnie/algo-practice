const sameSquared = require('./sameSquared');

describe('sameSquared', () => {
  test('returns true if every value of arr1 has its square in arr2', () => {
    expect(sameSquared([1, 2, 3], [1, 4, 9])).toBe(true);
    expect(sameSquared([1, 2, 3], [4, 1, 9])).toBe(true);
    expect(sameSquared([5, 10, 9], [81, 25, 100])).toBe(true);
  });

  test('returns false if frequencies do not match', () => {
    expect(sameSquared([1, 2, 1], [1, 4])).toBe(false);
    expect(sameSquared([1, 2, 1], [4, 1, 4])).toBe(false);
    expect(sameSquared([5, 10, 9, 9], [81, 25, 100, 100, 25, 25])).toBe(false);
  });
});
