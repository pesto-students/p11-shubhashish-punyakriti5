// Time : O(n), traversing all treeNodes
// Space : O(h), height of recursive call stack

  function findLCA(root, n1, n2) {
    if (!root) {
      return null; 
    }
    // returns only n1 or n2 value if exists
    if (root.value === n1.value || root.value === n2.value) {
      return root.value;
    }
   
    const leftLCA = this.findLCA(root.left, n1, n2);
    const rightLCA = this.findLCA(root.right, n1, n2);
    
    
    if (leftLCA !== null && rightLCA !== null) {
      return root.value;
    }
    //The conditional expression leftLCA !== null checks if leftLCA is not null. If it's not null, it means that either n1 or n2 was found in the left subtree.
    return leftLCA !== null ? leftLCA : rightLCA;
  }
