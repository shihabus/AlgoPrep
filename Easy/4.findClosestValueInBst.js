// Find the closest Node in a BST given a target value

// ===== 1 ======
// average: O(log(n)) time(since BST) | O(log(n)) space(since recursive, we have log(n) frames in call stack)
// In case of tree with single branch, worst: O(n) time | O(n) space

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new BST(10);
tree.right = new BST(15);
tree.left = new BST(5);
tree.left.left = new BST(2);
tree.left.right = new BST(5);
tree.left.left.left = new BST(1);
tree.right.left = new BST(13);
tree.right.right = new BST(22);
tree.right.left.right = new BST(14);

/*

         10
        /   \
       /     \
      5       15
     / \      / \
    /   \    /   \
   2     5  13   22
  /           \  
 1            14

*/


function findClosestValueInBst(tree, target) {
  // to begin with we choose infinity as the closest.
  // It can be the first node.value too.
  return findClosestValueInBstHelper(tree, target, Infinity);
}

function findClosestValueInBstHelper(tree, target, closest) {
  // base cases:
  // tree is null return closest
  if (tree === null) return closest;

  //  the value with smallest difference will be the closest
  // | target - tree.value | < | target - closest |
  // closest=tree.value
  if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
    closest = tree.value;
  }

  // in BST left values are smaller than currentNode.value
  // tree.value < target
  // call findClosestValueInBstHelper with tree=tree.right
  if (tree.value < target)
    return findClosestValueInBstHelper(tree.right, target, closest);
  // tree.value > target
  // call findClosestValueInBstHelper with tree= tree.left
  else if (tree.value > target)
    return findClosestValueInBstHelper(tree.left, target, closest);
  // tree.value === target return closest which is tree.value
  else if (tree.value === target) return closest;
}

// ==== 2 ====

// average: O(log(n)) time(since BST) | O(1) space, since iterative solution
// In case of tree with single branch, worst: O(n) time | O(1) space
function findClosestValueInBst(tree, target) {
  // have a closest, start with infinity of first node.value
  let closest = Infinity;
  // currentNode=tree
  let currentNode = tree;
  // iterate until currentNode is not null
  while (currentNode !== null) {
    // if(Math.abs(target-currentNode.value) < Math.abs(target-closet)) -> closest=currentNode.value
    if (Math.abs(target - currentNode.value) < Math.abs(target - closet)) {
      closest = currentNode.value;
    }
    // if(target > currentNode.value) currentNode=currentNode.right
    if (target > currentNode.value) currentNode = currentNode.right;
    // if(target < currentNode.value) currentNode=currentNode.left
    else if (target < currentNode.value) currentNode = currentNode.left;
    // if(target === currentNode.value) return currentNode.value as closest
    else if (target === currentNode.value) break;
  }

  return closest;
}
