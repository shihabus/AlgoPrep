// INPUTS
// a matrix with 0 and 1,
// it need not be a square matrix

// OUTPUT
// length of the rivers

// 0 : land
// 1 : river

// a river can be connected, horizontally or vertically

// we create a isVisited array as same size as the input matrix
// we use it to track, if we have already visited the
// current element or not

const input = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];

function findRiverSize(matrix) {
  const sizes = [];
  const isVisited = matrix.map((row) =>
    row.map((value) => {
      return false;
    })
  );
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (isVisited[i][j]) {
        continue;
      }
      traverseNode(i, j, matrix, isVisited, sizes);
    }
  }
  return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
  let currentSizes = 0;
  const nodesToExplore = [[i, j]];
  // DFS
  while (nodesToExplore.length) {
    const currentNode = nodesToExplore.pop();
    const [i, j] = currentNode;

    // if already visited skip
    if (visited[i][j]) {
      continue;
    }

    // if not visited me mark it visited
    visited[i][j] = true;

    // if value is 0 we skip
    if (matrix[i][j] === 0) {
      continue;
    }

    currentSizes++;

    // non-zero we find the unvisited nodes to explore
    // vertically and horizontally
    const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
    for (const node of unvisitedNeighbors) {
      nodesToExplore.push(node);
    }
  }
  if (currentSizes > 0) {
    sizes.push(currentSizes);
  }
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
  const unvisitedNeighbors = [];

  // non-top row
  if (i > 0 && !visited[i - 1][j]) {
    unvisitedNeighbors.push([i - 1, j]);
  }

  // non-bottom row
  if (i < matrix.length - 1 && !visited[i + 1][j]) {
    unvisitedNeighbors.push([i + 1, j]);
  }

  // non-first column
  if (j > 0 && !visited[i][j - 1]) {
    unvisitedNeighbors.push([i, j - 1]);
  }

  // non-last column
  if (j < matrix[0].length - 1 && !visited[i][j + 1]) {
    unvisitedNeighbors.push([i, j + 1]);
  }
  return unvisitedNeighbors;
}

console.log("findRiverSize", findRiverSize(input));
