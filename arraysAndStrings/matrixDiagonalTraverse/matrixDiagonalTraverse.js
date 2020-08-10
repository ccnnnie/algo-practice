// Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]

// Output:  [1,2,4,7,5,3,6,8,9]

// num of diagonals = num of cols + num of rows - 1
var findDiagonalOrder = function(matrix) {
  let result = [];

  if (!matrix.length || !matrix[0].length) return result;

  let rows = matrix.length;
  let cols = matrix[0].length;

  let numDiagonals = rows + cols - 1;
  for (let d = 0; d <= numDiagonals; d++) {
    let diagonal = [];
    let j = d < cols ? d : cols - 1;
    let i = d < cols ? 0 : d - cols + 1;
    while (j >= 0 && j < cols && i >= 0 && i < rows) {
      diagonal.push(matrix[i][j]);
      i = i + 1;
      j = j - 1;
    }
    if (d % 2 === 0) {
      diagonal.reverse();
    }
    result.push(...diagonal);
  }
  return result;
};
