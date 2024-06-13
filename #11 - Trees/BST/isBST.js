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
  inorder(root) {
    if (!root) return [];
    return [...this.inorder(root.left), root.data, ...this.inorder(root.right)];
  };
  preorder(root) {
    if (!root) return [];
    return [root.data, ...this.preorder(root.left), ...this.preorder(root.right)]
  }
  isBst(root) {
    if (!root) return null;
    const inorder = this.inorder(root);
    for (let i = 0; i < inorder.length; i++) {
      if (inorder[i] <= inorder[i - 1]) {
        return false;
      }
      return true;
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
