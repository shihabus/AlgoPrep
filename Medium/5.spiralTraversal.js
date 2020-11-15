// 1  2  3  4
// 12 13 14 5
// 11 16 15 6
// 10 9  8  7

const input = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

// 1  2  3
// 10 11 4
// 9  12 5
// 8  7  6

const input2 = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

const input3 = [[1, 2, 3, 4]];
const input4 = [[1], [2], [3], [4]];

// Iterative Solution

// O(n) Time | O(n) Space
// n is the total no.of elements in the array

function spiralTraversal(array) {
  // to store result
  const result = [];
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // top row
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
    }

    // last col
    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol]);
    }

    // bottom row
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      result.push(array[endRow][col]);
    }

    // first col
    for (let row = endRow - 1; row >= startRow + 1; row--) {
      if (startCol === endCol) break;
      result.push(array[row][startCol]);
    }

    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }

  return result;
}

// Recursive Solution
// O(n) Time | O(n) Space

function spiralTraversal(array) {
  const result = [];
  spiralFill(array, 0, array.length - 1, 0, array[0].length - 1, result);
  return result;
}

function spiralFill(array, startRow, endRow, startCol, endCol, result) {
  // stop condition
  if (startRow > endRow || startCol > endCol) return;

  // top row
  for (let col = startCol; col <= endCol; col++) {
    result.push(array[startRow][col]);
  }

  // last column
  for (let row = startRow + 1; row <= endRow; row++) {
    result.push(array[row][endCol]);
  }

  // bottom row
  for (let col = endCol - 1; col >= startCol; col--) {
    if (startRow === endRow) break; // handle one dimensional array
    result.push(array[endRow][col]);
  }

  // first col
  for (let row = endRow - 1; row >= startRow + 1; row--) {
    if (startCol === endCol) break; // handle one dimensional array
    result.push(array[row][startCol]);
  }

  spiralFill(array, startRow + 1, endRow - 1, startCol + 1, endCol - 1, result);
}

console.log(spiralTraversal(input4));
