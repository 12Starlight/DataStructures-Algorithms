/*
Selection Sort:
  Very similar to Bubble Sort. However, the major difference between the two is
  that Bubble Sort bubbles the largest elements up to the end of the array, 
  while Selection Sort selects the SMALLEST elements of the array and directly
  places them at the beginning of the array in sorted position. Selection sort
  will utilize swapping just as bubble sort did.

The Algorithm: "Select the next smallest"
  Selection sort works by maintaining a sorted region on the left side of the 
  input array. This sorted region will grow by one element with every "pass" of
  the algorithm. A single "pass" of selection sort will select the next smallest
  element of the unsorted region of the array and move it to the sorted region.

  A single pass of selection sort will move an element of the unsorted region 
  into the sorted region, so this means a single pass will shrink the unsorted
  region by 1 element while increasing the sorted region by 1 element. 

*/

// Finding the Minumum Value
const minumumValueIndex = (arr) => {
  let minIndex = 0;

  for (let i = 0; j < arr.length; j++) {
    if (arr[minIndex] > arr[j]) {
      minIndex = j;
    }
  }

  return minIndex;
}

// Selection Sort JS Implementation

// Build helper function
const swap = (arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// Build Main Function
const selectionSort = (arr) => {
  /*
    The 'i' loop will track the index that points to the first element of the 
    unsorted region. This means that the sorted region is everything left of 
    index i, and the unsorted region is everything to the right of index i
  */
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    // the 'j' loop will iterate through the unsorted region and find the index
    // of the smallest element
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    // after we find the minIndex in the unsorted region, then swap that minIndex
    // with the first index of the unsorted region
    swap(arr, i, minIndex);
  }

  return arr; 
}

// Time Complexity O(n^2)

/*
Space Complexity: O(1)
  The amount of memory consumed by the algorithm does not increase relative to 
  the size of the input array. We use the same amount of memory and create the
  same amount of variables regardless of the size of our input. A quick 
  indicator of this is the fact that we do not create any arrays. 

*/

/*
Best Time To Use Selection Sort:
  Bubble Sort is best used when the data is already sorted bc in the worst case,
  it invokes a swap on every single comparison. Selection Sort only swaps once 
  our inner loop has completely finished traversing the array. Therefore, 
  Selection Sort is optimized to make the least possible number of swaps.

  Selection Sort becomes advantageous when making a swap is the most expensive
  operation in the system. You will likely rarely encounter this scenario, but
  in a situation where you have built (or have inherited) a system with 
  suboptimal write speed ability, for instance, maybe you are sorting data in a
  specialized database tuned strictly for fast read speeds at the expense of 
  slow write speeds, using Selection Sort would save you a ton of expensive 
  operations that could potentially crash your system under peak load. 


*/