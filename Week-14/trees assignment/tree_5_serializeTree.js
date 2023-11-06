// Time : O(n), n is no. of treeNodes and h is height of tree.
// Space : O(h) worst case, O(log n) balanced tree

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function serializeTree(root) {
  if (!root) {
    return "null ";
  }

  let res = "";
  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();
    //res += node.value !== null ? node.value + " " : "null ";
    if (!node) {
      res += "null ";
      continue;
    }

    res += node.value + " ";

    queue.push(node.left);
    queue.push(node.right);
  }
  return res;
}

let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.right.left = new TreeNode(4);
tree.right.right = new TreeNode(5);

console.log(serializeTree(tree));
