/*
Stacks & Queues:
  These really are not "data structures" by the strict definition of the term.
  The more appropriate terminology would be to call them abstract data types or
  (ADT's), meaning that their definitions are more conceptual and related to the
  rules governing their user-facing behaviors rather than their core 
  implementations. This is important to understand as you level up to be an
  engineer. 

  Stacks and Queues represent a linear collection of nodes or values. In this
  way, they are quite similar to the Linked List data structure we discussed in
  the previous section. In fact, you can even use a modified version of a Linked
  List to implement each of them. 

  These two ADTs are similar to each other as well, but each obeyj their own 
  special rule regarding the order with which Nodes can be added and removed
  from the structure.

*/

/*
What Is A Stack?
  Stacks are a Last In First Out (LIFO) data structure. The last Node added to a
  stack is always the first Node to be removed, and as a result, the first Node
  added is always the last Node removed. 

  The name Stack actually comes from this characteristic, as it is helpful to 
  visualize the data structure as a vertical stack of items. Personally, I like
  to think of a Stack as a stack of plates, or a stack of sheets of paper. This
  seems to make them more approachable, because the analogy relates to something
  in our everyday lives.

  We add things to the TOP of a stack. We remove things from the TOP of a stack.
  We never add things to, or remove things from, the BOTTOM of the stack. That
  is just crazy.

  Note: We can use JavaScript Arrays to implement a basic stack. 'Array#push'
  adds to the top of the stack and 'Array#pop' will remove from the top of the
  stack. In an interview setting, your evaluator might be okay with you using an
  array as a stack.
  
*/