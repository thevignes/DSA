class MaxHeap {
  constructor() {
    this.root = null;
  }
  heapfiydown(parent) {
    const maxheap = this.root;
    let endindex = maxheap.length - 1;
    let leftindex = this.leftindex(parent);
    let rightindex = this.rightindex(parent);
    while (leftindex <= endindex) {
      let swapIndex;
      if (rightindex <= endindex && maxheap[leftindex] < maxheap[rightindex]) {
        swapIndex = rightindex;
      } else {
        swapIndex = leftindex;
      }

      if (maxheap[parent] < maxheap[swapIndex]) {
        [maxheap[parent], maxheap[swapIndex]] = [
          maxheap[swapIndex],
          maxheap[parent],
        ];
        parent = swapIndex;
        leftindex = this.leftindex(parent);
        rightindex = this.rightindex(parent);
      } else {
        return;
      }
    }
  }

  heapfiyup(index) {
    const heapmax = this.root;
    let parent = this.parent(index);
    while ( parent> 0 && heapmax[parent] < heapmax[index] ) {
        [heapmax[parent] , heapmax[index]] = [heapmax[index] ,heapmax[parent]];
        index =parent
        parent = this.parent(parent);
       
    }
  }

  buildheap(arr) {
    this.root = arr;
    const endparent = this.parent(arr.length - 1);
    for (let i = endparent; i >= 0; i--) {
      this.heapfiydown(i);
    }
  }

  insert (value) {
    if (!this.root) {
        this.root = new Array()
    };

    let maxheap = this.root;
    maxheap.push(value);
    this.heapfiyup(maxheap.length - 1)
  }


  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  rightindex(i) {
    return 2 * i + 2;
  }

  leftindex(i) {
    return 2 * i + 1;
  }

  display() {
    console.log(this.root);
  }
}

const heap = new MaxHeap();
heap.buildheap([-5, 3, 1, 11, 6, 22]);
heap.display();
