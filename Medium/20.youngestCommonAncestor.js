// INPUTS
// 1. top ancestor (ro0t node)
// 2. descendant 1
// 3. descendant 2

// OUTPUT
// the youngest common ancestor

class AncestorTress {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

// Time: O(D), depth of lowest descendant
// Space: O(1)
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  // get the depths
  let depthOne = getDepthOfDescendant(descendantOne, topAncestor);
  let depthTwo = getDepthOfDescendant(descendantTwo, topAncestor);

  //
  if (depthOne > depthTwo) {
    return backtrackAncestralTree(
      descendantOne,
      descendantTwo,
      depthOne - depthTwo
    );
  } else {
    return backtrackAncestralTree(
      descendantTwo,
      descendantOne,
      depthTwo - depthOne
    );
  }
}

function getDepthOfDescendant(descendant, topAncestor) {
  let depth = 0;
  while (topAncestor != descendant) {
    depth++;
    descendant = descendant.ancestor;
  }
  return depth;
}

function backtrackAncestralTree(lowerDescendant, higherDescendant, diff) {
  // bring the descendant to same level
  if (diff > 0) {
    lowerDescendant = lowerDescendant.ancestor;
    diff--;
  }

  // traverse up until youngest common ancestor if found
  while (lowerDescendant !== higherDescendant) {
    lowerDescendant = lowerDescendant.ancestor;
    higherDescendant = higherDescendant.ancestor;
  }

  return lowerDescendant;
}
