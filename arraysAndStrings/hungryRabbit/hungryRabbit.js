// A very hungry rabbit is placed in the center of a garden  represented by a rectangular N x M 2D matrix. The values of the matrix will represent numbers of carrots available to the rabbit in each square of the garden. if the garden does not have an exact center, the rabbit should start in the square closest to the center with the highest carrot count.
// On a given turn, the rabbit will eat the carrots available on the square that it is on, then move up, down, left or right, choosing the square . that has the most carrots. If there are no carrots left on any of the adjacent squares, the rabbit will go to sleep. You may assume that the rabbit will never have to choose between two squares with the same number of carrots. Write a function which takes a garden matrix and returns the number of carrots the rabbit eats. You may assume the matrix is rectangular with at least 1 row and 1 column, and that it is populated with non-negative integers.

// [
// [5, 7, 8, 6, 3],
// [0, 0, 7, 0, 4],
// [4, 6, 3, 4, 9],
// [3, 1, 0, 5, 8]
// ]
// Should return:
// 27

const countCarrots = (matrix) => {
  let [i, j] = getStartingPoint(matrix);
  let carrots = 0;
  while (i !== null && j !== null) {
    carrots += matrix[i][j];
    matrix[i][j] = 0;
    let [nextI, nextJ] = getMaxNeighbor(i, j, matrix);
    i = nextI;
    j = nextJ;
  }
  return carrots;
};

const getStartingPoint = (matrix) => {
  // come back to determine starting point when there is no exact center
  let rows = matrix.length;
  let cols = matrix[0].length;
  let i = Math.floor(matrix.length / 2);
  let j = Math.floor(matrix[0].length / 2);

  let startI = i;
  let startJ = j;

  if (rows % 2 === 0 && cols % 2 === 0) {
    let max = 0;
    for (let row = i; row >= i - 1; row--) {
      for (let col = j; col >= j - 1; col--) {
        if (matrix[row][col] > max) {
          max = matrix[row][col];
          startI = row;
          startJ = col;
        }
      }
    }
  } else if (rows % 2 === 0) {
    let max = 0;
    for (let row = i; row >= i - 1; row--) {
      if (matrix[row][j] > max) {
        max = matrix[row][j];
        startI = row;
      }
    }
  } else if (cols % 2 === 0) {
    let max = 0;
    for (let col = j; col >= j - 1; col--) {
      if (matrix[i][col] > max) {
        max = matrix[i][col];
        startJ = col;
      }
    }
  }

  return [startI, startJ];
};

const getMaxNeighbor = (i, j, matrix) => {
  // up [i-1][j]
  // down [i+1][j]
  // left [i][j-1]
  // left [i][j+1]
  let max = 0;
  let maxI = i;
  let maxJ = j;
  if (i > 0) {
    if (matrix[i - 1][j] > max) {
      max = matrix[i - 1][j];
      maxI = i - 1;
      maxJ = j;
    }
  }

  if (i < matrix.length - 1) {
    if (matrix[i + 1][j] > max) {
      max = matrix[i + 1][j];
      maxI = i + 1;
      maxJ = j;
    }
  }

  if (j < matrix[0].length - 1) {
    if (matrix[i][j + 1] > max) {
      max = matrix[i][j + 1];
      maxI = i;
      maxJ = j + 1;
    }
  }

  if (j > 0) {
    if (matrix[i][j - 1] > max) {
      max = matrix[i][j - 1];
      maxI = i;
      maxJ = j - 1;
    }
  }

  if (max === 0) return [null, null];
  return [maxI, maxJ];
};

module.exports = countCarrots;
