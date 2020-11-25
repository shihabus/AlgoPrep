// construct a BST
// should have
// insert,
// search and
// remove

// recursive | Space O(n)
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Avg: Time O(log(n)) | Space O(log(n))
  // Worst: Time O(n) | Space O(n)
  insert(value) {
    // if value is less that current node,
    // we will insert to the left
    if (value < this.value) {
      // if left node is null
      // insert over there
      if (this.left === null) {
        this.left = new BST(value);
      }
      // else recursively call insert on the left node
      else {
        this.left.insert(value);
      }
    }
    // value being greater than or equal to the current node
    else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    // returning this help to chain calls
    // bst.insert(2).insert(9)......
    return this;
  }

  // Avg: Time O(log(n)) | Space O(log(n))
  // Worst: Time O(n) | Space O(n)
  contains(value) {
    // if given value is less than current node
    // move to the node on left
    if (value < this.value) {
      // if left node is empty
      // we failed to find the given node
      if (this.left === null) {
        return false;
      }
      // if a left node exist
      // call contains method on it
      else {
        this.left.contains(value);
      }
    }
    // value being > currentNode.value
    else if (value > this.value) {
      if (this.right === null) {
        return false;
      } else {
        this.right.contains(value);
      }
    }
    // else if value===currentNode.value
    else {
      return true;
    }
  }

  // Avg: Time O(log(n)) | Space O(log(n))
  // Worst: Time O(n) | Space O(n)
  remove(value, parent = null) {
    // finding value to remove
    if (value < this.value) {
      if (this.left !== null) {
        this.left.remove(value, this);
      }
    } else if (value > this.value) {
      if (this.right !== null) {
        this.right.remove(value, this);
      }
    }
    // once we found the node to remove
    else {
      // case 1: removing a node with two child nodes
      if (this.left !== null && this.right !== null) {
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this);
      }
      // case 2: removing root node
      // with either a left or right subtree
      else if (parent === null) {
        if (this.left !== null) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right !== null) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        } else {
          // This is a single-node tree; do nothing.
        }
      } 
      // case 3: a node with 
      // with either a left or right subtree or no child(leaf node)
      else if (parent.left === this) {
        parent.left = this.left !== null ? this.left : this.right;
      } else if (parent.right === this) {
        parent.right = this.left !== null ? this.left : this.right;
      }
    }
    // case 3: removing a node with single child
    // case 4: removing a leaf node
    return this;
  }

  // return the smallest value on the right leg
  // it will always be on to the left of the BST node
  getMinValue() {
    if (this.left === null) {
      return this.value;
    } else {
      return this.left.getMinValue();
    }
  }
}

// -----------

// iterative
// Space O(1)

// Avg: Time O(log(n)) | Space O(1)
// Worst: Time O(n) | Space O(1)
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Average: O(log(n)) time | O(1) space
  // Worst: O(n) time | O(1) space
  insert(value) {
    let currentNode = this;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }

  // Average: O(log(n)) time | O(1) space
  // Worst: O(n) time | O(1) space
  contains(value) {
    let currentNode = this;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // we want to keep track of parent node
  // for removal of nodes with one or no child
  // in this case we append the remaining  child subtree
  // to the parent node
  remove(value, parentNode = null) {
    let currentNode = this;
    while (currentNode !== null) {
      // finding node
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
      // node found
      else {
        // case 1: removing a node with two child nodes
        if (currentNode.left !== null && currentNode.right !== null) {
          // find the smallest value on right subtree
          currentNode.value = currentNode.right.getMinValue();
          // remove the smallest value
          // and reassign it as the currentNode
          currentNode.right.remove(currentNode.value, currentNode);
        }
        // case 2: root node with a right or left sub tree
        else if (parentNode === null) {
          if (currentNode.left !== null) {
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right !== null) {
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
            // This is a single-node tree; do nothing.
            currentNode.value = null;
          }
        }
        // case 3: node with a right or left sub tree or or no child(leaf node)
        else if (parentNode.left === currentNode) {
          parentNode.left =
            currentNode.left !== null ? currentNode.left : currentNode.right;
        } else if (parentNode.right === currentNode) {
          parentNode.right =
            currentNode.left !== null ? currentNode.left : currentNode.right;
        }
        break;
      }
    }
    return this;
  }

  getMinValue() {
    let currentNode = this;
    // iterate until left node is none
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}
