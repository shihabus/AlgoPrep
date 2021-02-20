// given an array of numbers
// find the biggest sum of non-adjacent numbers

const input = [7, 10, 12, 7, 9, 14];

// maxSums[0] = 7
// maxSums[1] = max(7,10 ✅)=10
// maxSums[2] = max(12+7 ✅,7+10)=19
// maxSums[3] = max(7+7,7+10,7+12 ✅)=19
// maxSums[4] = max(9+7,9+10,9+12,9+12+7 ✅,7+7,7+10,12+7)=28
// maxSums[5] = max(14+7,....,14+7+19,9+12+7,14+12+7 ✅)=33 ✅

// ----- 1 ------

// we can actually derive a pattern from the above results as,
// maxSums[i] = max(maxSums[i-1],maxSums[i-2]+input[i])
// biggest is maxSums[-1], which is the last element in the result array

// we create a result array which has same length as the input array, let us say maxSums
// for each input[i] we add the corresponding largest sum at maxSums[i]

// Time O(n) : since we traverse the entire array
// Space O(n) : we create an auxiliary array that with size of input array
function maxSubsetSumNoAdjacent(arr) {
  //   empty array
  if (arr.length === 0) {
    return -1;
  }
  //   one element
  if (arr.length === 1) {
    return arr[0];
  }

  const maxSums = arr.slice();

  maxSums[1] = Math.max(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + arr[i]);
  }

  return maxSums[maxSums.length - 1];
}

maxSubsetSumNoAdjacent(input);

// ------- 2 ---------

// instead of an auxiliary array we use variables to point to maxSums[i-1] and maxSums[i-2]

// Time: O(n)
// Space: O(1) : since we use variables

function maxSubsetSumNoAdjacent2(arr) {
  if (arr.length == 0) {
    return -1;
  }
  if (arr.length == 1) {
    return arr[0];
  }

  //   maxSums[i-2]
  let second = arr[0];

  // maxSums[i-1]
  let first = Math.max(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    const current = Math.max(first, second + arr[i]);
    second = first;
    first = current;
  }
  return first;
}

maxSubsetSumNoAdjacent2(input);
