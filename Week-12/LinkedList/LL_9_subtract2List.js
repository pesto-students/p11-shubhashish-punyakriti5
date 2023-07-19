// Time : O(n) [O(max(n,m) for generating lists, O(n) for adding nodes in answer list, O(n) to print answer]
// Space : O(n) [new answer list created]

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function subtractList(head1, head2) {
  let newHead = new Node(0);
  let newNode = newHead;
  let borrow = 0;

  while (head1 !== null || head2 !== null || borrow === 1) {
    let value1 = head1 !== null ? head1.value : 0;
    let value2 = head2 !== null ? head2.value : 0;
    newNode.value = value1 - value2 - borrow;
    borrow = 0;

    if (newNode.value < 0) {
      borrow = 1;
      newNode.value = (newNode.value + 10) % 10;
    }

    head1 = head1 !== null ? head1.next : null;
    head2 = head2 !== null ? head2.next : null;

    if (head1 !== null || head2 !== null || borrow === 1) {
      newNode.next = new Node(0);
      newNode = newNode.next;
    }
  }
  return newHead;
}

let head1 = new Node(2);
head1.next = new Node(4);
head1.next.next = new Node(3);

let head2 = new Node(7);
head2.next = new Node(5);
head2.next.next = new Node(1);

let newHead = subtractList(head1, head2);

let curr = newHead;
while (curr) {
  console.log(curr.value);
  curr = curr.next;
}
