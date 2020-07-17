/*
Linked List Notes:
  While they do not always have the most practical real-world applications in
  the industry, Linked Lists make for an important and effective educational
  tool in helping develop a student's mental model on what data structures
  actually are to begin with. They also have many edge cases that need to be
  addressed.

What Is A Linked List?  
  A Linked List data structure represents a linear sequence of 'vertices' (or 
  'nodes'), and tracks three important properties.
    -> head - The first node in the list
    -> tail - The last node in the list
    -> length - The number of nodes in the list, the list's length

  The data being tracked by a particular Linked List does not live inside the
  Linked List instance itself. Instead, each vertex is actually an instance of
  an even simpler, smaller data structure, often referred to as a 'Node'.

  Depending on the type of Linked List (there are many), Node instances track
  some very important properties as well.
    * value - The actual value this node represents
    * next - The next node in the list (relative to this node)
    // previous is for Double Linked List ONLY
    * previous - The previous node in the list (relative to this node)

  Linked List sound a lot like arrays bc they store ordered data and both come
  from the List ADT. However, there is an incredibly important distinction to be
  made between Arrays and Linked Lists, and that is how they 'physically store'\
  their data. (As opposed to how they 'represent' the order of their data.)

  Recall that Arrays contain 'contiguous' data. Each element of an array is
  actually stored 'next' to it's neighboring element 'in the actual hardware of
  your machine', in a single continuous block of memory. Unlike Arrays, Linked
  Lists contain 'non-contiguous' data. Though Linked Lists 'represent' data that
  is ordered linearly, that mental model is just that - an interpretation of the 
  'representation' of information, not reality.

  In reality, in the actual hardware of your machine, whether it be in disk or
  in memory, a Linked List's Nodes are not stored in a single continuous block
  of addresses. Rather, Linked List Nodes live at randomly distributed addresses
  throughout your machine! The only reason we know which node comes next in the 
  list is bc we have assigned its reference to the current node's 'next' 
  pointer.

  For this reason, Linked List Nodes have 'no indices', and no 'random access'. 
  Without random access, we do not have the ability to look up an individual 
  Linked List Node in constant time. Instead, to find a particular Node, we have
  to start at the very first Node and iterate through the Linked List one node at
  a time, checking each Node's 'next' Node until we find the one we are 
  interested in.

  So, when implementing a Linked List, we actually must implement both the
  Linked List class 'and' the Node class. Since the actual data lives in the
  Nodes, it's simpler to implement the Node class first.

*/

/*
Types Of Linked Lists:
  -> Singly Linked - Nodes have a single pointer connecting them in a single 
  direction ~ Head -> Tail
  
  -> Doubly Linked - Nodes have two pointers connecting them bi-directionaly
  ~ Head <-> Tail
  
  -> Multiply Linked - Nodes have two or more pointers, providing a variety of
  potential node orderings ~ Head <-> Tail, A -> Z, Jan -> Dec, etc.
  
  -> Circularly Linked - Final node's 'next' pointer points to the first node,
  creating a non-linear, circular version of a Linked List 
  ~ Head -> Tail -> Head -> Tail

For Instance:
    * Any type of Linked List can be implemented Circularly (e.g. A Circular
    Double Linked List).
    * A Doubly Linked List is actually just a special case of a Multiply Linked
    List


You are most likely to encounter Singly and Double Linked Lists in your
upcomming job search, so these two should be the focus moving forward. However,
in more senior level interviews, it is very valuable to have some familarity
with the other types of Linked Lists. Though you many not actually code them out,
'you will win extra points by illustrating your ability to weigh the tradeoffs
of your technical decisions' by discussing how your choice of Linked List type
may affect the efficiency of the solutions you propose.

*/

/*
Linked List Methods:

Insertion -> 'addToTail' - Adds a new node to the tail of the Linked List 
      returns -> Updated Linked List

Insertion -> 'addToHead' - Adds a new node to the head of the Linked List
      returns -> Updated Linked List

Insertion -> 'insertAt' - Inserts a new node at the 'index' or position specified
      returns -> Boolean

Deletion -> 'removeTail' - Removes the node at the tail of the Linked List
      returns -> Removed node

Deletion -> 'removeHead' - Removes the node at the head of the Linked List
      returns -> Removed node

Deletion -> 'removeFrom' - Removes the node at the 'index' or position specified
      returns -> Removed node

Search -> 'contains' - Searches the Linked List for a node with the value
specified
      returns -> Boolean

Access -> 'get' - Gets the node at the 'index' or position specified
      returns -> Node at index

Access -> 'set' - Updates the value of a node at the 'index' or position
specified
      returns -> Boolean

Meta -> 'size' - Returns the current size of the Linked List
      returns -> Integer 

*/
