// Given a BST, find the branch sums

class BinaryTree {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Time: O(n), as we traverse through all nodes
// Space: O(log(n))[recursion] + O(n/2)[maintaining sums of branches. We assume the no.of leaf nodes is ~ half of total nodes] => O(n), upper bound
function branchSum(root) {
  // an array to store branch sums
  const sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}

// runningSum: the sum of all nodes above current node, in the branch
function calculateBranchSums(node, runningSum, sums) {
  // empty/null node
  if (!node) {
    return;
  }
  // runningSum is currentNode value + runningSum
  const runningSum = node.value + runningSum;

  // leaf node: no children
  // branch sum is current runningSum
  if (node.left === null && node.right === null) {
    return sums.push(runningSum);
  }

  //   for balanced TimeRanges, start from right

  // for left node, call the calculateBranchSums
  calculateBranchSums(node.left, runningSum, sums);

  // for right node, call the calculateBranchSums
  calculateBranchSums(node.right, runningSum, sums);
}
