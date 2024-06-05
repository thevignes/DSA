class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  // This is the stack that contains nodes from the Node instance
  // Each Stack instance contain a top node and the size
  constructor() {
    this.top = null;
    this.size = 0;
  }
  push(value) {
    const node = new Node(value);

    // connect the new node to the previous "top" node
    node.next = this.top;
    // set the top node to the new node
    this.top = node;

    this.size++;
  }

  pop() {
    // if there is no top node, that means the stack is empty
    // we cannot remove an element from an empty stack, so return null
    if (!this.top) return null;

    // save the value of the element to be removed
    const value = this.top.value;

    // set the top node to be the previous element
    // next is actually referencing the lower element on the stack
    this.top = this.top.next;

    this.size--;

    return value;
  }
}

const myStack = new Stack();

myStack.push("apple");
