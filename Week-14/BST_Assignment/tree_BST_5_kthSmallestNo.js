// Time : O(k), traveral willl happen till k only
// Space : O(n), recursive calls

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(currRoot, newNode) {
    if (newNode.value < currRoot.value) {
      if (currRoot.left === null) {
        currRoot.left = newNode;
      } else {
        this.insertNode(currRoot.left, newNode);
      }
    } else if (newNode.value > currRoot.value) {
      if (currRoot.right === null) {
        currRoot.right = newNode;
      } else {
        this.insertNode(currRoot.right, newNode);
      }
    }
  }

  findKthSmallestNo(root = this.root, k) {
    let ans = 0;
    let count = 0;

    let inorderTraversal = (node) => {
      if (!node) {
        return;
      }
      inorderTraversal(node.left);
      count++;
      if (count === k) {
        ans = node.value;
        return;
      }

      inorderTraversal(node.right);
    };
    inorderTraversal(root);
    return ans;
  }
}

let tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(4);
tree.insert(2);
tree.insert(9);
tree.insert(8);
tree.insert(7);

console.log(tree.findKthSmallestNo(tree.root, 1));
