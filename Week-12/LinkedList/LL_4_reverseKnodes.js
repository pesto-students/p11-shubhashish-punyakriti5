// given a linked list, reverse every k nodes

//Time : O(n)[traversed every node while reversing ]
//Space : O(1)[tail recursion]

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

//generate linkedList with consecutive values:1->2->3
const k = 3;
const inputList = new ListNode(1);
let current = inputList;
for (let i = 2; i <= 8; i++) {
  current.next = new ListNode(i);
  current = current.next;
}

function reverseKNodes(head, k) {
  if (!head || k <= 1) {
    return head;
  }

  let current = head;
  let prev = null;
  let count = 0;

  while (current && count < k) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
    count++;
  }

  head.next = reverseKNodes(current, k);
  return prev;
}

const reversedList = reverseKNodes(inputList, k);

let curr = reversedList;
while (curr) {
  console.log(curr.value);
  curr = curr.next;
}
