// find a sum pair with a given target
const arr = [3, 5, -4, 8, 11, -1, 6];
const targetSum = 4;

// ============== 1 ============
// > run two loops, an inner and outter
// inner 0 -> array.length-1
// outter inner+1 -> array.length
// if sum(inner+outter)=== targetSum return[inner,outter]
// else if no match, return []

// O(n^2) time | O(1) space
function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

// ============== 2 ============
// x+y=targetSum
// y=targetSum-x

// O(n) time | O(n) space
function twoNumberSum(arr, targetSum) {
  const hashMap = {};
  for (let x of arr) {
    const y = targetSum - x;
    if (y in hashMap) return [x, y];
    hashMap[x] = true;
  }
  return [];
}

// ============== 3 ============
// sort given array
// set pointer L and R
// until L<R
// sum = arr[L]+arr[R]
// if(sum===targetSum) return [arr[L],arr[R]]
// else if(sum<targetSum) move L to right by 1 index
// else if(sum>targetSum) move R to left by 1 index

// since sorting is involved O(nlog(n)) time || O(1) space
function twoNumberSum(arr, targetSum) {
  arr.sort((a, b) => a - b); // asc order
  let L = 0;
  let R = arr.length - 1;
  while (L < R) {
    const sum = arr[L] + arr[R];
    if (sum === targetSum) return [arr[L], arr[R]];
    else if (sum < targetSum) L++;
    else if (sum > targetSum)  R--;
  }
  return [];
}
