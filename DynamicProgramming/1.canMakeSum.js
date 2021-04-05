/**
 * given a targetSum and an array of positive integers
 * return true if the targetSum can be created from the given array items
 */

const arr = [5,3,4,7];
const targetSum = 2;

/**
 * Un optimized
 * O(n^m) Time | O(m) Space
 * n: no.of elements in the array
 * m: target sum
 */

/**
 * Optimized
 * O(n*m) Time | O(m) Space
 * n: no.of elements in the array
 * m: target sum
 */

function canSum(targetSum, array, memo = {}) {
  if (targetSum in memo) return memo[targetSum];

  // base cases
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of array) {
    const reminder = targetSum - num;
    if (canSum(reminder, array, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
}

canSum(targetSum, arr);
