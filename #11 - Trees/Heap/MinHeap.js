class minHeap {
  constructor() {
    this.root = null;
  }

  heapfiyDown(parent) {
    let minHeap = this.root;
    let endindex = minHeap.length - 1;
    let leftInd = this.leftChild(parent);
    let rightInd = this.rightChild(parent);
    while (leftInd <= endindex) {
      let indexToShift;
      if (rightInd <= endindex && minHeap[rightInd] < minHeap[leftInd]) {
        indexToShift = rightInd;
      } else {
        indexToShift = leftInd;
      }

      if (minHeap[parent] > minHeap[indexToShift]) {
        [minHeap[parent], minHeap[indexToShift]] = [
          minHeap[indexToShift],
          minHeap[parent],
        ];
        parent = indexToShift;
        leftInd = this.leftChild(parent);
        rightInd = this.rightChild(parent);
      } else {
        return;
      }
    }
  }

  heapifyUp(currentind) {
    const heap = this.root;
    let parentind = this.parent(currentind);
    while (currentind > 0 && heap[parentind] > heap[currentind]) {
      [heap[parentind], heap[currentind]] = [heap[currentind], heap[parentind]];
      currentind = parentind;
      parentind = this.parent(currentind);
    }
  }

  peek() {
    return this.root[0];
  }

  buildHeap(array) {
    this.root = array;
    const endparent = this.parent(array.length - 1);
    for (let i = endparent; i >= 0; i--) {
      this.heapfiyDown(i);
    }
  }

  remove() {
    const heap = this.root;
    [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
    heap.pop();
    this.heapfiyDown(0);
  }

  insert(value) {
    if (!this.root) {
      this.root = new Array();
    }
    const heap = this.root;
    heap.push(value);
    this.heapifyUp(heap.length - 1);
  }

  display() {
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

let heap = new minHeap();
heap.insert(1);
heap.insert(3);
heap.insert(-5);
heap.insert(11);
heap.insert(22);
heap.remove();
heap.display();

console.log(heap.peek());
