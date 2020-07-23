/*
Searching and Balanced BSTs:
  Let us explore the main application of Binary Search Tree. Since a BST is a
  sorted data structure, this allows us to conduct the Binary Search algorithm.
  This algorithm will be similar to the same Binary Search strategy we used on
  sorted arrays!

*/

/*
Implementing Binary Search On A BST:
  Our goal is to implement a '#search' method on our previous 'BST' class that
  will solve the problem:

    'Given a Binary Search Tree and a target value, return a boolean indicating
    whether or not the target is contained in the tree.'

  
  In other words, our 'BST#search' should satisfy the following behavior:

  let tree = new BST();
  tree.insert(10);
  tree.insert(5);
  tree.insert(16);
  tree.insert(1);   n   
  tree.insert(7);
  tree.insert(16);

  tree.search(7);   // true
  tree.search(16);  // true
  tree.search(14);  // false


  As with many tree problems, this problem lends itself nicely to recursion!
  Like always, our base case should capture the scenario where the input tree is
  trivial and we know the answer to the problem without further calculation. If
  the given tree is empty, then we can be certain that the target is not found 
  in the tree. The logic of our 'BST#search' method will be much the same
  compared to our 'binarySearch' function for sorted arrays.

*/

// assuming our BST class from the previous section
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


class BST {
  constructor() {
    // initialize the tree to be empty
    this.root = null;
  }

  insert(val, root = this.root) {
    // if the tree is currently empty, then create the node as the 'absolute'
    // root
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    // otherwise, the tree is not empty, so...
    // if our val to insert is less than the root...
    if (val < root.val) {
      if (!root.left) {                 // ...and the left child does not exit,
        root.left = new TreeNode(val);  //  then create the node as the left child
      } else {                          // ...and the left child already exists,
        this.insert(val, root.left);    //  then recursively insert on the left subtree
      }

      // if our val to insert is greater than or equal to the root...
    } else {
      if (!root.right) {                // ...and the right child does not exist,
        root.right = new TreeNode(val); //   then create the node as the right child
      } else {                          // ...and the right child already exists,
        this.insert(val, root.right);   //   then recursively insert on the right subtree
      }
    }
  }

  search(val, root=this.root) {
    // if the tree is empty, then the target val is not in the tree, so return false
    if (!root) return false;

    // otherwise the tree is not empty, so...
    if (val < root.val) {
      // if the target is less than the root, then search the left subtree
      return this.search(val, root.left);
    } else if (val > root.val) {
      // if the target is greater than the root, then search the right subtree
      return this.search(val, root.right);
    } else {
      // otherwise, the target must be equal to the root. So, return true since
      // we found it!
      return true;
    }
  }

  inOrderPrint(root = this.root) {
    if (!root) return;

    this.inOrderPrint(root.left);
    console.log(root.val);
    this.inOrderPrint(root.right);
  }
}


/*
Height Balance:
  Before we analyze the time complexity of 'BST#search', we will first need to
  learn about height balance. Recalling what we touched on briefly in our chat on
  Binary Trees, HEIGHT is defined as the number of edges between the root and the
  farthest leaf in a tree. Note that height is dictated by the FARTHEST leaf 
  (think worst case):

  Following this definition, a tree consisting of a single node has a height of 0.
  We consider then an empty tree as having a height of -1. Height is relavant bc
  not all BSTs are created equal! That is, some BSTs have "good/small" heights,
  others have "bad/large" heights. Take a look at these two BSTs containing
  identical values, but very different heights:

  'Tree 1' is preferred over 'Tree 2', bc 'Tree 1' is BALANCED. Balanced Binary
  Trees will be the most efficient to perform operations on.

  For a binary tree to be BALANCED:
    -> The left and right subtrees must differ in height by at most 1
    -> AND the left subtree is balanced
    -> AND the right subtree is balanced

  Notice that BALANCED has a recursive definition. Like you probably guessed, the
  empty tree is considered balanced. This will be the base case of our definition.

*/

/*
Only The Best Trees Have Logs:
  A balanced binary tree is incredible to have bc it's height is guaranteed to
  be 'O(log2(n))', where n is the number of nodes in the tree. Let us take a
  look at a few examples:

  To make the approximations above, we rounded the result of each log down to
  the nearest integer. If you are not convinced of how powerful this is, this
  means that a balanced tree of 1000 nodes will have a height of just 10.

*/

/*
Time Complexity Analysis Of Binary Search For BSTs:
  Worst case for the algorithm occurs when the target value is not present in
  the tree. This means that we must traverse a path from root to a leaf, so we
  must travel the full HEIGHT of the tree in the worst case. However, like we
  discussed, the height of a tree can vary wildly. We can have a tree with 
  minimal height (a blanced tree like 'Tree 1'), or we can have a tree with
  maximal height (a linked list like 'Tree 2').
    -> 'O(log(n))' time for a balanced tree
    -> 'O(n)' time for unbalanced tree

*/

/*
Space Complexity Analysis Of Binary Search For BSTs:
  No additional space is needed for the algorithm, so we have constant 'O(1)'
  space.

  To play devil's advocate, what if we count the recursive stack calls as 
  contributing to the space complexity? Some coding challenges in your job hunt
  may pose this. If that is the case then our recursive implementation above
  will use:
    * 'O(log(n)) space for a balanced tree
    * 'O(n)' space for unbalanced tree


  To truly get constant space out of Binary Search, we are going to have to
  avoid recursion. Can you think of how we can write the algorithm iteratively?
  We will save this for the upcomming project :)  

*/