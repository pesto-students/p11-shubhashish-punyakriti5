// Time : O(m*n),where m is treeNodes of main tree and n is treeNodes of subtree
// Space : O(h), h is maxDepth for main tree.

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function createBinaryTree(arr, index = 0) {
  if (index >= arr.length || arr[index] === null) {
    return null;
  }

  const root = new TreeNode(arr[index]);
  root.left = createBinaryTree(arr, 2 * index + 1);
  root.right = createBinaryTree(arr, 2 * index + 2);
  return root;
}

function isIdenticalTree(tree, subtree) {
  if (!tree && !subtree) {
    return true;
  }

  if (!tree || !subtree) {
    return false;
  }

  return (
    tree.val === subtree.val &&
    isIdenticalTree(tree.left, subtree.left) &&
    isIdenticalTree(tree.right, subtree.right)
  );
}

function isSubtree(tree, subtree) {
  if (!subtree) {
    return true;
  }

  if (!tree) {
    return false;
  }

  if (isIdenticalTree(tree, subtree)) {
    return true;
  }

  return isSubtree(tree.left, subtree) || isSubtree(tree.right, subtree);
}

const tree = createBinaryTree([3, 4, 5, 1, 2, 6, 7, 8, 9]);
const subtree = createBinaryTree([4, 1, 2, 8, 9]);

console.log(isSubtree(tree, subtree));
