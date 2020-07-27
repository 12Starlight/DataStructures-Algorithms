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

const heapSort = (array) => {
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
console.log(heapSort(arr));

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