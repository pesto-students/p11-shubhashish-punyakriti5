// Time : O(n) n is no. of treeNodes
// Space : O(h), height of tree

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
  function swap(root) {
    if (!root) {
      return;
    }
    if (root.left !== null || root.right !== null) {
      let temp = root.left;
      root.left = root.right;
      root.right = temp;
    }

    swap(root.left);
    swap(root.right);
  }

  function invertBinaryTree(root) {
    swap(root);
    return root;
  }


