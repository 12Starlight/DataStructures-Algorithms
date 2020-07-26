/*
Introduction To Heaps:
  Let us explore the HEAP data structure! In particular, we will explore BINARY
  HEAPS. A Binary Heap is a type of Binary Tree. However, a heap is not a Binary
  Search tree. A heap is a prtially ordered data structure, whereas a BST has
  full order. In a heap, the root of the tree will be the maximum (max heap) or
  the minimum (min heap). Below is an example of a max heap:

  Notice that the heap above does not follow search tree property where all
  values to the left of a node are less and all values to the right are greater
  or equal. Instead, the max heap invariant is:
    -> Given any node, its children must be lesss than or equal to the node


  This constraint makes heaps much more relaxed in structure compared to a
  search tree. There is no guaranteed order among 'siblings' or 'cousins' in a
  heap. The relationship only flows down the tree from parent to child. In other
  words, in a max heap, a node will be greater than all of it's children, it's
  grandchildren, its great-grandchildren, and so on. A consequence of this is
  the root being the absolute maximum of the entire tree. We will be exploring
  mad heaps together, but these arguments are symmetric for a min heap.

*/

/*
Complete Trees:
  We will eventually implement a max heap together, but first we will need to
  take a quick detour. Our design goal is to implement a data structure with
  efficient operations. Since a heap is a type of Binary Tree, recall the
  circumstances where we had a 'best case' Binary Tree. We will need to ensure
  our heap has minimal height, that is, it must be a balanced tree!

  Our heap implementation will not only be balanced, but it will also be
  COMPLETE. To clarify, EVERY COMPLETE TREE IS ALSO A BALANCED TREE, but not
  every balanced tree is also complete. Our definition of a complete tree is:
    -> A tree where all levels have the maximal number of nodes, except the
    bottom the level
    -> AND the bottom level has all nodes filled as far left as possible


  Here are few examples of the definition: Complete, Balanced, but not Complete


  Notice that the tree on the right fails the second point of our definition bc 
  there is a gap in the last level. Informally, you can think about a complete
  tree as packing its nodes as closely together as possible. This line of
  thinking will come into play when we code heaps later.

*/

/*
When To Use Heaps?
  Heaps are the most useful when attacking problems that require you to
  'partially sort' data. This usually takes form in problems that have us
  calculate the largest or smallest n numbers of a collection. For example: What
  if you were asked to find the largest 5 numbers in an array in linear time, 
  O(n)? The fastest sorting algorithms are O(nlogn), so none of those algorithms
  will be good enough. However, we can use a heap to solve this problem in
  linear time. We will analyze this in depth when we implement a heap in the
  next section!

*/