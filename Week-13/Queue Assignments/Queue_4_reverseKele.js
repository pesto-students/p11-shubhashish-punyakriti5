//Time : O(n)
// Space : O(3n)

function reverseKelement(arr, k) {
  let q1 = new Queue();
  let s1 = new Stack();
  let q2 = new Queue();
  

  for (let i = 0; i < arr.length; i++) {
    q1.enqueue(arr[i]);
  }

  if (k > q1.getsize()) {
    throw new Error("value of k exceeds size of queue");
  }
  for (let i = 1; i <= k; i++) {
    s1.push(q1.dequeue());
  }

  while (!s1.isStackEmpty()) {
    q2.enqueue(s1.pop());
  }

  while (!q1.isQueueEmpty()) {
    q2.enqueue(q1.dequeue());
  }
  
  //[this.q1, this.q2] = [this.q2, this.q1];(swapping not working in a case we have to return q1)
  return q2;
}
let arr = [1, 2, 3, 4, 5];
console.log(reverseKelement(arr, 2));
