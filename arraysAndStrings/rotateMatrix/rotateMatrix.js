// rotate matrix in place

function rotateMatrix(matrix) {
  // n = matrix.length
  // [0, 0] = [i, j] = 1
  // [0, 2] = [j, n - 1 - i] = 3
  // [2, 2] = [n - 1 - i, n - 1 - j] = 9
  // [2, 0] = [n - 1 - j, i] = 7

  // [0, 1] = [i, j] = 2
  // [1, 2] = [j, n - 1 - i] = 6
  // [2, 1] = [n - 1 - i, n - 1 - j] = 8
  // [1, 0] = [n - 1 - j, i] = 4
  const n = matrix.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = i; j < n - 1 - i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
      matrix[j][n - 1 - i] = temp;
    }
  }
}
