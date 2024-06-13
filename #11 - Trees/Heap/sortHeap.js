class MaxHeap {
  constructor() {
    this.root = null;
  }
  heapifydown(parent) {
    const heap = this.root;
    const lastindex = heap.length - 1;
    let right = this.rightChild(parent);
    let left = this.leftChild(parent);
    while (left <= lastindex) {
      let swap;
      if (right <= lastindex && heap[right] > heap[left]) {
        swap = right;
      } else {
        swap = left;
      }
      if (heap[swap] > heap[parent]) {
        [heap[swap], heap[parent]] = [heap[parent], heap[swap]];
        parent = swap;
        right = this.rightChild(parent);
        left = this.leftChild(parent);
      } else {
        return;
      }
    }
  }
  heapifyUp(index) {
    const heap = this.root;
    let parent = this.parent(index);
    while (index > 0 && heap[parent] < heap[index]) {
      [heap[parent], heap[index]] = [heap[index], heap[parent]];
      index = parent;
      parent = this.parent(index);
    }
  }
  remove() {
    const heap = this.root;
    [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
    heap.pop();
    this.heapifydown(0);
  }
  sort(arr) {
    this.build(arr);
    let sorted = [];
    let heap = this.root;
    while (heap.length > 0) {
      const data = this.peek();
      console.log(data);
      sorted.push(data);
      this.remove();
    }
    return sorted;
  }
  peek() {
    return this.root[0];
  }
  build(arr) {
    this.root = arr;
    let parent = this.parent(arr.length - 1);
    for (let i = parent; i >= 0; i--) {
      this.heapifydown(i);
    }
  }

  displa() {
    console.log(this.root);
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChild(i) {
    return 2 * i + 1;
  }

  rightChild(i) {
    return 2 * i + 2;
  }
}
const hea = new MaxHeap();

console.log(hea.sort([4, 10, 3, 5, 1]));
