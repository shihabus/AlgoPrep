// given an array of SORTED and DISTINCT numbers
// create a BST of min height with those elements

// the elements MUST be distinct, else
// we might not be able to create a BST of min height

// for the BST to be of min possible height
// the elements should be equally distributed
// in left and right subtrees

// so the easiest way to start with is,
// make the mid element of sorted array
// as the root node of the BST
// this is why the array MUST be sorted in asc order
// as it makes choosing the root node easier

function minHeightBST(array) {
  return constructMinHeightBST(array, null, 0, array.length - 1);
}

// solution: 1

// Time:(N*log(N)), since we call insertion on N nodes
// Space: O(N)

// each time we find the mid point of
// a sub array and assign the mid element
// as root or parent node in the BST
// we continue this on right and left sub arrays of current mid idx
// each mid element forms a parent node in a level

function constructMinHeightBST(array, bst, startIdx, endIdx) {
  // break if startIdx surpass endIdx
  if (endIdx < startIdx) {
    return;
  }
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const valueToInsert = array[midIdx];
  // bst doesn't exist create one with
  // mid Idx elements as root node
  if (bst === null) {
    bst = new BST(valueToInsert);
  } else {
    bst.insert(valueToInsert);
  }
  // left half
  constructMinHeightBST(array, bst, startIdx, midIdx - 1);
  // right half
  constructMinHeightBST(array, bst, midIdx + 1, endIdx);
  return bst;
}

// solution: 2

// we can avoid using the naive O(log(n)) complex insert method on BST
// and limit time complexity to O(n)

// Time: O(n)
// Space: O(n)
function constructMinHeightBST(array, bst, startIdx, endIdx) {
  // break if startIdx surpass endIdx
  if (endIdx < startIdx) {
    return;
  }
  const midIdx = Math.floor((startIdx + endIdx) / 2);

  const newBST = new BST(array[midIdx]);

  // initially bst is null
  // so we create a new BST
  // and pass it to next iteration
  if (bst === null) {
    bst = newBST;
  }

  // if bst already exist
  else {
    // we try to find, where to insert the new BST node
    // to the left, if incoming value less than current node value
    // or else right of currently pointed node
    if (array[midIdx] < bst.value) {
      bst.left = newBST;
      // we point the new node as the next node
      // so that in next iteration
      // it will be the current node
      bst = bst.left;
    } else {
      bst.right = newBST;
      bst = bst.right;
    }
  }
  // left half
  constructMinHeightBST(array, bst, startIdx, midIdx - 1);
  // right half
  constructMinHeightBST(array, bst, midIdx + 1, endIdx);
  return bst;
}

// solution: 3

// again we can clean up the insertion as
// here we don't need to pass down the bst

// Time: O(n)
// Space: O(n)
function constructMinHeightBST(array, startIdx, endIdx) {
  // break if startIdx surpass endIdx
  if (endIdx < startIdx) {
    return;
  }

  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const bst = new BST(array[midIdx]);

  // left half
  bst.left = constructMinHeightBST(array, startIdx, midIdx - 1);

  // right half
  bst.right = constructMinHeightBST(array, midIdx + 1, endIdx);
  return bst;
}

class BST {
  constructor(value) {
    this.value = value;
    this.right = right;
    this.left = left;
  }

  // Time: O(log(n)) | Space: O(n)
  insert(value) {
    if (this.value < value) {
      if (this.left === null) {
        this.left = new BST(value);
        return;
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
        return;
      } else {
        this.right.insert(value);
      }
    }
  }
}
