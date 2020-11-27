// given a tree
// validate if it is a BST or not

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// for bst to hold
// minValue =< tree.value < maxValue

// so if we take a right node (wrt parent Node), it's minimum value is parentNode.value
// for left node, its maximum value is parentNode.value

// here we follow divide and conquer method
// we individually verify if a tree is a BST or not
// if one tree set broke the rule, the entire tree is invalidated

// Time O(N), as we traverse through all the nodes
// Space O(d), where d being depth
// bcz we will have at most stack frames equal to the depth of the tree

function validateBST(tree) {
  return validateBSTHelper(tree, -Infinity, Infinity);
}

function validateBSTHelper(tree, minValue, maxValue) {
  // if reached leaf not it is true
  if (tree === null) {
    return true;
  }

  // here we check if it breaks BST or not
  if (tree.value < minValue || tree.value >= maxValue) {
    return false;
  }

  const leftTreeIsValid = validateBSTHelper(tree.left, minValue, tree.value);
  return leftTreeIsValid && validateBSTHelper(tree.right, tree.value, maxValue);
}
