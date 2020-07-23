// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


const getHeight = root => {
  if (!root) return -1;

  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

const isBalanced = (root) => {
  if (!root) return true;

  let heightDiff = Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
  return heightDiff && isBalanced(root.left) && isBalanced(root.right);
};