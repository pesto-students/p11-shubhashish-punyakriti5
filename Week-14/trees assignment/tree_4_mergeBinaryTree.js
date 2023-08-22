// Time : O(Max(n1,n2))
// Space : O(Max(n1,n2)), n1- tree1_nodes, n2- tree2_nodes

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}



  function mergeBinaryTree(tree1, tree2) {
    if (tree1 === null && tree2 === null) {
      return null;
    }
    if (tree1 === null) {
      return tree2;
    }
    if (tree2 === null) {
      return tree1;
    }

    let val1 = tree1.value !== null ? tree1.value : 0;
    let val2 = tree2.value !== null ? tree2.value : 0;

    const mergedNode = new TreeNode(val1 + val2);

    mergedNode.left = this.mergeBinaryTree(tree1.left, tree2.left);
    mergedNode.right = this.mergeBinaryTree(tree1.right, tree2.right);

    return mergedNode;
  }

