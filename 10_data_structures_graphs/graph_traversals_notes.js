/*
Graph Traversals:
  Let us explore our classic Depth-First, but for GRAPHS this time! We will be
  utilizing the 'GraphNode' and 'Adjacency List' implementations of the
  following graph: (Graph 3 from graphs.js)

  Since we already discussed the differences between Depth-First and 
  Breadth-First, we will focus on Depth-First here. We will leave the
  Breadth-First exploration in the upcomming project.

*/

/*
Graph Traversal w/ GraphNode
  Let us begin by assuming we have our candidate graph implemented using our
  'GraphNode' class:

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

a.neighbors = [e, c, b];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];

/*
  One thing we will have to decide on is what node to begin our traversal. 
  Depending on the structure of the graph, there may not be a suitable starting
  point. Remember that a graph may not have a 'root'. However, in our candidate,
  'F' is like a root. It is the only valid choice bc it is the only node that may
  access all other nodes through some path of edges. We admit, the choice of 'F'
  is somewhat contrived an in a practical setting you may not have a nice starting
  point like this. We will cover how to overcome this obstacle soon. For now we
  will take 'F'.

  We want to build aa recursive 'depthFirstRecur' function that accepts a node
  and performs a Depth-First traversal through the graph. Let us begin with a
  baseline solution, although it is not yet complete to handle all graphs:

  // broken
  const depthFirstRecur = (node) => {
    console.log(node.val);

    node.neighbors.forEach(neighbor => {
      depthFirstRecur(neighbor);
    });
  }

  depthFirstRecur(f);


  Can you see where this code goes wrong? It will get caught in an infinite cycle
  'f, e, a, e, a, e, a, e ...'! To fix this, simply store which nodes we have
  visited already. Whenever we hit a node that has previously been visited, then
  return early. We will use JavaScript Sets to store 'visited' bc they allow for 
  constant time lookup. 

*/

// Quick Set() Exercise
const array = [1,1,2,2,3,4,5,4];

const noDuplicates = (arr) => {
  return [...new Set(arr)];
}

console.log(noDuplicates(array));
let arr = noDuplicates(array);
console.log(arr[2]);

// using GraphNode representation
const depthFirstRecur(node, visted = new Set()) {
  // if this node as has already been visited, then return early
  if (visted.has(node.val)) return;

  // otherwise it has not yet been visited, so print it's val and mark it as
  // visited
  console.log(node.val);
  visited.add(node.val);

  // then explore each of its neighbors
  node.neighbors.forEach(neighbor => {
    depthFirstRecur(neighbor, visited);
  });
}

depthFirstRecur(f);

/*
This code works well and will print the values in the order 'f, e, a, c, b, d'.
Note that this strategy only works if the values are guarenteed to be unique.

If you are averse to recursion (do not be), we can write an iterative version
using the same principles:

*/

const depthFirstIter = (node) => {
  let visited = new Set();
  let stack = [ node ];

  while (stack.length) {
    let node = stack.pop();

    // if this node has already been visited, then skip this node
    if (visited.has(node.val)) continue;

    // otherwise it has not yet been visited, so print it's val and mark it as
    // visited
    console.log(node.val);
    visited.add(node.val);

    // then add its neighbors to the stack to be explored
    stack.push(...node.neighbors);
  }
}

depthFirstIter(f);