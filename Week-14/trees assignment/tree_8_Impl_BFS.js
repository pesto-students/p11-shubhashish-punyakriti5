 // Time : O(n), traversing all treeNodes
 // Space : O(m), max no. of nodes at any level => worst can be O(n/2)

  function levelOrderTraversal(root) {
    if (!root) {
      return []; 
    }

    const result = [];
    const queue = [root]; 
    while (queue.length > 0) {
      const levelSize = queue.length;
      const currentLevel = [];

      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        currentLevel.push(node.value); 

        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }

      result.push(currentLevel);
    }

    return result;
  }



