// create a doubly Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1) time | O(1) space
  setHead(node) {
    // if current head is empty,
    // or in other words, if it an empty LinkedList
    // set incoming node as head and tail
    if (this.head == null) {
      this.head = node;
      this.tail = node;
      return;
    }

    // if head exist, insert the incoming node before it
    this.insertBefore(this.head, node);
  }

  // O(1) time | O(1) space
  setTail(node) {
    // if current head is empty,
    // or in other words, if it an empty LinkedList
    // set incoming node as head and tail
    if (this.tail === null) {
      this.setHead(node);
      return;
    }
    // if tail exist, insert the incoming node after it
    this.insertAfter(this.tail, node);
  }

  // insert a new node or an existing node
  // before a given node

  // O(1) Time | O(1) Space
  insertBefore(node, nodeToInsert) {
    // incase nodeToInsert is an existing node and
    // if we are dealing with a LinkedList with a single node
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }

    // if nodeToInsert is an existing node
    this.remove(nodeToInsert);

    // UPDATE BINDING OF NODE TO INSERT
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;

    // UPDATE BINDING OF SURROUNDING NODES

    // if we are inserting before the head node
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  // O(1) time | O(1) space
  insertAfter(node, nodeToInsert) {
    // incase nodeToInsert is an existing node and
    // if we are dealing with a LinkedList with a single node
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }

    // if nodeToInsert is an existing node
    this.remove(nodeToInsert);

    // UPDATE BINDING OF NODE TO INSERT
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;

    // UPDATE BINDING OF SURROUNDING NODES

    // if we are inserting after the tail node
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  // insert a node at position p
  // O(p) Time | O(1) Space
  insertAtPosition(position, nodeToInsert) {
    //   if position is 1 call setHead
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }

    // else, iterate till position th node
    let node = this.head;
    let currentPosition = 1;
    while (node !== null && currentPosition++ !== position) {
      node = node.next;
    }
    
    // if not null, call insert before
    if (node !== null) {
      this.insertBefore(node, nodeToInsert);
    }

    // if position is > length or tail node,
    // call setTail
    else {
      this.setTail(nodeToInsert);
    }
  }

  // remove all nodes with a given value
  // O(N) time | O(1) Space
  removeNodesWithValue(value) {
    let node = this.head;

    // iterate null you exhaust all nodes
    while (node !== null) {
      // since we have to continue the traversal
      // copy the current node to a temp value
      const nodeToRemove = node;

      // and increment the node pointer
      node = node.next;

      // if current node value === value
      // call remove on the current node
      if (nodeToRemove.value === value) {
        this.remove(nodeToRemove);
      }
    }
  }

  // remove a given node
  // O(1)  Time | O(1) Space
  remove(node) {
    // if give node is head, make its next node the head
    if (node === this.head) {
      this.head = this.head.next;
    }

    // if given node is tail, make its prev node the tail
    if (node === this.tail) {
      this.tail = this.tail.prev;
    }

    // since the above two conditions are not if else
    // it will handle the case where
    // the LinkedList just had a single node

    this.removeNodeBindings(node);
  }

  removeNodeBindings(node) {
    // if there is a prev node
    // update this next pointer to node.next
    if (node.prev !== null) {
      node.prev.next = node.next;
    }

    // if there is a next node
    // update this prev pointer to node.prev
    if (node.next !== null) {
      node.next.prev = node.prev;
    }
    node.prev = null;
    node.next = null;
  }

  // check if a node exist with a given value
  // O(N) Time | O(1) Space
  containsNodeWithValue(value) {
    // start at head
    let node = this.head;

    // iterate until the last node,
    // and the node value !== value

    // in other words, the loop will break
    // if node is null (exhausted) or
    // if node.value === value

    // this iteration or finding is
    // an O(N) Time | O(1) Space complex operation
    while (node !== null && node.value !== value) {
      node = node.next;
    }

    // if still the node is not null,
    // that means we have found
    // the node with given value
    return node !== null;
  }
}
