class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  appendChild(left, right) {
    this.left = left;
    this.right = right;
  }
}

// all the traversal have same logic
// we recursively call the methods of children
// until we reach a leaf node
// basically we have three steps
// 1. call left node // always call left node before right
// 2. call right node
// 3. append the node value to an array


// the order we call the methods is different
// call left
// append to array
// call right

// the final array is sorted in ascending order
function inOrderTraversal(tree, array = []) {
  if (tree !== null) {
    inOrderTraversal(tree.left, array);
    array.push(tree.value);
    inOrderTraversal(tree.right, array);
  }
  return array;
}


// append to array
// call left
// call right
function preOrder(tree, array = []) {
  if (tree !== null) {
    array.push(tree.value);
    inOrderTraversal(tree.left, array);
    inOrderTraversal(tree.right, array);
  }
  return array;
}


// call left
// call right
// append to array
function postOrder(tree, array = []) {
  if (tree !== null) {
    inOrderTraversal(tree.left, array);
    inOrderTraversal(tree.right, array);
    array.push(tree.value);
  }
  return array;
}
