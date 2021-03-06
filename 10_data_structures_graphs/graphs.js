/*
Graphs:
  It is time to generalize our knowledge! We have explored Binary Trees and the
  fundamental algorithms that accompany them. Naturally, we implemented these
  algorithms assuming the constraints of a Binary Tree. To review, these
  assumptions include lack of cycles, a maximum of two children, and a single
  root node. However, what if we take away these constraints? How can we modify
  the algorithms to operate on general graphs?

What Is A Graph?
  A GRAPH is ANY collection of nodes and edges. In contrast to our previous
  trees, a graph is much more relaxed in it's structure. A graph may:
    -> Lack a root node
    -> Have cycles
    -> Have any number of edges leaving a node
    
    
  In this section, we will draw heavily from our tree algorithms. The 
  adjustments we will make to those algorithms will be motivated by these core
  differences.

  Here are some highlights:
    * 'Graph 1' lacks a root. This means there is no single node that can access
    all other nodes in a path through edges. This is important bc we previously
    referenced 'entire' trees by referring to the ultimate root. We can no
    longer do that in a graph. If we provide just 'T', you can not access 'U'.
    If we provide just 'U', you can not access 'T'. If we provide just 'V', you
    can not access 'T' or 'U'.

    * 'Graph 2' has a cycle. This means there is longer a parent-child 
    relationship. Choose any node in 'Graph 2', its grandchild will also be its
    parent. Wait - what? From now on we will have to use less specific language
    such as 'X' is a neighbor of 'Y'. Perhaps even more deadly, imagine we ran a
    'simple' Depth-First traversal on this graph. We could get trapped in an
    infinite loop, if we are not careful.

    * 'Graph 3' features nodes that have more than 2 edges. Anarchy!

*/

/*
Graph Implementations:
  There are many ways to represent a graph programmatically. Let us take a
  moment to explore each and describe the tradeoffs we make when choosing among
  them. We will use 'Graph 3' from above as our candidate. Bear in mind that our
  graph is directed. For example, this means that 'C' can access 'D', but 'D'
  can not access 'C'.

Graph Node Class
  This implementation is most similar to how we implemented Binary Trees. That
  is, we create a node class that maintains a value and an array of references
  to neighboring nodes. This easily solves the problem that a node can have any
  number of neighbors, no longer just a left and right.

*/

class GraphNode {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

let a = new GraphNode('a');
let b = new GraphNode('b');
let c = new GraphNode('c');
let d = new GraphNode('d');
let e = new GraphNode('e');
let f = new GraphNode('f');

a.neighbors = [b, c, e];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];

/*
  This implementation is great bc it feels familiar to how we implemented trees.
  However, this implementation is clunky in that we have no easy way to refer to
  the entire graph. How can we pass this graph to a function? Recall that there
  is no root to act as the definite starting point. 

*/

/*
Adjacency Matrix:
  This is often the mathematician's preferred way of representing a graph. We
  use a 2D array to represent edges. We will first map each node's value to an
  index. This means 'A -> 0', 'B -> 1', 'C -> 2', etc. Below is the mapping for
  'Graph 3':

  From here, the row index will correspond to the source of an edge and the
  column index will correspond to its destination. A value of 'true' will mean
  that there does exist an edge from source to destination.

*/

let matrix = [
  /*        A     B     C     D     E     F    */
/*A*/   [true, true, true, false, true, false],  
/*B*/   [false, true, false, false, false, false],
/*C*/   [false, true, true, true, false, false],
/*D*/   [false, false, false, true, false, false],
/*E*/   [true, false, false, false, true, false],
/*F*/   [false, false, false, false, true, true]
];

/*
A few things to note about using an adjacency matrix:
  -> When the edges have direction, 'matrix[i][j]' may not be the same as
  'matrix[j][i]'
  -> It is common to say that a node is adjacent to iteself, so 
  'matrix[x][x] === true' for any 'x'


An advantage of the matrix implementation is that it allows us to refer to the
entire graph by simply referring to the 2D array. A huge disadvantage of using
a matrix is the space required. To represent a graph of n nodes, we must 
allocate n^2 space for the 2D array. This is even more upsetting when there are
few edges in a graph. We will have to use n^2 space, even though the array would
be sparse with only a few 'true' elements. 

*/

/*
Adjacency List:
  An adjaceny list seeks to solve the shortcommings of the matrix implemenation.
  We use an object where keys represent the node labels. The values associated 
  with the keys will be an array containing all adjacent nodes:

*/

let graph = {
  'a': ['b', 'c', 'e'],
  'b': [],
  'c': ['b', 'd'],
  'd': [],
  'e': ['a'],
  'f': ['e']
};

/*
  An adjacency list is easy to implement and allows us to refer to the entire
  graph by simply referencing the object. The space required for an adjacency
  list is the number of edges in the graph. Since there will be at most n^2
  edges in a graph of n nodes, the adjaceny list will use at most the same
  amount of space as the matrix. You will find adjaceny lists useful when
  attacking problems that are not explicitly about graphs. We will elaborate
  more on this soon.

*/