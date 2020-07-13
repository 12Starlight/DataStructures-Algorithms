/*
Bubble Sort:
  It provides a good introduction to the challenges we face when tasked with 
  converting unsorted data into sorted data, such as conducting logical 
  comparisons, making swaps while iterating, and making optimizations. The
  worst choice in the industry though. 
    -> It is not efficient
    -> It is not commonly used
    -> You get labled as a noob

Then why use it?
  It is useful as an educational base, and a conversational base while 
  interviewing. You can discuss how other more elegant and efficient algorithms
  improve upon it. 

When we say that an item in a collection "bubbles up," we imply that:
  -> The item is in motion
  -> The item is moving in some direction
  -> The item has some final resting destination

Sorting an array of INTEGERS:
  The largest integers will "bubble up" to the top (the end of the array), one
  at a time. The largest values are captured, put in motion in the direction 
  defined by our desired sort. 

  As we iterate through the array, we compare each element to its right neigbor.
  If the current element is larger than its neighbor, we swap them. Wash, rinse,
  repeat, until all elements of the array are sorted. 

How it works:
  Bubble sort works by performing multiple passes to move elements closer to 
  their final positions. A single pass will iterate through the entire array once.
  
  A pass works by scanning the array from left to right, two elements at a time,
  and checking if they are ordered correctly. To be ordered correctly the first 
  element must be less than or equal to the second. If the two elements are not
  ordered properly, then we swap them to correct their order. 

*/

// Note the swap function does not create or return a new array. It mutates the 
// original array:
const swap = (array, idx1, idx2) => {
  let temp = array[idx1]; // save a copy of the first ele
  array[idx1] = array[idx2]; // overwrite the first ele with the second ele
  array[idx2] = temp; // overwrite the second ele with the first ele copy
}

let arr1 = [2, 8, 5, 2, 6];
swap(arr1, 1, 2);
console.log(arr1); // [2, 5, 8, 2, 6]


// JS implementation of Bubble Sort
const bubbleSort = (array) => {
  /*
    This variable will be used to track whether or not we made a swap on the 
    previous pass. If we did not make any swap on the previous pass, then the
    array must already be sorted
  */
  let swapped = true;

  // this while loop will keep doing passes, if a swap was made on the previous 
  // pass
  while(swapped) {
    // reset swap to false
    swapped = false;

    // this for loop will perform a single pass
    for (let i = 0; i < array.length - 1; i++) {
      // if the two elements are not ordered
      if (array[i] > array[i + 1]) {
        // swap them
        swap(array, i, i + 1);
        // since we made a swap, remember that we did so bc we should perform
        // another pass after this one
        swapped = true;
      }
    }
  }

  return array;
}


// Another implementation

// Build helper function callback(x, y)
const callback = (x, y) => {
  return x < y ? -1 : x > y ? 1 : 0;
};

// Build Main Function
Array.prototype.bubbleSort = function (cb) {
  if (!cb) cb = callback
  let sorted = false;
  let resultArr = this.slice();

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < resultArr.length - 1; i += 1) {
      if (cb(resultArr[i], resultArr[i + 1]) === 1) {
        [resultArr[i], resultArr[i + 1]] = [resultArr[i + 1], resultArr[i]];
        sorted = false;
      }
    }
  }

  return resultArr;
};
console.log([1, 0, 9, 3, 8, 2, 5, 7, 0, 2, 3, 4, 9, 5, 7, 8].bubbleSort(callback));


// Time Complexity: O(n^2)

/*
Space Complexity: O(1):
  Bubble Sort is a constant space, O(1), algorithm. The amount of memeory 
  consumed by the algorithm does not increase relative to the size of the input
  array. We use the same amount of memory and create the same amount of 
  letiables regardless of the size of our input, making this algorithm quite
  spae effiient. The space efficiency mostly comes from the fact that we mutate
  the input array, in-place

*/
