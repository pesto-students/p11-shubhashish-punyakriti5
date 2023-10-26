// Time : O(n), dfs traversal for both trees
// Space : O(n), recursive calls

class TreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

function isIdentical(root1, root2) {
  if (!root1 && !root2) {
    return true;
  }
  if (!root1 || !root2 || root1.value !== root2.value) {
    return false;
  }
  let leftTree=isIdentical(root1.left, root2.left);
  let rightTree=isIdentical(root1.right, root2.right);
  return leftTree && rightTree;
}

let bst1 = new TreeNode(10);
bst1.left = new TreeNode(8);
bst1.right = new TreeNode(18);
bst1.left.left = new TreeNode(6);
bst1.left.right = new TreeNode(9);

let bst2 = new TreeNode(10);
bst2.left = new TreeNode(8);
bst2.right = new TreeNode(18);
bst2.left.left = new TreeNode(6);
bst2.left.right = new TreeNode(9);

console.log(isIdentical(bst1, bst2));
