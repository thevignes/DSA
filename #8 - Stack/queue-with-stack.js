class QueueStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(x) {
    this.stack2.push(x);
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.shift());
    }
    let temp = this.stack1;
    this.stack1 = this.stack2;
    this.stack2 = temp;
  };
  pop () {
    return this.stack1.pop();
  };
  display () {
    for ( let i of this.stack1 ) {
        console.log(i)
    }
  }
}

let q = new QueueStack();
q.push(1)
q.push(2)
q.push(3)
q.pop()
q.display()
