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

/*
Time & Space Complexity Analysis:
  Before we begin our analysis, here is a quick summary of the Time & Space 
  constraints of each Linked List Operation. The complexities below apply to
  both Singly and Doubly Linked Lists:
  
Data Structure Operation      Avg       Worst       Space(Worst)  

Access                        O(n)      O(n)        O(n)    
Search                        O(n)      O(n)        O(n)    

Insertion                     O(1)      O(1)        O(n)
Deletion                      O(1)      O(1)        O(n)

*/

/*
Time Complexity - Access and Search
  
  Scenarios:
    1.) We have a Linked List, and we would like to find the 8th item in the list
    2.) We have a Linked List of sorted alphabet letters, and we would like to 
    see, if the letter 'Q' is inside that list

  Discussion:
    Unlike Arrays, Linked Lists Nodes are not stored contiguously in memory, and
    thereby do not have an indexed set of memory addresses at which we can
    quickly lookup individual nodes in constant time. Instead, we must begin at
    the head of the list (or possibly at the tail, we have a Doubly Linked List),
    and iterate through the list until we arrive at the node of interest. 

    In Scenario 1, we will know we are there bc we have iterated 8 times. In 
    Scenario 2, we will know we are there bc, while iterating, we have checked
    each node's value and found one that matches our target value, 'Q'.

    In the worst case scenario, we may have to traverse the entire Linked List
    until we arrive at the final node. This makes both Access and Search 'Linear
    Time' operations. 

*/

/*
Time Complexity - Insertion and Deletion

  Scenarios:
    1.) We have an empty Linked List, and we would like to insert our first node
    2.) We have a Linked List, and we would like to insert or delete a node at
    the Head or Tail
    3.) We have a Linked List, and we would like to insert or delete a node from
    somewhere in the middle of the list

  Discussion:
    Since we have our Linked List Nodes stored in a non-contiguous manner that
    relys on pointers to keep track of where the next and previous nodes live,
    Linked Lists liberate us from the linear time nature of Array insertions and 
    deletions. We no longer have to adjust the position at which each 
    node/element is stored after making an insertion at a particular position in
    the list. Instead, if we want to insert a new node at position 'i', we can
    simply:
      a.) Create a new node
      b.) Set the new node's 'next' and 'previous' pointers to the nodes that 
      live at positions 'i' and 'i - 1', respectively
      c.) Adjust the 'next' pointer of the node that lives at position 'i - 1'
      to point to the new node
      d.) Adjust the 'previous' pointer of the node that lives at position 'i'
      to point to the new node.

    And we are done, in Constant Time. No iterating across the entire list!

    "But hold on a second," you may be thinking. "In order to insert a new node
    in the middle of the list, do we not have to lookup its position? Does that
    not take linear time?!"

    Yes, it is tempting to call insertion or deletion in the middle of a Linked
    List a linear time operation since there is lookup involved. However, it is
    usually the case that you will already have a reference to the node where 
    your desired insertion or deletion will occur.
    
    For this reason, we separate the Access time complexity from the
    Insertion/Deletion time complexity, and formally state that Insertion and
    Deletion in a Linked List are 'Constant Time' across the board.

    NOTE: Without a refrence to the node at which an insertion or deletion will
    occur, due to linear time lookup, an insertion or deletion 'in the middle'
    of a Linked List will still take Linear Time, sum total. 

*/

/*
Space Complexity:
  Scenarios:
    1.) We are given a Linked List, and need to operate on it
    2.) We have decided to create a new Linked List as part of strategy to solve
    some problem

  Discussion:
    It is obvious that Linked List have one node for every one item in the list,
    and for that reason we know that Linked Lists take up Linear Space in memory.
    However, when asked in an interview setting what the Space Complexity 'of 
    your solution' to a problem is, it is important to recoginize the difference
    between the two scenarios above.

    In Scenario 1, 'we are not' creating a new Linked List. We simply need to
    operate on the one given. Since we are not storing a 'new' node for every
    node represented in the Linked List we are provided, our solution is 'not
    necessarily' linear in space.

    IN Scenario 2, we 'are' creating a new Linked List. If the number of nodes
    we create is linearly correlated to the size of our input data, we are now
    operating in Linear Space.

    NOTE: Linked Lists can be traversed both iteratively and recursively. 'If
    you choose to traverse a Linked List recursively,' there will be a recursive
    function call added to the call stack for every node in the Linked List. 
    Even if you are provided the Linked List, as in Scenario 1, you will still
    use Linear Space in the call stack, and that counts. 

*/