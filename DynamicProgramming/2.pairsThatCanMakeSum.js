/**
 * given a targetSum and an array of positive integers
 * return the pair that can create the given targetSum
 */

const arr = [5, 3, 4, 7];
const targetSum = 7;

function howSum(targetSum, array, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of array) {
    const reminder = targetSum - num;
    const reminderResult = howSum(reminder, array);
    if (reminderResult !== null) {
      memo[targetSum] = [...reminderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return memo[targetSum];
}

howSum(targetSum, arr);
