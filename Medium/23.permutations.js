// INPUTS
// An array of distinct integers or characters

// OUTPUT
// All the permutations of the given array

const input = [1, 2, 3];

function permutationsHelper(array, currentPermutation, permutations) {
  if (!array.length && currentPermutation.length) {
    permutations.push(currentPermutation);
  } else {
    for (let idx = 0; idx < array.length; idx++) {
      const newArray = array.slice(0, idx).concat(array.slice(idx + 1));
      const newPermutation = currentPermutation.concat([array[idx]]);
      permutationsHelper(newArray, newPermutation, permutations);
    }
  }
}

function getPermutations(arr) {
  const permutations = [];
  permutationsHelper(arr, [], permutations);
  return permutations;
}

console.log(getPermutations(input));
