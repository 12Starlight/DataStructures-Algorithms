/*
Merge Sort:
  The following points are not steps to algorithm yet, rather they are ideas 
  that will motivate how we will design this algorithm:
    -> It is easy to merge elements of two sorted arrays into a single sorted
    array
    -> We can consider an array containing only a single element as already
    trivially sorted
      * We can also consider an empty array as trivially sorted

Merge: 
  We need a helper function to merge two sorted arrays. Since both arrays are 
  sorted, we know the smallest numbers to always be at the front of the arrays.
  We can construct the new array by comparing the first elements of both input 
  arrays. We remove the smaller element from it's respective array and add it to
  our new array. This is done repetively until both input arrays are empty.

*/

// const merge = (arr1, arr2) => {
//   let merged = [];

//   // keep running while either array still contains elements
//   while (arr1.length || arr2.length) {
//     // if arr1 is not empty, take its first element as ele1, otherwise arr1 is 
//     // empty, so take Infinity as ele1
//     let ele1 = arr1.length ? arr1[0] : Infinity;
//     // so the same for arr2, ele2
//     let ele2 = arr2.length ? arr2[0] : Infinity;

//     let next;
//     // remove the smaller of the eles from it's array
//     if (ele1 < ele2) {
//       next = arr1.shift();
//     } else {
//       next = arr2.shift();
//     }

//     // and add that ele to the new array
//     merged.push(next);
//   }

//   return merged;
// }

/*
By using 'Infinity' as the default ele when an array is empty, we are able to 
elegantly handle the scenario where one array empties before the other. We know
that any actual element will be less than 'Infinity' so we will continually take 
the other element into our merged array.

In other words, we can safely handle this edge case:
  -> merge([10, 13, 15, 25], []); // [10, 13, 15, 25]

Nice! We now have a way to merge two sorted arrays into a single sorted array. 
It is worth mentioning that 'merge' will have an O(n) runtime where 'n' is the 
combined length of the two input arrays. This is what we meant when we said it
was 'easy' to merge two sorted arrays. Linear time is fast!

*/

/*
Merge Sort Recursion:
  Now that we have satisfied the merge idea, let us handle the second point. That
  is, we say an array of 1 or 0 elements is already sorted. This will be the
  base case of our recursion. Let us begin adding this code:

  If our base case pertains to an array of a very small size, then the design of 
  our recursive case shoul dmake progress toward hitting this base scenario. In
  other words, we should recursively call 'mergeSort' on smaller and smaller 
  arrays. The most logical way to do this is to take the input array and split
  it into left and right halves. 

*/

// const mergeSort = (array) => {
//   if (array.length <= 1) return array;

//   let midIdx = Math.floor(array.length / 2);
//   let leftHalf = array.slice(0, midIdx);
//   let rightHalf = array.slice(midIdx);

//   let sortedLeft = mergeSort(leftHalf);
//   let sortedRight = mergeSort(rightHalf);

//   return merge(sortedLeft, sortedRight);
// }

/*
Line 86 is the part of the recursion where we do a lot of hand waving and we 
take things on faith. We know that 'mergeSort' will take in an array and return 
the sorted version. We assume that works. That means two recursive calls will
return the 'sortedLeft' and 'sortedRight' halves. 

So, after we have the two sorted arrays, we merge them to return one sorted
array.

*/

/*
'mergeSort' is a classic example of a 'Divide and Conquer' algorithm. In other
words, we keep breaking the array into smaller and smaller sub arrays. This is 
the same as saying we take the problem and break it down into smaller and 
smaller subproblems. We do this until the subproblems are so small that we 
trivially know the answer to them (an array length 0 or 1 is already sorted).

*/

// Merge Sort JS Implementation
const merge = (array1, array2) => {
  let merged = [];

  while (array1.length || array2.length) {
    let ele1 = array1.length ? array1[0] : Infinity;
    let ele2 = array2.length ? array2[0] : Infinity;

    let next;
    if (ele1 < ele2) {
      next = array1.shift();
    } else {
      next = array2.shift();
    }

    merged.push(next);
  }

  return merged;
}

const mergeSort = (array) => {
  if (array.length <= 1) return array;

  let midIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIdx);
  let rightHalf = array.slice(midIdx);

  let sortedLeft = mergeSort(leftHalf);
  let sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}


/*
Time Complexity: O(n log(n))
  -> 'n' is the length of the array
  -> We must calculate how many recursive calls we make. The number of recursive
  calls is the number of times we must split the array to reach the base case. 
  Since we split in half each time, the number of recursive calls is O(log(n)).
    * For example, say we had an array of length 32
    * The the length would change as '32->16->8->4->2->1', we have to split 5
    times before reaching the base case, 'log(32) = 5'
    * In our algoritihm, log(n) describes how many times we must halve 'n' until
    the quantity reaches 1.
  -> Besides the recursive calls, we must consider the while loop within the 
  'merge' function, which contributes 'O(n)' in isolation
  -> We call 'merge' in every recursive 'mergeSort' call, so the total 
  complexity is O(n * log(n))

*/

/*
Space Complexity: O(n)
  Merge Sort is the first non-O(1) space sorting algorithm we've seen thus far.

  The larger the size of our input array, the greater the number of subarrays we
  must create in memory. These are not free! They each take up finite space, and
  we will need a new subarray for each element in the original input. Therefore,
  Merge Sort has a linear space complexity, O(n) 

*/

/*
When Should We Use Merge Sort?
  O(n log n) time is the BEST we can do when sorting unknown datasets. That 
  means Merge Sort is fast! It is way faster than Bubble Sort, Selection Sort,
  and Insertion Sort. However, due to its linear space complexity, we must 
  always weigh the tradeoff between speed and memory consumption when making 
  the choice to use Merge Sort. Consider the following:
    -> If you have unlimited memory available, use it, it is fast!
    -> If you have a decent amount of memory available and a medium sized 
    dataset, run some tests first, but use it!
    -> If you have ver limited memory and you have got time to kill, maybe you
    should consider other options.
    -> If you have very limited memory and no time to kill ... well, you are 
    going to have to do some data analysis to look for some exploitable feature
    of the data set, but that takes human time. 

*/