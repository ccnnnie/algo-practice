const countCarrots = require('./hungryRabbit');

describe('Hungry Rabbit', () => {
  test('finds the path with the most carrots', () => {
    const grid = [
      [5, 7, 8, 6, 3],
      [0, 0, 7, 0, 4],
      [4, 6, 3, 4, 9],
      [3, 1, 0, 5, 8],
    ];

    expect(countCarrots(grid)).toBe(27);
  });

  test('finds the path with the most carrots in a grid without exact center', () => {
    const grid = [
      [7, 8, 6, 3],
      [0, 7, 10, 4],
      [6, 11, 9, 9],
      [1, 0, 5, 8],
    ];

    expect(countCarrots(grid)).toBe(52);
  });
});
