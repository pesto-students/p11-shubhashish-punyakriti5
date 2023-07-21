//Time : O(n), n traversal
//Space : O(n), n is no. of nodes

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function removeDuplicates(head) {
  let set = new Set();
  let currNode = head;
  let prevNode = null;

  while (currNode != null) {
    if (set.has(currNode.value)) {
      prevNode.next = currNode.next;
    } else {
      set.add(currNode.value);
      prevNode = currNode;
    }
    currNode = currNode.next;
  }
  return head;
}
let head = new Node(2);
head.next = new Node(3);
head.next.next = new Node(2);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(3);
removeDuplicates(head);
let curr = head;
while (curr != null) {
  console.log(curr.value);
  curr = curr.next;
}
