const input = [8, 5, 2, 9, 5, 6, 3];

// O(N^2) Time
// O(1) Space
function bubbleSort(arr) {
  // if values are swapped,
  // we need to iterate further
  // for this we can set a bool flag, isSorted
  // we assume the given is not sorted
  let isSorted = false;
  let iterationCount = 0;

  // until the array is sorted
  // we iterate over the entire array
  while (!isSorted) {
    isSorted = true;
    // we only need to go till length-1,
    // since we compare arr[i] and arr[i+1]

    // OPTIMIZATION
    // with each iteration, we will have the largest
    // element accumulating to the right of array
    // so basically we don't need to traverse till length-1
    // in all the iteration, and with each iteration
    // we only need to go arr.length-1-iterationCount
    // BUT this doesn't change the time complexity
    for (let i = 0; i < arr.length - 1 - iterationCount; i++) {
      // swapping adjacent values, if arr[i]<arr[i-1]
      // if swapped we set the isSorted flag false
      // and continue to iterate over
      if (arr[i] > arr[i + 1]) {
        swap(i, i + 1, arr);
        isSorted = false;
      }
      iterationCount++;
    }
  }
  return arr;
}

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(bubbleSort(input));
