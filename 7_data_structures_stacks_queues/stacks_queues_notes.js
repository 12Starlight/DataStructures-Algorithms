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

/*
What Is A Queue?
  Queues are First In First Out (FIFO) data structure. The first Node added to
  the queue is always the first Node to be removed.

  The name Queue comes from this characteristic, as it is helpful to visualize
  this data structure as a horizontal line of items with a beginning and an end.
  Personally, I like to think of a Queue as the line one waits on for an
  amusement park, at a grocery store checkout, or to see the teller at a bank.

  People add themselves to the BACK of a queue, wait their turn in line, and
  make their toward the FRONT. Peoplee exit from the FRONT of a queue, but only
  when they have made their wat to being first in line.

  We never add ourselves to the front of the queue (unless there is no one else
  in line), otherwize we would be "cutting" the line, and other humans do not
  seem to appreciate that.

  Note: We can use JavaScript Arrays to implement a basic queue. 'Array#push'
  adds to the back (enqueue) and 'Array#shift' will remove from the front 
  (dequeue). In the exercise that follows, we will build our own Queue class
  from scratch (without using any arrays). 
  
*/