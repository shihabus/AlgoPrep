// find largest three in a given array

// O(N) Time
// O(1) Space
function findLargestThreeNumbers(array) {
  // initialize an array with three null entries
  const threeLargest = [null, null, null];

  for (let num of array) {
    findLargestHelper(threeLargest, num);
  }

  // we will have the largest number at idx 2
  // followed by second and third largest
  return threeLargest;
}

// compare number and place the numbers in threeLargest
function findLargestHelper(threeLargest, num) {
  // update item at index 2 with the largest
  // shift all the element to left
  if (threeLargest[2] === null || threeLargest[2] < num) {
    replaceAndUpdate(threeLargest, num, 2);
  }
  // update item at index 1 with the largest
  // shift all the element to left
  else if (threeLargest[1] === null || threeLargest[1] < num) {
    replaceAndUpdate(threeLargest, num, 1);
  }
  // update item at index 0 with the largest
  else if (threeLargest[0] === null || threeLargest[0] < num) {
    replaceAndUpdate(threeLargest, num, 0);
  }
}

// replace and update threeLargest array
// threeLargest,
// numberToReplace
// replaceIdx
function replaceAndUpdate(threeLargest, numberToReplace, replaceIdx) {
  for (let i = 0; i <= replaceIdx; i++) {
    if (i === replaceIdx) {
      threeLargest[i] = numberToReplace;
    } else {
      threeLargest[i] = threeLargest[i + 1];
    }
  }
}

const input = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
findLargestThreeNumbers(input);
