class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
  // v: no.of vertices
  // e: no.of edges
  // O(v + e) time | O(v) space
  depthFirstSearch(array=[]) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}
