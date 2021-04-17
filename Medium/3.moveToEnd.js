// given an array and a value to be moved
// to the end of array

/**
 * 
  You're given an array of integers and an integer. Write a function that moves
  all instances of that integer in the array to the end of the array and returns
  the array.

  The function should perform this in place (i.e., it should mutate the input
  array) and doesn't need to maintain the order of the other integers.
*/

// O(N) Time
// O(1) Space, since no auxiliary space
function moveToEnd(arr, toMove) {
  // declare pointers

  // the pointer which find toMove
  // to be swapped, on left end
  let i = 0;

  // the pointer that find, a place
  // for the incoming toMove
  // to be inserted on right end
  let j = arr.length - 1;

  // until pointers overlap or surpass
  while (i < j) {
    // move j to the non toMove element
    // on right
    while (i < j && arr[j] === toMove) {
      j--;
    }
    // if we find a toMove on left,
    // swap it with non toMove found on right
    if (arr[i] === toMove) {
      swap(i, j, arr);
    }
    i++;
  }
  return arr;
}

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function moveElementToEnd(array, toMove) {
  let L = 0;
  let R = array.length - 1;
  let temp = null;

  while (L < R) {
    // find a place for incoming toMove
    // as long as the points don't
    // pass each other, continue
    // if we don't check this,
    // we will swap already swapped values
    while (L < R && array[R] === toMove) {
      R--;
    }

    // find a toMove
    // as long as the points don't
    // pass each other, continue
    // if we don't check this,
    // we will swap already swapped values
    while (L < R && array[L] !== toMove) {
      L++;
    }

    temp = array[L];
    array[L] = array[R];
    array[R] = temp;

    // once swapped advance pointers
    R--;
    L++;
  }

  return array;
}

const input = [2, 1, 2, 2, 2, 3, 4, 2];
console.log(moveToEnd(input, 2));

// [2,1,2,2,2,3,4,2]
// [4,1,2,2,2,3,2,2]
// [4,1,3,2,2,2,2,2]
// [4,1,3,2,2,2,2,2]
