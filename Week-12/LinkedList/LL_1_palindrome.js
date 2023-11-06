// Time : O(n) [ O(n/2) find mid, O(n/2) reverse second half, O(n) traverse to check equality of values]
// Space :O(1)

class Nodes {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }
  isEmpty() {
    return this.size === 0;
  }
  sizeLL() {
    return this.size;
  }

  addFirst(value) {
    let currNode = new Nodes(value);
    if (this.isEmpty()) {
      this.head = currNode;
      this.tail = currNode;
    } else {
      currNode.next = this.head;
      this.head = currNode;
    }
    this.size++;
    return;
  }
  checkPalindrome() {
    if (this.head == null || this.head.next == null) {
      return true;
    }
    let fast = this.head;
    let slow = this.head;
    let prevNode = null;

    //find mid
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }

    //reverse second half
    while (slow != null) {
      const nextNode = slow.next;
      slow.next = prevNode;
      prevNode = slow;
      slow = nextNode;
    }

    let isPalindrome = true;
    let half1 = this.head;
    let half2 = prevNode;
    while (half2 !== null) {
      if (half2.value !== half1.value) {
        isPalindrome = false;
        break;
      }
      half1 = half1.next;
      half2 = half2.next;
    }

    return isPalindrome;
  }
}

let list = new LL();
list.addFirst(5);
list.addFirst(4);
list.addFirst(3);
list.addFirst(4);
list.addFirst(5);
console.log(list.checkPalindrome());
