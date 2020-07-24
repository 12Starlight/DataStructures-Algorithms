/*
Weighted Graphs:
  Coming up, we will be exploring algorithms to find the optimal path between two
  nodes of a graph. In particular, we will investigate calculating the shortest
  path between two nodes. So, far we have not been associating a 'weight' or
  'cost' with edges in our graphs. In those unweighted scenarios, the optimal
  path between two nodes is simply the smallest number of edges we should take.
  However, if we consider graphs where each edge has a particular weight, things
  become more interesting. Let us take a look at an unweighted and weighted
  graph where we want to find the shortest path between nodes 'A' and 'B':

  Note that we can think about an unweighted graph as a graph where all edge
  weights are uniform. We implicitly consider each edge cost as 1 in the
  unweighted graph above.

*/

/*
Representing A Weighted Graph:
  To represent a weighted graph programmatically, we will need to store
  information on each edge. This is relatively simple to do by modifying our
  previous adjacency list strategy. The object will still have keys that 
  represent nodes. However, the value associated with these nodes will be a 
  distance object which maps a neighbor to the distance to that neighbor from
  this node.

  For example, this weighted graph can be represented by this weighted adjacency
  list:

*/

let graph = {
  'a': { 'c': 1, 'b': 7 },
  'b': { 'a': 7, 'd': 12, 'e': 13 },
  'c': { 'a': 1, 'd': 20, 'f': 4 },
  'd': { 'b': 12, 'c': 20, 'e': 5 },
  'e': { 'b': 13, 'd': 5, 'f': 9 },
  'f': { 'c': 4, 'e': 9 }
};

/*
  Note that our graph is not directed. That means the cost of traveling from 'a'
  to 'b' will be the same as the cost of 'b' to 'a'. This is why the costs are
  symmetric in the adjaaceny list.

*/

/*
Why Weighted Graphs?
  Weighted graphs allow us to capture real world scenarios where we need to
  associate a cost for moving from one entity to the next. Here is a classic
  example:
    -> Say each node is a city and each weight is the flight cost between two
    cities:
      * How can we want to travel from city 'a' to 'e' and save as much money
      as possible?
      * How can we travel from city 'a' to 'e' with as little stops in between?

      
  We will explore algorithms to solve these problems next!

*/