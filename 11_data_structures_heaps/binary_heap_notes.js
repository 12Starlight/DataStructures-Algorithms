/*
Binary Heap Implementation:
  Now that we are familiar with the structure of a heap, let us implement one!
  What may be surprising is that the usual way to implement a heap is by simply
  using an array. That is, we do not need to create a node class with pointers.
  Instead, each index of the array will represent a node, with the root being
  at index 1. We will avoid using index 0 of the array so our math works out
  nicely. From this point, we will use the following rules to interpret the
  array ass a heap:
    -> Index 'i' represents a node in the heap
    -> The left child of ndoe 'i' can be found at index '2 * i'
    -> The right child of code 'i' can be found at index '2 * i + 1'


  In other words, the array '[null, 42, 32, 24, 30, 9, 20, 18, 2, 7]'
  represents the heap below. Take a moment to analyze how the array indices
  work out to represent left and right children.

  Pretty clever math right? We can also describe the relationship from child to
  parent node. Say we are given a node at index 'i' in the heap, then it's
  parent is found at index 'Math.floor(i / 2)'.

  It is useful to visualize heap algorithms using the classic image of nodes and
  edges, but we will translate that into array index operations. Let us start by
  setting up some helper methods on our 'MaxHeap' class using this logic:

*/

class MaxHeapDemo {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftchild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }
};

/*
Insert:
  What is a heap, if we can not add data into it? We will need a 
  'MaxHeap#insert' method that will add a new value into the heap without 
  voiding our heap property. In our 'MaxHeap', the property states that a node
  must be greater than its children.

Visualizing Our Heep As A Tree Of Nodes:
  1.) We begin an insertion by adding the new node to the bottom leaf level of
  the heap, preferring to place the new node as far left in the level as
  possible. This ensures the tree remains complete.
  
  2.) Placing the new new node ther may momentarily break our heap property, so
  we need to restore it by moving thenode up the tree into a legal position.
  Restoring the heap property in a matter of continually swapping the new node
  with it's parent while it's parent contains a smaller value. We refer to this
  process as 'siftUp'


Translating That Into Array Operations:
  1.) 'push' the new value to the end of the array

  2.) Continually swap that value toward the front of the array (following our
  child-parent index rules) until heap property is restored


  Here is how we can implement these steps, continuing our 'MaxHeap' from above:

*/

// class MaxHeapDemo {
//   // ..
//   insert(val) {
//     // add the new node to the bottom level, far-left
//     this.array.push(val);

//     // then, sift that value to the heap to resstore heap property
//     this.siftUp(this.array.length - 1);
//   }

//   siftUp(idx) {
//     // if the node is already at the root, there is nothing further we can sift
//     // up
//     if (idx === 1) return;

//     let parentIdx = this.getParent(idx);

//     // if the node is bigger than it's parent, we are breaking heap property...
//     if (this.array[parentIdx] < this.array[idx]) {
//       // so swap the node with it's parent
//       [ this.array[parentIdx], this.array[idx] ] = [ this.array[idx], this.array[parentIdx] ];

//       // and continiue to sift it up recursively
//       this.siftUp(parentIdx);
//     }
//   }

//   //...
// }

/*
DeleteMax:
  This is the 'fetch' operation of a heap. Since we maintain heap property
  throughout, the root of the heap will always be the maximum value. We want to
  delete and return the root, whilst keeping the heap property.

Visualizing Our Heap As A Tree Of Nodes:
  1.) We begin the deletion by saving a reference to the root value (the max) to
  return later. We then locate the right most node of the bottom level and copy
  it's value into the root of the tree. We easily delete the duplicate node at
  the leaf level. This ensures the tree remains complete.

  2.) Copying that value into the root may momentarily break our heap property,
  so we need to restore it by moving the node down the tree into a legal
  position. Restoring the heap property is a matter of continually swapping the
  node with the greater of it's two children. We refer to this process as
  'siftDown'.

*/

/*
Translating That Into Array Operations:
  1.) The root is at index 1, so save it to return later. The right most node of
  the bottom level would just be the very last element of the array. Copy the
  last element into index 1, and pop off the last element (since it now appears
  at the root).

  2.) Continally swap the new root toward the back of the array (following our
  parent-child index rules) until heap property is restored. A node can have two
  children, so we should always prefer to swap with the greater child.


  Here is how we can implement these steps, continuing our 'MaxHeap' from above:

*/

// class MaxHeapDemo {
//   deleteMax() {
//     // recall that we have an empty position at the very front of the array, so
//     // an array length of 2 means there is only 1 item in the heap

//     // if there is only 1 element in the heap, simply remove it
//     if (this.array.length === 2) return this.array.pop();

//     // if there are no elements in the heap, do nothing
//     if (this.array.length === 1) return null;

//     // otherwise remove the last element and make it the root at the front of
//     // the array
//     let max = this.array[1];
//     this.array[1] = this.array.pop();

//     // then, sift the new root down to restore heap property
//     this.siftDown(1);
//     return max;
//   }

//   siftDown(idx) {
//     let ary = this.array;
//     let leftIdx = this.getLeftchild(idx);
//     let rightIdx = this.getRightChild(idx);
//     let leftVal = ary[leftIdx];
//     let rightVal = ary[rightIdx];

//     /*
//       if the node is misisng children, consider the missing children asa the
//       value -Infinity. This allows the node to keep heep property, since any
//       value is greater than -Infinity. This will also give us children values to
//       compare later, undefined should not be used for comparison**
//     */
//    if (leftVal === undefined) leftVal = -Infinity;
//    if (rightVal === undefined) rightVal = -Infinity;

//    // if the node is bigger than both children, we have restored heap property,
//    // so exit
//    if (ary[idx] > leftVal && ary[idx] > rightVal) return;

//    // otherwise the node is bigger than one of it's children, so swap this node
//    // with the bigger between the two children**
//    if (leftVal < rightVal) {
//      var swapIdx = rightIdx;
//    } else {
//     var swapIdx = leftIdx;
//    }
//    [ary[idx], ary[swapIdx] ] = [ ary[swapIdx], ary[idx] ];

//    // and continue to sift it down recursively
//    this.siftDown(swapIdx);
//   }
// }

// Full MaxHeap Implementation
class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  siftUp(idx) {
    if (idx === 1) return;
    let parentIdx = this.getParent(idx);

    if (this.array[parentIdx] < this.array[idx]) {
      [ this.array[parentIdx], this.array[idx] ] = [ this.array[idx], this.array[parentIdx] ];
      this.siftUp(parentIdx);
    }
  }

  deleteMax() {
    if (this.array.length === 2) return this.array.pop();
    if (this.array.length === 1) return null;

    let max = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1);
    return max;
  }

  siftDown(idx) {
    let ary = this.array;
    let rightChildIdx = this.getRightChild(idx);
    let leftChildIdx = this.getLeftChild(idx);
    let leftVal = ary[leftChildIdx];
    let rightVal = ary[rightChildIdx];

    if (leftVal === undefined) leftVal = -Infinity;
    if (rightVal === undefined) rightVal = -Infinity;

    if (ary[idx] > leftVal && ary[idx] > rightVal) return;

    if (leftVal < rightVal) {
      var swapIdx = rightChildIdx;
    } else {
      var swapIdx = leftChildIdx;
    }

    [ ary[idx], ary[swapIdx] ] = [ ary[swapIdx], [ary[idx]] ];
    this.siftDown(swapIdx);
  }
}

let heap = new MaxHeap();
heap.insert(8);
heap.insert(7);
heap.insert(4);
heap.insert(3);
heap.insert(12);
heap.insert(9);
heap.insert(21);
console.log(heap)


/*
Time Complexity Analysis
  -> insert: 'O(log(n))
  -> deleteMax: 'O(log(n))


Recall that our heap will be a complete/balanced tree. This means it's height
is 'log(n)' where 'n' is the number of items. Both 'insert' and 'deleteMax'
have a time complexity of 'log(n)' bc of 'siftUp' and 'siftDown' respectively.
In the worst case of 'insert', we will have to 'siftUp' a leaf all the way to 
the root of the tree. In the worst case 'deleteMax', we will have to 'siftDown'
then new root all the way down to the leaf level. In either case, we will have
to traverse the full height of the tree, 'log(n)'.

Array Heapify Analysis:
  Now that we have established 'O(log(n))' for a single insertion, let us
  analyze the time complexity for turning an array into a heap (we call this
  heapify, comming in the next project :)). The algorithm itself is simple, just
  perform an 'insert' for every element. Since there are 'n' elements and each
  insert requires 'log(n)' time, our total complexity for heapify is 'O(nlog(n))'
  OR is it...? There is actually a tighter bound on heapify. The proof requires
  some math that you will not find valuable in your job search, but do understand
  that the true time complexity of heapify is amortized 'O(n)'. Amortized refers
  to the fact that our analysis is about performance over many insertions.

*/

/*
Space Complexity Analysis:
  -> 'O(n)', since we use a single array to store heap data. 

*/