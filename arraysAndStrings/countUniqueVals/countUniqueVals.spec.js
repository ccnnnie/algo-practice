const countUniqueVals = require('./countUniqueVals');

describe('countUniqueVals', () => {
  test('can count the unique values in array', () => {
    expect(countUniqueVals([1])).toBe(1);
    expect(countUniqueVals([1, 1, 2, 2, 5, 5, 8])).toBe(4);
    expect(countUniqueVals([1, 2, 4, 6, 10])).toBe(5);
    expect(countUniqueVals([-21, -10, -10, -2, 4, 1, 6, 12])).toBe(7);
    expect(countUniqueVals([1, 1, 2, 2, 5, 5, 5])).toBe(3);
    expect(countUniqueVals([7, 7, 7])).toBe(1);
    expect(countUniqueVals([-7, 7, 7])).toBe(2);
    expect(countUniqueVals([5, 7, 7, 7])).toBe(2);
  });

  test('returns 0 if there are no unique values', () => {
    expect(countUniqueVals([])).toBe(0);
  });
});
