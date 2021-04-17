// given two integer arrays
// find the pair with the smallest difference

/**
  Write a function that takes in two non-empty arrays of integers, finds the
  pair of numbers (one from each array) whose absolute difference is closest to
  zero, and returns an array containing these two numbers, with the number from
  the first array in the first position.
  
  Note that the absolute difference of two integers is the distance between
  them on the real number line. For example, the absolute difference of -5 and 5
  is 10, and the absolute difference of -5 and -4 is 1.

  You can assume that there will only be one pair of numbers with the smallest
  difference.

  Distance in number line is LargestNum-SmallestNum, no matter whether integers are
  -ve or +ve.
*/

// O(n^2) Time | O(1) Space
// function smallestDifference(arrayOne, arrayTwo) {
//   let smallestDiff = Infinity;
//   let pair = [];
//   for (let i = 0; i < arrayOne.length; i++) {
//     let currentDiff = Infinity;
//     for (let j = 0; j < arrayTwo.length; j++) {
//       let num1 = arrayOne[i];
//       let num2 = arrayTwo[j];
//       if (0 > num1 && 0 > num2) {
//         num1 = Math.abs(num1);
//         num2 = Math.abs(num2);
//       }

//       if (num1 > num2) {
//         currentDiff = num1 - num2;
//       } else {
//         currentDiff = num2 - num1;
//       }
//       if (smallestDiff > currentDiff) {
//         smallestDiff = currentDiff;
//         pair = [arrayOne[i], arrayTwo[j]];
//       }
//     }
//   }
//   return pair;
// }

//-------------------------------

// O(n*log(n)+m*log(m)) Time bcz of sorting
// O(1) Space, as we assume, sort is in place
// if sorting require extra space, it should be accounted
function smallestDifference(arr1, arr2) {
  // sort arrays
  // O(n*log(n)) T | O(1) Space, in place sort
  arr1.sort((a, b) => a - b);

  // O(m*log(m)) T | O(1) Space, in place sort
  arr2.sort((a, b) => a - b);

  // an array to store smallest pair
  let smallestPair = [];

  // store running smallest difference
  let smallestDiff = Infinity;

  // store current difference
  let currentDiff = Infinity;

  // pointer of array1
  let idx1 = 0;

  // pointer of array2
  let idx2 = 0;

  // iterate until either one of array exhaust
  while (idx1 < arr1.length && idx2 < arr2.length) {
    const firstNumber = arr1[idx1];
    const secondNumber = arr2[idx2];

    // we always try to find the smallest difference
    // between a pair and it will be 0 if both numbers are the same

    // if pairs are of different numbers
    // to reduce the pair difference
    // we move the pointer of smallest number
    // to the next big number

    // as the arrays are sorted
    // we just need to advance it

    if (firstNumber < secondNumber) {
      currentDiff = secondNumber - firstNumber;
      idx1++;
    } else if (secondNumber < firstNumber) {
      currentDiff = firstNumber - secondNumber;
      idx2++;
    }
    // equal elements
    else {
      return [firstNumber, secondNumber];
    }

    // if the currentDiff is smaller than the running diff
    // we update the currentDiff as the running smallestDiff
    // and the element pair as the running smallestPair
    if (smallestDiff > currentDiff) {
      smallestDiff = currentDiff;
      smallestPair = [firstNumber, secondNumber];
    }
  }
  return smallestPair;
}

const arrayOne = [-1, 5, 10, 20, 28, 3];
const arrayTwo = [26, 134, 135, 15, 17];
console.log(smallestDifference(arrayOne, arrayTwo));
