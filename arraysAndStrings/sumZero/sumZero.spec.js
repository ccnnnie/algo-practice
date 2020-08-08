const sumZero = require('./sumZero');

describe('sumZero', () => {
  test('returns undefined if input array length is less than 2', () => {
    expect(sumZero([6])).toBeUndefined();
    expect(sumZero([0])).toBeUndefined();
    expect(sumZero([])).toBeUndefined();
  });

  test('can find pair of numbers that equal 0', () => {
    expect(sumZero([-5, 0, 3, 5, 7, 9])).toEqual([-5, 5]);
    expect(sumZero([-3, 1, 3, 4, 5, 7, 6])).toEqual([-3, 3]);
    expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
    expect(sumZero([-20, -10, -7, 0, 0, 1, 3, 15, 17])).toEqual([0, 0]);
  });

  test('can find the first pair of numbers that equal 0', () => {
    expect(sumZero([-4, -3, 1, 3, 4, 5, 7, 6])).toEqual([-4, 4]);
    expect(sumZero([-30, -15, -6, -2, 6, 30])).toEqual([-30, 30]);
  });

  test('returns undefined if no numbers in array add up to 0', () => {
    expect(sumZero([0, 8])).toBeUndefined();
    expect(sumZero([0, 3, 4, 5, 6, 10])).toBeUndefined();
    expect(sumZero([-43, -21, -6, 9, 31, 245])).toBeUndefined();
    expect(sumZero([-43, -21, -6, -9, -31, -245])).toBeUndefined();
  });
});
