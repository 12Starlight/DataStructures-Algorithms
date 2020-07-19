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

/*
Stack & Queue Properties:

Stack                                      
Property  Description 

top       The first node in the Stack                                      
bottom    The last node in the Stack                                      
length    The number of nodes in the Stack; the stack's length 


Queue 
Property  Description

front     The first node in the Queue
back      The last node in the Queue
length    The number of nodes in the Queue; the Queue's length


Notice that rather than having a 'head' and a 'tail' like Linked Lists, Stacks
have a 'top' and a 'bottom', and Queues have a 'front' and a 'back' instead.
These properties are essentially the same; pointers to the end points of the 
respective List ADT where important actions take place. 

Similarly to Linked Lists, the values stored inside a Stack or a Queue are
actually contained within Stack Node and Queue Node instances. Stack, Queue, and
Singly Linked List Nodes are all identical, but just as a reminder and for the 
sake of completion, these List Nodes track the following two properties:

Property    Description

value       The actual value this node represents
next        The next node in the Stack (relative to this node)

*/

/*
Stack Methods:
  Insertion ~ push - Adds a Node to the top of the Stack
    returns Integer - New size of stack

  Deletion ~ pop - Removes a Node from the top of the Stack
    returns Node removed from top of Stack

  Meta ~ size - Returns the current size of the stack
    returns Integer

*/

// Stack JavaScript Implementation
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }

    return ++this.length;
  }

  pop() {
    if (!this.top) return null;

    const temp = this.top;
    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;
    return temp.value;
  }

  size() {
    return this.length; 
  }
}


/*
Queue Methods:
  Insertion ~ enqueue - Adds a Node to the front of the Queue
    returns Integer - New size of Queue

  Deletion ~ dequeue - Removes a Node from the front of the Queue
    returns Node removed from front of Queue

  Meta ~ size - Returns the current size of the Queue
    returns Integer

*/

// Queue JavaScript Implementation
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }

    return ++this.length;
  }

  dequeue() {
    if (!this.front) return null;

    const temp = this.front;

    if (this.front === this.back) {
      this.back = null;
    }

    this.front = this.front.next;
    this.length--;

    return temp.value;
  }

  size() {
    return this.length;
  }
}

/*
Time & Space Complexity Analysis:
  Before we begin our analysis, here is a quick summary of the Time & Space
  constraints of each Stack Operation

Data Structure Operation      Avg       Worst       Space(Worst)

Access                        O(n)      O(n)        O(n)
Search                        O(n)      O(n)        O(n)

Insertion                     O(1)      O(1)        O(n)
Deletion                      O(1)      O(1)        O(n)

*/

/*
Time Complexity - Access and Search: O(n)
  When the Stack ADT was first conceived, its inventor definitely did not 
  prioritize searching and accessing individual Nodes or values in the list. The
  same idea applies for the Queue ADT. There are certainly better data 
  structures for speedy search and lookup, and if these operations are a 
  priority for your use case, it would be best to choose something else!

  Search and Access are both linear time operations for Stacks and Queues, and
  that should not be too unclear. Both ADTs are nearly identical to Linked Lists
  in this way. The only way to find a Node somewhere in the middle of a Stack or
  a Queue, is to start at the 'top' (or the 'back') and traverse downward (or 
  forward) toward the 'bottom' (or 'front') one node at a time via each Node's
  'next' property.

*/

/*
Time Complexity - Insertion and Deletion: O(1)
  For Stacks and Queues, insertion and deletion is what it is all about. If
  thee is one feature a Stack obsolutely must have, it is constant time 
  insertion and removal to and from the 'top' of the Stack (FIFO). The same
  applies for Queues, but with insertion occuring at the 'back' and removal 
  occuring at the 'front' (LIFO).

  Think about it. When you add a plate top the top of a stack of plates, do you
  have to iterate through all of the other plates first to do so? Of course not.
  You simply add your plate to the top of the stack, and that is that. The 
  concept is the same for removal.

  Therefore, Stacks and Queues have constant time Insertion and Deletion via
  their 'push' and 'pop' or 'enqueue' and 'dequeue' methods.

*/

/*
Space Complexity: O(n)
  The space complexity of Stacks and Queues is very simple. Whether we are 
  instantiating a new instance of a Stack or Queue to store a set of data, or we
  are using a Stack or Queue as part of a strategy to solve some problem, Stacks
  and Queues always store one Node for each value they receive as input.

  For this reason, we always consider Stacks and Queues to have a linear space
  complexity.

*/

/*
When Should We Use Stacks And Queues?
  At this point, we have done a lot of work understanding the ins and outs of 
  Stacks and Queues, but we still have not really discussed what we can use them 
  for. The answer is actually...a lot!

  For one, Stacks and Queues can be used as intermediate data structures while
  implementing some of the more complicated data structures and methods we will
  see in some of our upcomming sections.

  For example, the implementation of the breadth-first Tree traversal algorithm
  takes advantage of a Queue instance, and the depth-first Graph traversal
  algorithm exploits the benefits of a Stack instance.

  Additionaly, Stacks and Queues serve as the essential underlying data
  structures to a wide variety of applications you use all the time. Just to
  name a few:


Stacks:
    -> The Call Stack is a Stack data structure, and is used to manage the order
    of function invocations in your code.
    -> Browser History is often implemented using a Stack, with one great 
    example being the browser history object in the very popular React Router
    module.
    -> Undo/Redo functionality in just about any application. For example:
      * When you are coding in your text editor, each of the actions you take on
      your keyboard are recorded by 'push'ing that event to a Stack.
      * When you hit cmd + z to undo your most recent action, that event is
      'pop'ed off the Stack, because the last event that occured should be the 
      first one to be undone (LIFO)
      * When you hit cmd + y to redo your most recent action, that event is 
      'push'ed back onto the Stack.

Queues:
    -> Printers use a Queue to manage incomming jobs to ensure that documents
    are printed in the order they are received.
    -> Chat rooms, online video games, and customer service phone lines use a
    Queue to ensure that patrons are served in the order they arrive.
      * In the case of a Chat Room to be admitted to size-limited room.
      * In the case of an Online Multi-Player Game, players wait in a lobby 
      until there is enough space and it is their turn to be admitted to a game.
      * In the case of a Customer Service Phone Line...you get the point.
    
    -> As a more advanced use case, Queues are often used as components or
    services in the system design of a service-oriented architecture. A very
    popular and easy to use example of this is Amazon's Simple Queue Service
    (SQS), which is part of their Amazon Web Services (AWS) offering.
      * You would add this service to your system between two other services,
      one that is sending information for processing, and one that is receiving
      information to be processed, when the volume of incoming requests is high
      and the integrity of the order with which those requests are processed 
      must be maintained. 


*/