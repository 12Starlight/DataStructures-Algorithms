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