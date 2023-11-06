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
  
  class Stack {
    constructor() {
      this.queue = new Queue();
      this.size = 0;
    }
  
    getsize() {
      return this.size;
    }
  
    isStackEmpty() {
      return this.queue.size === 0;
    }
  
    push(value) {
      this.queue.enqueue(value);
      for (let i = 0; i < this.queue.size - 1; i++) {
        this.queue.enqueue(this.queue.dequeue());
      }
  
      this.size = this.size + 1;
    }
  
    pop() {
      if (this.isStackEmpty()) {
        throw new Error("stack is empty");
      } else {
        let removedData = this.queue.dequeue();
        this.size = this.size - 1;
        return removedData;
      }
    }
  
    peek() {
      if (this.isStackEmpty()) {
        throw new Error("Stack is empty");
      }
  
      let tempQueue = new Queue();
      let peekedElement;
  
      while (!this.isStackEmpty()) {
        peekedElement = this.queue.dequeue();
        tempQueue.enqueue(peekedElement);
      }
  
      while (!tempQueue.isEmpty()) {
        this.queue.enqueue(tempQueue.dequeue());
      }
  
      return peekedElement;
    }
  }
  