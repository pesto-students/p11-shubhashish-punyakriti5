// Time : O(n), traversal whole arr
// Space : O(n), created stack of almost n size;

function reversePolishNotation(arr) {
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      stack.push(arr[i]);
    } else if (
      arr[i] == "+" ||
      arr[i] == "-" ||
      arr[i] == "*" ||
      arr[i] == "/"
    ) {
      let o2 = stack.pop();
      let o1 = stack.pop();

      switch (arr[i]) {
        case "+":
          stack.push(o1 + o2);
          break;
        case "-":
          stack.push(o1 - o2);
          break;
        case "*":
          stack.push(o1 * o2);
          break;
        case "/":
          stack.push(o1 / o2);
          break;
      }
    }
  }
  return stack.pop();
}
console.log(reversePolishNotation([1, 2, "+", 3, 4, 5, "*", "+", "*"]));
