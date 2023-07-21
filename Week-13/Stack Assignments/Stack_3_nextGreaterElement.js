//Time:O(n)
//Space: O(n)

class Stack {
  constructor() {
    this.items = [];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  push(value) {
    this.items[this.items.length] = value;
    return;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("stack is empty");
    }
    let value = this.items[this.items.length - 1];
    this.items.length--;
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("stack is empty");
    }
    let value = this.items[this.items.length - 1];

    return value;
  }
}

function nextGreaterElement(arr) {
  let stack = new Stack();
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (!stack.isEmpty() && stack.peek() <= arr[i]) {
      stack.pop();
    }
    if (stack.isEmpty()) {
      res.unshift(-1);
    } else {
      res.unshift(stack.peek());
    }
    stack.push(arr[i]);
  }
  return res;
}
let arr = [5, 3, 8, 4, 2, 7, 1];
console.log(nextGreaterElement(arr));
