const quickSort = require('./quickSort');

describe('Quick Sort', () => {
  test('sorts array', () => {
    const array1 = [9, 5, 1, 7, 2, 6, 3, 8, 4];
    expect(quickSort(array1)).toEqual(array1.sort((a, b) => a - b));

    const array2 = [
      0,
      23,
      -123,
      302,
      67,
      -9,
      2049,
      -327,
      389,
      2,
      302,
      87,
      9,
      -9,
    ];
    expect(quickSort(array2)).toEqual(array2.sort((a, b) => a - b));
  });
});
