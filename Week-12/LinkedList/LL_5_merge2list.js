// Time : O(l1+l2) [traversing both lists], O(l1)+O(l2) generating both lists, O(l1+l2) printing answer]
// Space : O(1) [no external space l1 and l2 pointers are changing and pointing at each other]

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function merge2list(l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  if (l1.value > l2.value) {
    let temp = l2;
    l2 = l1;
    l1 = temp;
  }
  let res = l1;
  let curr = new Node(0);
  while (l1 != null && l2 != null) {
    if (l1 != null && l1.value <= l2.value) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  if (l1 !== null) {
    curr.next = l1;
  }
  if (l2 !== null) {
    curr.next = l2;
  }
  return res;
}

let l1 = new Node(2);
l1.next = new Node(4);
l1.next.next = new Node(6);

let l2 = new Node(1);
l2.next = new Node(3);
l2.next.next = new Node(7);

let newHead = merge2list(l1, l2);
let current = newHead;
while (current != null) {
  console.log(current.value);
  current = current.next;
}
