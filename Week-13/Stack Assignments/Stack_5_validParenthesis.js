// Time : O(n)[valid Parenthesis function]
// Space :O(n);

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

function validParenthesis(arr) {
  let stack = new Stack();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(" || arr[i] === "[" || arr[i] === "{") {
      stack.push(arr[i]);
    } else {
      switch (arr[i]) {
        case ")":
          if (stack.isEmpty() || stack.peek() !== "(") return false;
          else stack.pop();
          break;
        case "}":
          if (stack.isEmpty() || stack.peek() !== "{") return false;
          else stack.pop();
          break;
        case "]":
          if (stack.isEmpty() || stack.peek() !== "[") return false;
          else stack.pop();
          break;
      }
    }
  }
  return stack.isEmpty();
}
let arr = ["(", "[", "]", ")", "{", "}"];
console.log(validParenthesis(arr));
