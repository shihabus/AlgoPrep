// given an array of non duplicate numbers
// and a target sum, find all the triplets
// whose sum is equal to the target sum

// O(n^2) Time, as we have to iterate the array, for each entry
// O(n) Space, in worst case the triplets array will have n elements
function threeNumberSum(arr, targetSum) {
  const triplets = [];

  // sort the given array
  // O(n*log(n))
  arr.sort((a, b) => a - b);

  // iterate over the input array
  // until arr.length-2
  // we only iterate until arr.length-2, bcz
  // always we are trying to find a triplet
  // so if we are at i,
  // there should always be a i+1 and i+2
  for (let i = 0; i < arr.length - 2; i++) {
    // initialize left pointer
    let left = i + 1;

    // initialize right pointer
    let right = arr.length - 1;

    // until the pointers don't
    // overlap(odd length) or surpass(even length)
    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];
      if (currentSum === targetSum) {
        triplets.push([arr[i], arr[left], arr[right]]);

        // we move both the pointers bcz
        // if we just move left, the next sum
        // will always be greater than target
        // as the currentSum === target
        left++;

        // if we only move right pointer
        // next pointer will always be
        // lesser that target
        right--;
      } else if (currentSum < targetSum) {
        // moving the left pointer to right
        // the next sum will always be greater
        // than currentSum, thus trying
        // to match the targetSum
        left++;
      } else if (currentSum > targetSum) {
        // moving the right pointer to left
        // the next sum will always be smaller
        // than currentSum, thus trying
        // to match the targetSum
        right--;
      }
    }
  }
  return triplets;
}

const input = [12, 3, 1, 2, -6, 5, -8, 6];
console.log(threeNumberSum(input, 0));
