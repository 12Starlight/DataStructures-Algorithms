/*
Binary Tree Print Order Algorithms:
  Let us begin with three short algorithms that print out the values of our 
  tree.

*/

/*
In-Order:
  Let us begin with the 'inOrderPrint' function. All three of our algorithms
  will be recursive and have the same base case. As always, our base case should
  cover the scenario where the input is trivially small enough so that we do not
  need to perform further calculations. Since our 'propblem' is to print all
  values in a tree, what is the simplest tree we can be given? The empty tree!
  A common mistake when designing recursive tree algorithms is to make the base
  case about the root being a leaf, instead we will want the basecase to cover
  the root being empty:

  function inOrderPrint(root) {
    if (root === null) return;
  }

  Note that taking in an entire tree as input is really just a matter of taking
  in the root node. This is bc the root node can access every other node through
  a path of edges. Our base case sayus, 'if the tree is empty, return since
  there is nothing to pring.'

  Here is where the meat of the algorithm comes in. Given the root of a tree,
  the steps for 'inOrderPrint' are:
    -> print all nodes in the left subtree
    -> print root
    -> print all nodes in the right subtree

*/

const inOrderPrint = (root) => {
  if (!root) return;

  inOrderPrint(root.left);
  console.log(root.val);
  inOrderPrint(root.right);
}

/*
  Given our tree, 'inOrderPrint' would print the values in the order: 'd, b, e,
  a, c, f'

  In-Order has the pattern of left, self, right. This means:
    -> A node can only be printed once it's left subtree has been completely
    printed
    -> A node's right subtree can only be printed once the node iteself has been
    printed

*/


/*
Pre-Order:
  Given the root of a tree, the steps for 'preOrderPrint' are:
    -> print root
    -> print all noes in the left subtree
    -> print all nodes in the right subtree 

*/

const preOrderPrint = (root) => {
  if (!root) return;

  console.log(root.val);
  preOrderPrint(root.left);
  preOrderPrint(root.right);
}

/*
  Given our tree, 'preOrderPrint' would print the values in the order: 'a, b, d
  e, c, f'

  Pre-Order has the pattern of self, left, right. This means:
    -> A node must be printed before it's children
    -> A node's left subtree must be printed before it's right subtree

*/


/*
  Post-Order:
    Given the root of a tree, the steps for 'postOrderPrint' are:
      -> print all nodes in the left subtree
      -> print all nodes in the right subtree
      -> print root

*/

const postOrderPrint = (root) => {
  if (!root) return;

  postOrderPrint(root.left);
  postOrderPrint(root.right);
  console.log(root.val);
}

/*
  Given our Tree, 'postOrderPrint' would print the values in the order: 'd, e,
  b, f, c, a'

  Post-Order has the pattern of left, right, self. This means:
    -> A node can only be printed after it's left and right subtrees
    -> A node's left subtree is printed before it's right subtree

*/