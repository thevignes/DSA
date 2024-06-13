class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    this.insertNode(this.root, newNode);
  }
  insertNode(root, newNode) {
    // handle if there no node;
    if (root.data > newNode.data) {
      if (root.left === null) {
        root.left = newNode;
        return;
      }
      this.insertNode(root.left, newNode);
    } else if (root.data < newNode.data) {
      if (root.right === null) {
        root.right = newNode;
        return;
      }
      this.insertNode(root.right, newNode);
    }
  }
  preorder(root, list = []) {
    if (root) {
      list.push(root.data);
      this.preorder(root.left, list);
      this.preorder(root.right, list);
      return list;
    }
  }

  findClosestValue(root, value) {
    if (!root) {
      return null;
    }
    let minDiff = Infinity;
    let closestNode = null;

    while (root) {
      let currentDiff = Math.abs(root.data - value);
      if (currentDiff < minDiff && root.data !== value) {
        minDiff = currentDiff;
        closestNode = root;
      }
      if (root.data > value) {
        root = root.left;
      } else if (value > root.data) {
        root = root.right;
      } else {
        break;
      }
    }
    return closestNode.data;
  }
//find closeset rec
  find(root, value, minDiff = Infinity, node = null) {
    if (!root) return node;
    let currentDiff = Math.abs(root.data - value);
    if (currentDiff < minDiff) {
      minDiff = currentDiff;
      node = root.data;
    }
    if (root.data > value) {
      return this.find(root.left, value, minDiff, node);
    } else if (value > root.data) {
     return this.find(root.right, value, minDiff, node);
    } else {
      return node;
    }
  }
}

const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(4);
console.log(bst.preorder(bst.root));
console.log(bst.find(bst.root, 4));
