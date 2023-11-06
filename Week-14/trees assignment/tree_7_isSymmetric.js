// Time : O(n), n is no. of treeNodes
// Space : O(1), tail recursion

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function BinaryTree(arr, index = 0) {
  if (index >= arr.length || arr[index] === null) {
    return null;
  }

  const root = new TreeNode(arr[index]);
  root.left = BinaryTree(arr, 2 * index + 1);
  root.right = BinaryTree(arr, 2 * index + 2);
  return root;
}
function isSymmetric(leftTree, rightTree) {
  if (!leftTree && !rightTree) {
    return true;
  }

  if (!leftTree || !rightTree) {
    return false;
  }

  if (leftTree.value !== rightTree.value) {
    return false;
  }
  return (
    isSymmetric(leftTree.left, rightTree.right) &&
    isSymmetric(leftTree.right, rightTree.left)
  );
}

let tree = BinaryTree([1, 2, 2, null, 3, 3, null]);
console.log(isSymmetric(tree.left, tree.right));
