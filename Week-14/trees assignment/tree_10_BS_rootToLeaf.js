// Time : O(n), traversing each node once
// Space : O(h) ranges to O(log n) to O(n), recursive call stack height

class TreeNode {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  class BinaryTree {
    constructor() {
      this.root = null;
    }
    insert(value) {
      if (!this.root) {
        this.root = new TreeNode(value);
      } else {
        let q = [this.root];
  
        while (q.length !== 0) {
          let node = q.shift();
  
          if (node.left == null) {
            node.left = new TreeNode(value);
            break;
          } else q.push(node.left);
  
          if (node.right == null) {
            node.right = new TreeNode(value);
            break;
          } else q.push(node.right);
        }
      }
    }
    rootToLeafSumPath(root,sum){
      if (!root)  {
        return false;
      }
      sum-=root.value;
      console.log(sum, "sum")
      if (root.left === null && root.right === null && sum===0){
        return true;
      }
     let leftTree= this.rootToLeafSumPath(root.left,sum);
      let rightTree=this.rootToLeafSumPath(root.right,sum);

      return leftTree || rightTree;
      
    }

}
let tree= new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);
tree.insert(8);
    
console.log(tree.rootToLeafSumPath(tree.root,12))
    
