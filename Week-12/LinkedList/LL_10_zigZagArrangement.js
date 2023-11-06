// Time : O(n) [O(n) for appendNode+ O(n) for zigzag funtion + O(n) for printing reaaranged list].
// Space : O(1) [inplace modifications]

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

function zigZagArrangement(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let currNode = head;
  let flag = true;
  while (currNode && currNode.next) {
    let value1 = currNode.value;
    let value2 = currNode.next.value;

    if ((flag && value1 > value2) || (!flag && value1 < value2)) {
      currNode.value = value2;
      currNode.next.value = value1;
    }
    currNode = currNode.next;
    flag = !flag;
  }
  return head;
}

let head = new Node(4);
appendNode(head, 3);
appendNode(head, 7);
appendNode(head, 8);
appendNode(head, 6);
appendNode(head, 2);
appendNode(head, 1);

head = zigZagArrangement(head);

let curr = head;
while (curr) {
  console.log(curr.value);
  curr = curr.next;
}
