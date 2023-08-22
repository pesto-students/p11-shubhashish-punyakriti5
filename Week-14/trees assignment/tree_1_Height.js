// Time : O(n), n is no. of treeNodes and h is height of tree.
// Space : O(h) worst case, O(log n) balanced tree

var maxDepth = function(root) {

  if (!root){
      return 0;
  }

  let leftHeight= maxDepth(root.left);
  let rightHeight = maxDepth(root.right);

  return Math.max(leftHeight,rightHeight)+1;
  
};