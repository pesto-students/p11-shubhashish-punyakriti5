// Time : O(n), n is no. of treeNodes and h is height of tree.
// Space : O(h) worst case, O(log n) balanced tree

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
  function countLeafNodes(root) {
    if (!root) {
      return 0;
    }

    if (root.left === null || root.right === null) {
      return 1;
    }
    return countLeafNodes(root.left) + countLeafNodes(root.right);
  }

