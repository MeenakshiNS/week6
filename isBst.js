//note
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function isValidBST(root) {
  return isValidBSTHelper(root, -Infinity, Infinity);
}

function isValidBSTHelper(node, min, max) {
  if (node === null) {
    return true;
  }

  if (node.value <= min || node.value >= max) {
    return false;
  }

  return (
    isValidBSTHelper(node.left, min, node.value) &&
    isValidBSTHelper(node.right, node.value, max)
  );
}

// Create a sample binary search tree
const root = new Node(4);
root.left = new Node(2);
root.right = new Node(6);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(5);
root.right.right = new Node(7);

console.log(isValidBST(root)); // Output: true

//https://youtu.be/H13iz0rbeeo
//https://youtu.be/PkO4Fy2R6Oo