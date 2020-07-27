/*
Heap Sort:
  We have emphasized heavily thata heaps are a 'partially ordered' data 
  structure. However, we can still leverage heaps in a sorting algorithm to end
  up with a fully sorted array. The strategy is simple using our previous
  'MaxHeep' implementation:
    
    1.) Build the heap: 'insert' all elemnets of the array into a 'maxHeap'
    
    2.) Construct the sorted list: continue to 'deleteMax' until the heap is
    empty, every deletion will return the next element in decreasing order


    The code is straightforward:

*/

// assuming our 'MaxHeap' from the previous section
let { MaxHeap } = require('./heaps_project/lib/max_heap.js');

const heapSortDemo = (array) => {
  // Step 1: build the heap
  let heap = new MaxHeap();
  array.forEach(num => heap.insert(num));

  // Step 2: constructed the sorted array
  let sorted = [];
  while (heap.array.length > 1) {
    sorted.push(heap.deleteMax());
  }

  return sorted;
}

let arr = [1,2,4,3,8,19,29,28,400];
console.log(heapSortDemo(arr));

/*
Time Complexity Analysis: O(nlog(n))
  -> 'n' is the size of the input array
  -> step-1 requires 'O(n)' time as previously discussed
  -> step-2's while loop requires 'n' steps in isolation and each 'deleteMax'
  will require 'log(n)' steps to restore max heap property 
  (due to sifting-down). This means step 2 costs 'O(nlog(n))'
  -> the total time complexity of the algorithm is 'O(n + nlog(n)) = O(nlog(n));

*/

/*
Space Complexity Analysis:
  So 'heapSort' performs as fast as our other efficient sorting algorithms, but
  how does it fair in space complexity? Our implementation above requires an
  extra 'O(n)' amount of space bc the heap is maintained separately from the
  input array. If we can figure out a way to do all of these heap operations in
  place we get constant 'O(1)' space! Let us work on this now.

*/


/*
In-Place Heap Sort:
  The in-place algorithm will have the same 2 steps, but it will differ in the
  implementation details. Since we need to have all operations take place in a
  single array, we are going to hav eto denote two regions of the array. That
  is, we will need a heap region and a sorted region. We begin by turning the
  entire region into a heap. Then we continually delete max to get the next
  element in increasing order. As the heap region shrinks, the sorted region
  will grow.

Heapify:
  Let us focus on designing step-1 as an in-place algorithm. In other words, we
  will need to reorder elements of the input array so they follow max heap
  property. This is usually refered to as 'heapify'. Our 'heapify' will use much
  of the same logic as 'MaxHeap#siftDown'.

*/

// swap the elements at indicies i and j of array
const swapDemo = (array, i, j) => {
  [ array[i], array[j] ] = [ array[j], array[i] ]
}

// sift-down the node at index i until max heap property is restored, n
// represents the size of the heap
const heapifyDemo = (array, n, i) => {
  let leftIdx = 2 * i + 1;
  let rightIdx = 2 * i + 2;

  let leftVal = array[leftIdx];
  let rightVal = array[rightIdx];

  if (leftIdx >= n) leftVal = -Infinity;
  if (rightIdx >= n) rightVal = -Infinity;

  if (array[i] > rightVal && array[i] > leftVal) return;

  let swapIdx;
  if (rightVal > leftVal) {
    swapIdx = rightIdx;
  } else {
    swapIdx = leftIdx;
  }

  swap(array, i, swapIdx);
  heapify(array, n, swapIdx);
}

/*
We were not kidding when we said this would be simpler to 'MaxHeap#siftDown'. If
you are not convinced, flip to the previous section and take a look! The few
differences we want to emphasize are:
  -> Given a node at index 'i', it is left index is '2 * i + 1' and it's right
  index is '2 * i + 2'
    * Using these as our child index formulas will allow us to avoid using a
    placeholder element at index 0. The root of the heap will be at index 0.

  -> The parameter 'n' represents the number of nodes in the heap
    * You may feel that 'array.length' also represents the number of nodes in
    the heap. That is true, but only in step-1. Later we will need to 
    dynamically statae the size of the heap. Remember, we are trying to do this
    without creating any extra arrays. We will need to separatethe heap and
    sorted regions of the array and 'n' will dictate the end of the heap.

  -> We created a separate 'swap' helper function
    * Nothing fancy here. Swapping will be valuable in step-2 of the
    algorithm as well, so we will want to keep our code DRY (do not repeat
    yourself).


  To correctly convert the input arraay into a heap, we will need to call
  'heapify' on children nodes before their parents. This is easy to do, just
  call 'heapify' on each element right-to-left in the array:

*/

const heapSortDemo1 = (array) => {
  // heapify the tree from the bottom up
  for (let i = array.length - 1; i >= 0; i--) {
    heapify(array, array.length - 1);
  }
  // the entire array is now a heap
  // ...
}

// Nice! Now the elements of the array have been moved around to obey max heap 
// property


/*
Construct The Sorted Array:
  To put everything together, we will need to continually 'delete max' from our
  heap. From our previous lecture, we learned the steps for deletion, are to
  swap the last node of the heap into the root and then sift the new root down
  to restore max heap property. We will follow the same logic here, except we
  will need to account for the sorted region of the array. The array will
  contain the heap region in the front and the sorted region at the rear:

*/

const heapSortDemo2 = (array) => {
  // heapify the tree from the bottom up
  for (let i = array.length - 1; i >= 0; i--) {
    heapify(array, array.length, i);
  }
  // the entire array is now a heap

  // until the heap is empty, continue to 'delete max'
  for (let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--) {
    // swap the root of the heap with the last element of the heap, this
    // effectively shrinks the heap by one and grows the sorted array by one
    swap(array, endOfHeap, 0);

    // sift down the new root, but not past the end of the heap
    heapify(array, endOfHeap, 0);
  }

  return array;
}

// In-Place Heap Sort JavaScript Implementation:
const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]]
}

const heapify = (array, n, i) => {
  let leftIdx = 2 * i + 1;
  let rightIdx = 2 * i + 2;

  let leftVal = array[leftIdx];
  let rightVal = array[rightIdx];

  if (leftIdx >= n) leftVal = -Infinity;
  if (rightIdx >= n) rightVal = -Infinity;

  if (array[i] > rightVal && array[i] > leftVal) return;

  let swapIdx;
  if (rightVal > leftVal) {
    swapIdx = rightIdx;
  } else {
    swapIdx = leftIdx;
  }

  swap(array, i, swapIdx);
  heapify(array, n, swapIdx);
}

const heapSort = (array) => {
  for (let i = array.length - 1; i >= 0; i--) { 
    heapify(array, array.length, i);
  }

  for (let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--) {
    swap(array, endOfHeap, 0);
    heapify(array, array.length, 0);
  }

  return array;
}
