// Time : O(n) once traveral for each node
// Space : O(n),recursive calls

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isBinarySearchTree(root) {
  if (!root) {
    return true;
  }

  if (root.left && root.value < root.left.value) {
    return false;
  }
  if (root.right && root.value > root.right.value) {
    return false;
  }
  if (!isBinarySearchTree(root.left) || !isBinarySearchTree(root.right)) {
    return false;
  }
  return true;
}

let bst = new TreeNode(10);
bst.left = new TreeNode(8);
bst.right = new TreeNode(18);
bst.left.left = new TreeNode(6);
bst.left.right = new TreeNode(9);
bst.right.left = new TreeNode(15);
bst.right.right = new TreeNode(20);

console.log(isBinarySearchTree(bst));
