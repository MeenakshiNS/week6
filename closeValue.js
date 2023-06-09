class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findClosestValue(root, target) {
    let closestValue = root.value;
    let minDifference = Math.abs(target - root.value);
    
    function traverse(node) {
      if (node === null) {
        return;
      }
      
      const difference = Math.abs(target - node.value);
      
      if (difference < minDifference) {
        closestValue = node.value;
        minDifference = difference;
      }
      
      if (target < node.value) {
        traverse(node.left);
      } else if (target > node.value) {
        traverse(node.right);
      }
    }
    
    traverse(root);
    
    return closestValue;
  }
  
  const root = new Node(4);
  root.left = new Node(2);
  root.right = new Node(5);
  root.left.left = new Node(1);
  root.left.right = new Node(3);
  
  const target = 3.7;
  const closestValue = findClosestValue(root, target);
  console.log(closestValue);
