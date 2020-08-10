// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

var spiralOrder = function(matrix) {
  let result = [];

  if (!matrix.length || !matrix[0].length) return result;

  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;
  const totalNums = matrix.length * matrix[0].length;

  while (result.length < totalNums) {
    for (let j = colStart; j <= colEnd; j++) {
      if (result.length < totalNums) {
        result.push(matrix[rowStart][j]);
      }
    }

    rowStart += 1;

    for (let i = rowStart; i <= rowEnd; i++) {
      if (result.length < totalNums) {
        result.push(matrix[i][colEnd]);
      }
    }

    colEnd -= 1;

    for (let j = colEnd; j >= colStart; j--) {
      if (result.length < totalNums) {
        result.push(matrix[rowEnd][j]);
      }
    }

    rowEnd -= 1;

    for (let i = rowEnd; i >= rowStart; i--) {
      if (result.length < totalNums) {
        result.push(matrix[i][colStart]);
      }
    }

    colStart += 1;
  }

  return result;
};

//  [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
//  ]
