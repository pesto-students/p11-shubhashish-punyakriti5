//Time : O(nlogn)[2*(n/2) finding pivot, 2*O(nlogn) finding partition]
//Space : O(log n)[level of recursion call]

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function appendNode(head, value) {
  const newNode = new ListNode(value);
  if (!head) {
    head = newNode;
  } else {
    let current = head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  return head;
}

function getPivot(head, tail) {
  let slow = head;
  let fast = head;
  while (fast !== tail && fast.next !== tail) {
    fast = fast.next;
    if (fast !== tail) {
      slow = slow.next;
      fast = fast.next;
    }
  }
  return slow;
}

function partition(head, tail) {
  const pivotNode = getPivot(head, tail);
  const pivotValue = pivotNode.val;

  let smaller = head;
  let current = head;

  while (current !== tail) {
    if (current.val < pivotValue) {
      const temp = smaller.val;
      smaller.val = current.val;
      current.val = temp;

      smaller = smaller.next;
    }
    current = current.next;
  }

  const temp = smaller.val;
  smaller.val = pivotNode.val;
  pivotNode.val = temp;

  return smaller;
}

function quickSortLinkedList(head, tail) {
  if (head !== tail) {
    const pivot = partition(head, tail);
    quickSortLinkedList(head, pivot);
    quickSortLinkedList(pivot.next, tail);
  }
  return head;
}

let head = null;
head = appendNode(head, 10);
head = appendNode(head, 9);
head = appendNode(head, 8);
head = appendNode(head, 7);
head = appendNode(head, 6);

head = quickSortLinkedList(head, null);
let curr = head;
while (curr) {
  console.log(curr.val);
  curr = curr.next;
}
