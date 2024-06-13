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
    if (!root) {
      throw new Error("something went wrong");
    }
    if (root.data > newNode.data) {
      if (root.left === null) {
        root.left = newNode;
        return;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else if (root.data < newNode.data) {
      if (root.right === null) {
        root.right = newNode;
        return;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  contains(root, target) {
    if (!root) {
      return false;
    }
    if (root.data === target) {
      return true;
    } else if (root.data > target) {
      return this.contains(root.left, target);
    } else {
      return this.contains(root.right, target);
    }
  }

  preorder(root, list = []) {
    if (root) {
      list.push(root.data);
      this.preorder(root.left, list);
      this.preorder(root.right, list);
    }
    return list;
  }

  inorder(root, list = []) {
    if (root) {
      this.inorder(root.left, list);
      list.push(root.data);
      this.inorder(root.right, list);
    }
    return list;
  }

  postorder(root, list = []) {
    if (root) {
      this.postorder(root.left, list);
      this.postorder(root.right, list);
      list.push(root.data);
    }
    return list;
  }

  min(root) {
    if (!root) {
      return null;
    }
    while (root.left) {
      root = root.left;
    }
    return root.data;
  }

  max(root) {
    if (!root) {
      return null;
    }
    while (root.right) {
      root = root.right;
    }
    return root.data;
  }

  deleteNode(root, target) {
    if (!root) {
      return null;
    }
    if (target < root.data) {
      root.left = this.deleteNode(root.left, target);
    } else if (target > root.data) {
      root.right = this.deleteNode(root.right, target);
    } else {
      // if root right value is ther we set there if ther nothing to set set null
      if (!root.left) {
        return root.right;
      }
      if (!root.right) {
        return root.left;
      }
      root.data = this.min(root.right);
      root.right = this.deleteNode(root.right, root.data);
    }
    return root;
  };

}

const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(4);
console.log(bst.min(bst.root));
console.log(bst.preorder(bst.root));
bst.deleteNode(bst.root, 15);
console.log(bst.preorder(bst.root)); // Output the preorder traversal
console.log(bst.inorder(bst.root)); // Output the inorder traversal
console.log(bst.postorder(bst.root)); // Output the postorder traversal
