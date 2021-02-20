// given an array and a value to be moved
// to the end of array

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

const input = [2, 1, 2, 2, 2, 3, 4, 2];
console.log(moveToEnd(input, 2));

// [2,1,2,2,2,3,4,2]
// [4,1,2,2,2,3,2,2]
// [4,1,3,2,2,2,2,2]
// [4,1,3,2,2,2,2,2]
