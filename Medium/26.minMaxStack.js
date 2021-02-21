// OUTPUT
// Construct a stack that keeps track of min and max elements

class MinMaxStack {
  constructor() {
    this.minMaxStack = [];
    this.stack = [];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  push(number) {
    const newMinMax = { min: number, max: number };
    // if stack is non-empty
    if (this.stack.length) {
      newMinMax.min = Math.min(
        this.minMaxStack[this.minMaxStack.length - 1]?.min,
        number
      );
      newMinMax.max = Math.max(
        this.minMaxStack[this.minMaxStack.length - 1]?.max,
        number
      );
    }
    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }

  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1]?.min;
  }

  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1]?.max;
  }
}

const myStack = new MinMaxStack();
myStack.push(1);
myStack.push(2);
myStack.push(4);
myStack.push(3);

myStack.getMin();
myStack.getMax();

myStack.peek();
