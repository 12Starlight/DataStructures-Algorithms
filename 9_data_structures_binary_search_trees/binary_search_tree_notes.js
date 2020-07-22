/*
Binary Search Trees:
  Now that we have a solid grasp of BINARY TREES, let us add another constraint
  to the data structure. A Binary SEARCH Tree (BST) has an additional criteria
  where:
    -> Given any node of the tree, the values in the left subtree must all be
    strictly less than the given node's value
    -> And the values in the right subtree must all be greater than or equal to 
    the given node's value

BST Definition:
  We can also describe a BST using a recursive definition. A BINARY TREE is a 
  BINARY SEARCH TREE if:
    * The left subtree contains values less than the root
    * AND the right subtree contains values greater than or equal to the root
    * AND the left subtree is a Binary Search Tree
    * AND the right subtree is a Binary Search Tree


  It's worth mentioning that the empty tree (a tree with 0 nodes) is indeed a
  BST (did someone say base case?).

  Remember, a Binary Search tree is NOT a search tree, if a left child is
  greater than it's parent. 

*/

/*
A BST Is A Sorted Data Structure:
  So, what is the big deal with BSTs? Well, because of the properties of a BST,
  we can consider the tree as havling an order to the values. That means the
  values are fully sorted! By looking at the three BST examples above, you are
  probably not convinced of things being sorted. This is bc the ordering is 
  encoded by an inorder traversal. Let us recall our previous 'inOrderPrint'
  function:

  function inOrderPrint(root) {
    if (!root) return;

    inOrderPrint(root.left);
    console.log(root.val);
    inOrderPrint(root.right);
  }


  If we run 'inOrderPrint' on the three BSTs, we will get the following output:
    BST 1: 42
    BST 2: 4, 5, 6
    BST 3: 1, 5, 7, 10, 16, 16


  For each tree, we printed out values in increasing order! A Binary Search Tree
  contains sorted data; this will come into play when we perform algorithms on
  this data structure.

*/

/*
Naive BST Implementation:
  Let us implement a 'BST' class that will maintain the ordered property through
  any number of insertions into the tree. We are going to avoid manually 
  creating all nodes and explicitly setting 'left's and 'right's, so we do not
  have to worry about breaking order. We will use our classic 'TreeNode' as a
  component of 'BST'. In addition, we will need a proper 'BST#insert' method
  that will conduct legal insertions on the tree. 

*/

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

    insert(val, root=this.root) {
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

  inOrderPrint(root=this.root) {
    if (!root) return;

    this.inOrderPrint(root.left);
    console.log(root.val);
    this.inOrderPrint(root.right);
  }
}

/*
We can call 'insert' to build up the 'BST' without worrying about breaking the
search tree property. Let us build two different trees:

*/

let tree1 = new BST();
tree1.insert(10);
tree1.insert(5);
tree1.insert(16);
tree1.insert(1);
tree1.insert(7);
tree1.insert(16);

tree1.inOrderPrint();


let tree2 = new BST();
tree2.insert(1);
tree2.insert(5);
tree2.insert(7);
tree2.insert(10);
tree2.insert(16);
tree2.insert(16);

/*
It is hard not to cringe at Tree2 bc it is just nodes and edges that lead to the
right. Well, you should cringe. Although we ahve the same values in both trees,
they display drastically different structures bc of the insertion order we used.
This is why we have been referring to our 'BST' implementation as NAIVE. Both of
these trees are Binary Search Trees, however not all BSTs are created equal. A
worst case BST degenerates into a linked list. The "best" BSTs are HEIGHT
BALANCED, we will explore this concept soon.

*/