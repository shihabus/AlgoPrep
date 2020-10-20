// Given a BST find the sum of node depths

// Here depth of node is actually the no.of edges b/w
// the root node and the current node

// for a node n, its depth is always d+1, where d is the depth of its parent node
// so we can compute the depth of child nodes, if we know the depth of parent node

// f(n,d)=d+f(n.left,d+1)+f(n.right,d+1)
// f(n,d): sum of node depths of the node n, with depth d

// # recursive solution
// we keep on calling the f(n,d), until we have exhausted all the nodes

// # iterative solution
// keep a running sum
// use a stack, to which we push the root node(d:0) initially
// when popping the stack, we push the child nodes(n.left, n.right) of the node being popped along with its depth (d+1)
// we add the depth of popped node to the running sum
// we continue this until the stack runs empty

// # NB: when dealing any node, associate its depth to it

// ==== 1 ===
// # recursive
// time: O(n), where n is no.of nodes
// space: avg O(h), where h is height of BST

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findNodeDepth(root) {
  return calculateDepth(root, 0);
}

function calculateDepth(node, depth) {
  if (!node) {
    return 0;
  }
  return (
    depth +
    calculateDepth(node.left, depth + 1) +
    calculateDepth(node.right, depth + 1)
  );
}

// ==== 2 ===
// # iterative

// time: O(n), where n is no.of nodes
// space: avg O(h), where h is height of BST

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findNodeDepth(root) {
  let runningSum = 0;
  const stack = [{ node: root, depth: 0 }];
  while (stack.length > 0) {
    const topNode = stack.pop();
    const { node, depth } = topNode;
    if (!node) {
      continue;
    }
    runningSum += depth;
    stack.push({ node: topNode.left, depth: depth + 1 });
    stack.push({ node: topNode.right, depth: depth + 1 });
  }
  return runningSum;
}
