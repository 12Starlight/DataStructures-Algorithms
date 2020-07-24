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


/*
Graph Traversal w/ Adjacency List:
  Let us now assume our candidate graph in the form of an Adjacency List:

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
  Bear in mind that the nodes are just strings now, not 'GraphNode's. Other than
  that, the code shares many details from our previous implementations:

*/

// using Adjacency List representation
const depthFirstRecur = (node, graph, visited = new Set()) {
  if (visited.has(node)) return;

  console.log(node);
  visited.add(node);

  graph[node].forEach(neighbor => {
    depthFirstRec(neighbor, graph, visited);
  });
}

depthFirstRec('f', graph);

/*
  Cool! We print values in the order 'f, e, a, b, c, d'. We will leave the
  iterativ3e version to you as an exercise for later.

  Instead, let us draw our attention to a point from before: having to choose 'f'
  as the starting point is it not dynamic enough to be impressive. Also, if we
  choose a poor initial node, some nodes may be unreachable. For example, choosing
  'a' as the starting point with a call to 'depthFirstRecur('a', graph) will only
  print 'a, b, c, d, e'. We missed out on 'f'. Bummer. 

  We can fix this. A big advantage of using an Adjaceny List is that it contains
  the full graph! We can use a surrounding loop to allow our traversal to jump
  between disconnected regions of the graph. Refactoring our code:

*/

const _depthFirstRecur = (node, graph, visited) => {
  if (visited.has(node)) return;

  console.log(node);
  visited.add(node);

  graph[node].forEach(neighbor => {
    _depthFirstRecur(neighbor, graph, visited);
  });
}

const depthFirst = (graph) => {
  let visited = new Set();

  for (let node in graph) {
    _depthFirstRecur(node, graph, visited);
  }
}

depthFirst(graph);

/*
  Notice that our main function 'depthFirst' is iterative and accepts the entire
  Adjacency List as an arg. Our helper '_depthFirstRecur' is recursive.
  '_depthFirstRecur' serves the same job as before, it will explore a full
  connected region in a graph. The main 'depthFirst' method will allow us to 
  'bridge' the gap between connection regions.

  Still fuzzy? Imagine we had the following graph. Before you ask, these are not
  two separate graphs. This is a SINGLE graph that contains two connected
  components. Another term for a graph of this structure is a 'Forest' bc it
  contains multiple 'Trees', ha:

  It is easy to represent the graph using an Adjaceny List. We can then pass the
  graph into our 'depthFirst' from above:

*/

let graph = {
  'h': ['i', 'j'],
  'i': [],
  'j': ['k'],
  'k': [],
  'l': ['m'],
  'm': []
}

depthFirst(graph); // h, i, j, k, l, m

/*
  Here is the description for how 'depthFirst' operates above. We enter 
  'depthFirst' and the for loop begins on 'h'. This means we enter our
  '_depthFirstRecur', which will continue to explore the 'local' region as far
  as possible. When this recursion ends, we would have explored the entire
  connected region of 'h, i, j, k' (note that we add these nodes to visited as
  well). Our recursive call then returns to the main 'depthFirst' function,
  where we continue the for loop. We iterate it until we hit an unvisited node
  ('1') and then explore it's local region as far as possible using
  '_depthFirstRecur', hitting the last node 'm'.

*/

