// INPUT
// An array of integers

// OUTPUT
// Powerset of the given array

// Powerset is a set of all the possible subsets

// INPUT: [1,2,3]
// OUTPUT: [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]

const input = [1, 2, 3];

function getPowerSet(array) {
  const subsets = [[]];
  for (const elem of array) {
    const length = subsets.length;
    for (let i = 0; i < length; i++) {
      const currentSubset = subsets[i];
      subsets.push(currentSubset.concat(elem));
    }
  }
  return subsets;
}

console.log(getPowerSet(input));
