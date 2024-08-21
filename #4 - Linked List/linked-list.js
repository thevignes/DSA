//single linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  addToLast(data) {
    const newLinkedList = new Node(data);
    if (!this.head) {
      this.head = newLinkedList;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newLinkedList;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  toLinkedList(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.addToLast(arr[i]);
    }
  }

  addToStart(data) {
    const newLinkedList = new Node(data);
    newLinkedList.next = this.head;
    this.head = newLinkedList;
  }

  size() {
    if (!this.head) {
      return console.log("nothing here");
    }
    let size = 0;
    let start = this.head;
    while (start) {
      start = start.next;
      size++;
    }
    console.log(size);
  }
  delete(index) {
    if (this.size < 0 || index < 0) {
      console.log("you hae to ");
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    current.next = current.next.next;
  }
  deleteNode(value) {
    if (!this.head) {
      return;
    }

    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== value) {
      current = current.next;
    }

    current.next = current.next.next;
  }
  middlevalue() {
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    console.log(slow.data);
  }
  removeDuplicate() {
    if (!this.head) {
      return console.log("hi");
    }
    let start = this.head;
    while (start && start.next) {
      if (start.data === start.next.data) {
        start.next = start.next.next;
      }
      start = start.next;
    }
  }
  isCircular() {
    let slow = this.head;
    let fast = slow.next;
    while (fast && fast.next) {
      if (fast.data === slow.data) {
        return console.log("it circular");
      }
      slow = slow.next;
      fast = fast.next.next;
    }
    return console.log("not a circulart");
  }
  LinkedListToCircular() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = this.head;
  }
  reverse(currNode = this.head) {
    let curr = this.head;
    let prev = null;
    while (curr) {
      let nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;
    }
    return prev;
  }
  isPallindrome() {
    if (!this.head.next) return true;
    let slow = this.head;
    let fast = this.head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let firsthalf = this.head;
    let secondhalf = this.reverse(slow.next);
    while (secondhalf) {
      if (firsthalf.data !== secondhalf.data) {
        return console.log("not a pallindrome");
      }
      firsthalf = firsthalf.next;
      secondhalf = secondhalf.next;
    }
    console.log("it is a pallindrome");
  }
}

const newLinkedList = new LinkedList();
newLinkedList.toLinkedList([1, 2, 3, 4, 4]);

newLinkedList.removeDuplicate();
newLinkedList.print();
newLinkedList.LinkedListToCircular();
newLinkedList.isCircular();

//double linked list

class DNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DLinkedList {
  constructor() {
    this.head = null;
  }
}
