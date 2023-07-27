// Time :O(n)
// Space :O(2n)
function reverseQueue(arr) {
  let q1 = new Queue();
  let s1 = new Stack();

  for (let i = 0; i < arr.length; i++) {
    q1.enqueue(arr[i]);
  }

  while (!q1.isQueueEmpty()) {
    s1.push(q1.dequeue());
  }

  while (!s1.isStackEmpty()) {
    q1.enqueue(s1.pop());
  }

  return q1;
}
let arr = [1, 2, 3, 4, 5];
console.log(reverseQueue(arr));
