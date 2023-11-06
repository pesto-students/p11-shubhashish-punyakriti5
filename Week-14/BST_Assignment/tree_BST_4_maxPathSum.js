// Time : O(n)
// Space : O(n)

class TreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
function findMaxPathSum(root) {
  let maxSum = -Infinity;
  function maxPathSum(node) {
    if (!node) {
      return 0;
    }
    const leftSum = Math.max(0, maxPathSum(node.left));
    const rightSum = Math.max(0, maxPathSum(node.right));

    const currentSum = node.value + leftSum + rightSum;
    maxSum = Math.max(maxSum, currentSum);
    return node.value + Math.max(leftSum, rightSum);
  }
  maxPathSum(root);
  return maxSum;
}

let bst = new TreeNode(-10);
bst.left = new TreeNode(12);
bst.right = new TreeNode(20);
bst.right.left = new TreeNode(16);
bst.right.right = new TreeNode(-7);

console.log(findMaxPathSum(bst)); 
