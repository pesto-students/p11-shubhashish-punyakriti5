// Time :O(n)[n traversal for inserting in evenqueue &oddQueue ]
// Space :O(2n)

class Queue {
  constructor() {
    this.items = [];
    this.size = 0;
  }
  getsize() {
    return this.size;
  }
  isQueueEmpty() {
    return this.size === 0;
  }
  enqueue(ele) {
    this.items.push(ele);
    this.size = this.size + 1;
  }

  dequeue() {
    if (this.isQueueEmpty()) {
      throw new Error("queue is empty");
    }
    let removedData = this.items[0];
    this.items.shift();
    this.size = this.size - 1;
    return removedData;
  }
  peek() {
    if (this.isQueueEmpty()) {
      throw new Error("queue is empty");
    }
    return this.items[0];
  }
}

function evenOddRearrangement(arr) {
  let q1 = new Queue();
  let evenQueue = new Queue();
  let oddQueue = new Queue();

  for (let i = 0; i < arr.length; i++) {
    q1.enqueue(arr[i]);
  }

  const size = q1.getsize();
  for (let i = 1; i <= size; i++) {
    if (q1.peek() % 2 === 0) {
      evenQueue.enqueue(q1.dequeue());
    } else {
      oddQueue.enqueue(q1.dequeue());
    }
  }

  while (!oddQueue.isQueueEmpty()) {
    evenQueue.enqueue(oddQueue.dequeue());
  }
  return evenQueue;
}

let arr = [5, 2, 8, 3, 9, 4];
console.log(evenOddRearrangement(arr));
