// Time : O(n) [ O(n) for generating list, O(2n)traversal to find intersection]
// Space : O(1)

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function findIntersection(head1, head2) {
  if (head1 === null || head2 === null) return null;
  let h1 = head1;
  let h2 = head2;

  while (h1 !== h2) {
    h1 = h1 === null ? head2 : h1.next;
    h2 = h2 === null ? head1 : h2.next;
  }
  return h1;
}

//Setting intersection point
const intersection = new ListNode(7);
intersection.next = new ListNode(8);

//first linked list
const head1 = new ListNode(1);
head1.next = intersection;

//second linked list
const head2 = new ListNode(5);
head2.next = new ListNode(6);
head2.next.next = intersection;

const intersectionPoint = findIntersection(head1, head2);

if (intersectionPoint) {
  console.log("Intersection Point:", intersectionPoint.value);
} else {
  console.log("No Intersection Point");
}
