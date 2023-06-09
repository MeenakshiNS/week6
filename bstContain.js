//bst contains method
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  function containsValue(root, target) {
    if (root === null) {
      return false;
    }
    
    if (root.value === target) {
      return true;
    }
    
    return containsValue(root.left, target) || containsValue(root.right, target);
  }
  
  const root = new Node(4);
  root.left = new Node(2);
  root.right = new Node(6);
  root.left.left = new Node(1);
  root.left.right = new Node(3);
  root.right.left = new Node(5);
  root.right.right = new Node(7);
  
  const target = 5;
  const containsTarget = containsValue(root, target);
  console.log(containsTarget);
  