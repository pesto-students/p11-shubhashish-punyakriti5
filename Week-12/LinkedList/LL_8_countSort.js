// Time : O(n)[O(n) generating list+ O(n) for size of list + O(n) for counting ocurrence 0s,1s,2s + O(1) adding values in list + O(n) printing values]
//Space : O(1)[inplace modifications]

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function appendNode(head, value) {
  const newNode = new Node(value);
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
function countSortList(head) {
  let countArr = new Array(3).fill(0);

  let size = 0;
  let currNode = head;
  while (currNode) {
    currNode = currNode.next;
    size++;
  }

  let curr = head;
  for (let i = 0; i < size + 1; i++) {
    while (curr) {
      countArr[curr.value]++;
      curr = curr.next;
    }
  }

  let current = head;
  for (let i = 0; i < countArr.length; i++) {
    while (countArr[i] > 0) {
      current.value = i;
      countArr[i]--;
      current = current.next;
    }
  }

  return head;
}
let head = new Node(2);
appendNode(head, 1);
appendNode(head, 0);
appendNode(head, 1);
appendNode(head, 2);
appendNode(head, 0);

head = countSortList(head);
let curr = head;
while (curr) {
  console.log(curr.value);
  curr = curr.next;
}
