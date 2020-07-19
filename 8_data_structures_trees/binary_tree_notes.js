/*
Binary Trees:
  What Is A Graph?
    Before we define what a TREE is, we must first understand the definition of a
    GRAPH. A graph is a collection of NODES and any EDGES between those nodes.
    You have likely seen depictions of graphs before, they usually exist as 
    circles (nodes) and arrows (edges) between those circles. 

    A graph is indeedf a very broad, overarching category. In fact, linked lists
    and trees are both considered subclasses of graphs. It is worth mentioning
    that a single node with no edges is considered a graph. An empty graph with
    out any nodes or edges is also still a graph :)

  What Is A Tree?
    A TREE is a GRAPH that does not contain any cycles. A cycle is defined as a
    path through edges that begins and ends at the same node. This seems 
    straightforward, but the definition becomes a bit muddled as Mathematicians
    and Computer Scientist use the term 'tree' in slightly different ways. Lets
    break it down:
      -> To a Mathematician, graphs 1,2,3 and 4 in the above image are trees
      -> to a Computer Scientist, only graphs 1,2 and 3 are trees

    Well, at least both camps agree that graph 5 is most certainly not a tree! 
    This is bc of the obvious cycle that spans all three nodes. However, why is 
    there disagreement over graph 4? The reason is this: In computer science, we
    use the term 'tree' to really refer to a 'rooted tree.' A 'rooted tree' is
    a 'tree' where there exists a special node from which every other nde is
    accessible; we call this special node the 'root'.Think of the root as the 
    ultimate ancestor, the single node that all other nodes inherit from. 

*/

/*
What Is A Binary Tree?
  A BINARY TREE is a TREE where nodes have 'at most 2 children.' This means
  graphs 1, 2, and 3 are all Binary Trees. There exist ternary trees (at most 3
  children) and n-ary trees (at most n children), but you are likely to
  encounter binary trees in your job hunt, so we will focus on them in this
  course. Based on our final definition for a binary tree, here is some food for
  thought:
    -> An empty graph of 0 nodes and 0 edges is a binary tree
    -> A graph of 1 node and 0 edges is a binary tree
    -> A linked list is a binary tree

*/

/*
Representing A Tree With Node Instances:
  Let us explore a common way to represent Binary Trees using some object
  oriented design. A tree is a collection of nodes, so let us implement a 
  'TreeNode' class. We will use properties of 'left' and 'right' to reference
  the children of a 'TreeNode.' That is, 'left' and 'right' will reference other
  'TreeNode's:

*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/*
Constructing a tree is a matter of creating the nodes and setting 'left' and
'right' however we please. For Example: 

*/

let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

/*
Moving forward you can assume that the top node is the root and the direction of
edges points downward. In other words, node A is the Root. Node A can access
node B through 'a.left', but Node B cannot access Node A. 

*/

/*
Basic Tree Terminology:
  -> tree - graph with no cycles
  -> binary tree - tree where nodes have at most 2 nodes
  -> root - the ultimate parent, the single node of a tree that can access every
  other node through edges; by definition the root will not have a parent
  -> internal node - a node that has children
  -> leaf - a node that does not have any children
  -> path - a series of nodes that can be traveled through edges - for example A,
  B, E is a pth through the above tree


*/