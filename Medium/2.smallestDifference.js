// given two integer arrays
// find the pair with the smallest difference

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
    } else {
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
