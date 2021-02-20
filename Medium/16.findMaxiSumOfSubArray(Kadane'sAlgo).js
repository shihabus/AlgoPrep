// INPUT
// 1. an array of numbers(both +ve and -ve)

// OUTPUT
// the maximum sum of sub array

// at each point we find the maxSumEndingHere
// maxSumEndingHere=max(num,maxSumEndingHere+num)
// we either choose btw the maxSumEndingHere(sum until i-1)+num[i] or
// just num[i] bcz, at times it is better to leave the max sum till i-1
// think the case we have a -ve sum so fat till i-1 and at i we have a +ve number

// we will have a running maxSumSoFar=max(maxSumSoFar,maxSumEndingHere)
// maxSumSoFar will be our answer

const input = [3,5,-9,1,3,-2,3,4,7,2,-9,6,3,1,-5,4];
function findMaxSumOfSubArray(arr) {
  let maxSumEndingHere = arr[0];
  let maxSumSoFar = arr[0];
  for (const num of arr.slice(1)) {
    maxSumEndingHere = Math.max(num, maxSumEndingHere + num);
    maxSumSoFar=Math.max(maxSumSoFar,maxSumEndingHere)
  }
  return maxSumSoFar
}

findMaxSumOfSubArray(input);
