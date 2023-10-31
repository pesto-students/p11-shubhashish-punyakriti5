 // Time : O(n) inorderTraveral of bst
 // Space : O(n), linked list and function call stack for the recursive calls

class ListNode {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}
class TreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

function treeNodeToLinkedList(root) {
  if (!root) {
    return null;
  }
  let dummy = new ListNode(null);
  let current = dummy;
  
  function inorderTraversal(root) {
    if (!root) {
      return null;
    }
    inorderTraversal(root.left);
    let newNode = new ListNode(root.value);
    current.next = newNode;
    current = newNode;
    inorderTraversal(root.right);
  }
  inorderTraversal(root);
  return dummy.next;
}

let bst = new TreeNode(10);
bst.left = new TreeNode(8);
bst.right = new TreeNode(18);
bst.left.left = new TreeNode(6);
bst.left.right = new TreeNode(9);
bst.right.left = new TreeNode(15);
bst.right.right = new TreeNode(20);

let head=treeNodeToLinkedList(bst);

let current= head
while(current){
    console.log(current.value);
    current=current.next;
    
}


