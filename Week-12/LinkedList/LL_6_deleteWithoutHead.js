// Time : O(n)[O(n) for generating, O(1) for delete function, O(n) for printing list]
// Space : O(1)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function deleteNode(node) {
  if (node === null) {
    return;
  }
  if (node.next == null) {
    node.value = null;
    return;
  }

  node.value = node.next.value;
  node.next = node.next.next;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const node = head.next.next.next;
deleteNode(node);

let current = head;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
