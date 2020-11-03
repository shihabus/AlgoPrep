// Given an array with sub arrays
// find the sum of products of array and its depth

// [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
// [5 + 2, [7, -1], 3, [6, [-13, 8], 4]];
// [7, [7, -1], 3, [6, [-13, 8], 4]];
// [7, [(7 + -1) * 2], 3, [6, [-13, 8], 4]]; // recursive call([7, -1],2)
// [7, [12], 3, [6, [-13, 8], 4]];
// [7, 12, 3, [6, [-13, 8], 4]];
// [7 + 12 + 3, [6, [-13, 8], 4]];
// [22, [6, [-13, 8], 4]];
// [22, [(6 + [-13, 8], 4) * 2]]; // recursive call([6, [-13, 8], 4],2)
// [22, [(6 + [(-13 + 8) * 3], 4) * 2]]; // recursive call([-13, 8],3)
// [22, [(6 + [-15], 4) * 2]];
// [22, [(6 + -15 + 4) * 2]];
// [22, [-10]];
// [(22 + -10) * 1];
// [12];

const input = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

// O(N) Time | N is the no.of array elements
// including the no.of sub arrays

// O(D) Space | since it is recursion we will have a
// space complexity which will be equal
// to the highest depth of subarray present
function productSum(arr, depth = 1) {
  // running sum
  let sum = 0;

  // iterate through array
  for (element of arr) {
    // if element is an array recursively call productSum()
    // pass down the subarray and depth = depth+1
    if (Array.isArray(element)) {
      sum += productSum(element, depth + 1);
    }
    // if element is an int
    // add it to the running sum
    else {
      sum += element;
    }
  }
  // return the product of running sum and depth
  return sum * depth;
}

productSum(input);
