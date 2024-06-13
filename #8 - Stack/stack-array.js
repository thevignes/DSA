class Stack {
  constructor(size) {
    this.stack = new Array(size);
    this.size = 0;
    this.top = null;
  }
  push(val) {
    if (this.stack.length - 1 <= this.size) return "stack overflow";
    this.stack[this.size] = val;
    this.top = this.size;
    this.size++;
    return;
  }
  pop() {
    if (!this.top) return "stack underflow";
    this.stack[this.top] = undefined;
    this.size--;
    this.top = this.top - 1;
  }
  peek() {
    return this.stack[this.top];
  }
  display() {
    for (let i = 0; i < this.stack.length; i++) {
      console.log(this.stack[i]);
    }
  }
}
const stack = new Stack(10);
stack.push(1);
stack.push(2);
stack.pop();
stack.peek();
stack.display();
