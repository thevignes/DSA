class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "stack is empty";
    }
    return this.stack.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return "stack is empty";
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }
  print() {
    let i = 0;

    const length = this.size();
    while (i < length) {
      let curr = this.stack[i];
      console.log(curr);
      i++;
    }
  }
}

const stack = new Stack();

stack.push(10);

stack.push(20);

stack.push(30);

console.log(stack.print());
