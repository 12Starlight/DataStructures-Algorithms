/*
Dijkstra's Algorithm:
  Perhaps the most well known algorithm for find the shortest path between two
  nodes is DIJKSTRA's ALGORITHM. Stated formally, Dijkstra's Algorithm will
  solve the following problem:

    "Given a graph with weighted edges and a source node, calculate the shortest
    path between that source and all other nodes in the graph."


  Our goal is to implement Dijkstra's on this graph and designate node 'a' as
  the source:

*/

let graph = {
  'a': { 'c': 1, 'b': 7 },
  'b': { 'a': 7, 'd': 12, 'e': 13 },
  'c': { 'a': 1, 'd': 20, 'f': 4 },
  'd': { 'b': 12, 'c': 20, 'e': 5 },
  'e': { 'b': 13, 'd': 5, 'f': 9 },
  'f': { 'c': 4, 'e': 9 }
};

// dijkstras(graph, 'a');


/*
Implementing Dijkstra's:
  Let us build up the implementation. Our 'dijkstras' function will accept a 
  weighted graph (as an adjaceny list) and our source node as args. The
  algorithm borrows heavily from the classic 'find the minimum' programming
  strategy. Since we want to find the smallest distance between the 'source' and
  every node in the graph, we will initialize the distance to every node as 
  'Infinity'. We will replace these infinite values with smaller values later:

  function dijkstras(graph, source) {
    let distance = {};

    // initialize all nodes to be Infinity distance away from the source
    for (let node in graph) {
      distance[node] = Infinity;
    }

    // the source is 0 distance away from iteself
    distance[source] = 0;

    // ...
  }


  At any point in time, the 'distance' object will represent the smallest
  distance between the source and every node calculated thus far. Logically, the
  distance between the source and itself is 0. For example:
    -> Say 'a' is our source and right now 'distance = { 'a': 0, 'c': 1, 'f': 5,
    'b': Infinity ... }
      * This means that the distance from 'a' to 'a' is 0, 'a' to 'c' is 1, 'a'
      to 'f' is 5, and 'a' to 'b' has not been explored yet...

  
  Now we will need to set up tracking for unvisited nodes. Initially every node
  is considered unvisited. We will also need an object that maps a node to the
  previous node that leads to it in the optimal path from the source:

  function dijkstras(graph, source) {
    let distance = {};

    for (let node in graph) {
      distance[node] = Infinity;
    }
    distance[source] = 0;

    // initialize all nodes to be unvisited
    let unvisited = new Set(Object.keys(graph));
    
    // prepare an object to track the optimal paths
    let previous = {};
    // ...
  }


  The purpose of the 'previous' object is pretty difficult to grasp initially.
  Let us say that by the end of the algorithm, our 'previous' object is:

  { c: 'a', b: 'a', d: 'b', f: 'c', e: 'f' }


  Then we know the following:
    -> The shortest path from 'a' to 'c' is 'a, c'
    -> The shortest path from 'a' to 'b' is 'a, b'
    -> The shortest path from 'a' to 'd' is 'a, b, d'
    -> The shortest path from 'a' to 'f' is 'a, c, f'
    -> The shortest path from 'a' to 'e' is 'a, c, f, e'

*/

/*
  With all of this setup out of the way, let us get to the heart of the 
  algorithm. We run a loop until all nodes have been visited. On a single
  iteration of the algorithm, we select the unvisited node that has the smallest
  distance from the source:

  function dijkstras(graph, source) {
    let distance = {};

    for (let node in graph) {
      distance[node] = Infinity;
    }
    distance[source] = 0;

    let unvisited = new Set(Object.keys(graph));
    let previous = {};

    // while some nodes are still unvisited
    while (unvisited.size > 0) {
      // find the closest unvisited node
      let currNode = minDistanceNode(unvisited, distance);
      // and mark it as visited
      unvisited.delete(currNode)
      // ...
    }
  }

  // this helper function will find the unvisted node with the smallest distance
  function minDistanceNode(nodes, distance) {
    return Array.from(nodes).reduce((minNode, node) => (
      distance[node] < distance[minNode] ? node : minNode
    ));
  }

*/

/*
  Now that we have a node selected, we need to consider it's neighbors. Here we
  can use some intuition. Let us say that the distance from 'currNode' to 
  'neighbor' is 7 and the distance from 'currNode' to 'source' is 5. Logically
  this means that the total distance from 'neighbor' to 'source' is 12. Let us
  add this logic:

  function dijkstras(graph, source) {
    let distance = {};

    for (let node in graph) {
      distance[node] = Infinity;
    }
    distance[source] = 0;

    let unvisited = new Set(Object.keys(graph));
    let previous = {};

    while (unvisited.size > 0) {
      let currNode = minDistanceNode(unvisited, distance);
      unvisited.delete(currNode);

      // consider all neighbors of the current node
      for (let neighbor in graph[currNode]) {
        // calculate the total distance of the neighbor
        // if we travel through the current node to get to that neighbor
        let distanceFromCurrToNeighbor = graph[currNode][neigbor];
        let totalNeighborDistance = distance[currNode] + distanceFromCurrToNeighbor;
        // ...
      }
    }
  }

*/

/*
  With the 'totalNeighborDistance' in hand, we can finish off the algorithm with
  a min-finding pattern. That is, if 'totalNeighborDistance' is less than the
  previous 'distance' we calculated for 'neighbor', we should replace it bc that
  means 'totalNeighborDistance' is now the new best:

  function dijkstras(graph, source) {
    let distance = {};

    for (let node in graph) {
      distance[node] = Infinity;
    }
    distance[source] = 0

    let unvisited = new Set(Object.keys(graph));
    let previous = {};


    while (unvisited.size > 0) {
      let currNode = minDistanceNode(unvisited, distance);
      unvisited.delete(currNode);

      for (let neighbor in graph[currNode]) {
        let distanceFromCurrToNeighbor = graph[currNode][neighbor];
        let totalNeighborDistance = distance[currNode] + distanceFromCurrToNeighbor;

        // if the total distance is better than the old distance we calculated for neighbor,
        if (distance[neighbor] > totalNeighborDistance) {
          // then replace it
          distance[neighbor] > totalNeighborDistance;
          // and now we say that the optimal path has 'currNode' followed by 'neighbor'
          previous[neighbor] = currNode;
        }
      }
    }

    return { distance, previous };
  }


  We do this process untill all nodes are visited. The 'distance' and 'previous'
  objects will be filled with information about the optimal paths in the graph:
    -> 'distance' tells us the numerical distance of optimal paths from the 
    source to any node
    -> 'previous' tells us the order of nodes to travel, if we want to take an
    optimal path from the source to any node

*/

// Full Dijkstra's Algorithm In JavaScript 
const minDistanceNode = (nodes, distance) => {
  return Array.from(nodes).reduce((minNode, node) => (
    distance[node] < distance[minNode] ? node : minNode
  ));
}

let un = new Set(['a', 'b', 'c']);
let dist = { 'a': 5, 'b': 2, 'c': 3 };
console.log(minDistanceNode(un, dist));

const dijkstras = (graph, source) => {
  let distance = {};
  for (let node in graph) {
    distance[node] = Infinity;
  }
  distance[source] = 0;

  let unvisited = new Set(Object.keys(graph));
  let previous = {};

  while (unvisited.size > 0) {
    let currNode = minDistanceNode(unvisited, distance);
    unvisited.delete(currNode);

    for (let neighbor in graph[currNode]) {
      let distanceFromCurrToNeighbor = graph[currNode][neighbor];
      let totalNeighborDistance = distance[currNode] + distanceFromCurrToNeighbor;

      if (distance[neighbor] > totalNeighborDistance) {
        distance[neighbor] = totalNeighborDistance;
        previous[neighbor] = currNode;
      }
    }
  }

  return { distance, previous };
}

graph = {
  'a': { 'c': 1, 'b': 7 },
  'b': { 'a': 7, 'd': 12, 'e': 13 },
  'c': { 'a': 1, 'd': 20, 'f': 4 },
  'd': { 'b': 12, 'c': 20, 'e': 5 },
  'e': { 'b': 13, 'd': 5, 'f': 9 },
  'f': { 'c': 4, 'e': 9 }
};

let { distance, previous } = dijkstras(graph, 'a');

console.log(distance);
console.log(previous);

/*
Time Complexity Analysis:
  We implemented the same core algorithm that Dr. Edsger Wybe Dijkstra wrote
  himself in 1956. This algorithm has a runtime of 'O(n^2)' where n is the
  number of nodes in the graph. Here is the derivation for this complexity:
    -> n is the number of nodes in the graph
    -> The while loop will iterate once for every node, so in isolation it
    contributes O(n) steps
    -> The 'minDistanceNode' helper iterates through every unvisited node, so in
    isolation it contributes O(n) steps
    -> The helper call is nested in the while loop, so combined they contribute
    'O(n^2)'
    -> Over the course of the whole algorithm, the inner for loop will iterate
    once for every edge of the graph. Thenumber of edges in a graph of n nodes
    is guaranteed to be less than n^2. So this loop does not contribute to the
    overall complexity.

  Since it's orignal inception, computer scientists have figured out further ways
  to optimize the algorithm by more efficiently calculating the node with the
  minimum distance (our 'minDistanceNode function). Those implementations 
  require more advanced data structures like Fibonacci Heaps to get 
  O(e + nlog(n)) runtime where n is the number of nodes and e is the number of
  edges. We will save that battle for another day, perhaps in the heaps section!



*/