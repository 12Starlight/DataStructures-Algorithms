/*
Quick Sort:
  Similar to mergeSort, quickSort has a 'divide and conquer' strategy. Here are
  a few key ideas that will motivate our design:
    -> It is easy to sort elements of an array relative to a particular target
    value
      * For example given '[7,3,8,9,2]' and a target of '5', we know '[3,2]' are
      numbers less than '5' and '[7,8,9]' are numbers greater than '5'
    -> We can consider an array of 0 or 1 elements as already trivially sorted

How Does It Work?
  In general, the strategy is to divide the input array into two subarrays; one
  with the smaller elements, and one with the larger elements. Then it 
  recursively operates on the two new subarrays, and continues this process 
  until we reach subarrays of length 1 or smaller. As we have seen with Merge
  Sort, arrays of such length are automatically sorted. Here are the steps:
    -> Select one element called the 'pivot'. (This step varies by the
      implementation)
    -> Find the index in the final outputj at which the pivot element should end
    up. To do this:
      * Move all elements smaller than the pivot to the pivot's left, and all 
      elements greater than the pivot to the pivot's right
    -> Repeat the process, individually, for the left side, and then for the 
    right side, by recursively calling Quick Sort on each subarray.

*/

// Partition
const partition = (array, pivot) => {
  let left = [];
  let right = [];

  array.forEach(el => {
    if (el < pivot) {
      left.push(el);
    } else {
      right.push(el);
    }
  });

  return [left, right];
}

// Recursive Partition
const recPartition = (array, pivot) => {
  let left = array.filter(el => el < pivot);
  let right = array.filter(el => el >= pivot);
  return [left, right];
}

const quickSort = (array) => {
  if (array.length <= 1) return array;

  let pivot = array.shift();
  let left = array.filter(el => el < pivot);
  let right = array.filger(el => el >= pivot);

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  return leftSorted.concat([pivot]).concat(rightSorted);
}

/*
That last 'concat' line is a bit clunky. Bonus JS Lesson: we can use the spread
'...' operator to elegantly concat arrays. In general:

let one = ['a', 'b']
let two = ['d', 'e', 'f']
let newArr = [...one, 'c', ...two]; // ['a', 'b', 'c', 'd', 'e', 'f']

Utlizing that spread pattern gives us this final implementation:

*/

const finalQuickSort = (array) => {
  if (array.length <= 1) return array;

  let pivot = array.shift();
  let left = array.filter(el => el < pivot);
  let right = array.filter(el => el >= pivot);

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  return [...leftSorted, pivot, ...rightSorted];
}

/*
Time Complexity:
  * Avg Case: O(n log(n))
  * Worst Case: O(n^2)

The runtime analysis of 'quickSort' is more complex than 'mergeSort'
  -> 'n' is the length of the input array
  -> The partition step alone is 'O(n)'
  -> We must calculate how many recursive calls we make. The number of recursive
  calls is the number of times we must split the array to reach the base case. 
  This is dependent on how we choose the pivot. Let us analyze the best and 
  worst case:
    * Best Case: We are lucky and always choose the median as the pivot. This 
    means the left and right partitions will have equal length. This will halve
    the array length at every step of the recursion. We benefit from this havling
    with 'O(log(n))' recursive calls to reach the base case.
    * Worst Case: We are unlucky and always choose the min or max as the pivot.
    This means one partition will contain everything, and the other partition is
    empty. This will decrease the array length by 1 at every step of the 
    recursion. We suffer from 'O(n)' recursive calls to reach the base case.
  -> The partition step occurs in every recursive call, so our total complexities
  are:
    * Best Case: O(n * log(n))
    * Worst Case: O(n^2)

Although we typically take the worst case when describing Big-O for an 
algorithm, much research on 'quickSort' has shown the worst case to be an 
exceedingly rare occurance even if we choose the pivot at random. Because of 
this we still consider 'quickSort' an efficient algorithm. This is a common 
interview talking point, so you should be familiar with the relationship 
between the choice of pivot and efficiency of the algorithm.

Just in case: A somewhat common question a student may ask when studying 
'quickSort' is "If the median is the best pivot, why do we not always just
choose the median when we partition?" Do NOT overthink this. To know the median
of an array, it must be sorted in the first place!

*/

/*
Space Complexity:
  Our implementation of 'quickSort' uses 'O(n)' space because of the partition
  arrays we create. There is an in-place version of 'quickSort' that uses
  O(log(n)) space. 'O(log(n))' space is not a huge benefit over 'O(n)'. You will
  also find our version of 'quickSort' easier to remember, easier to implement.
  Just know that a 'O(log(n))' space 'quickSort' exists. 

*/

/*
When Should We Use Quick Sort?
  -> When you are in a pinch and need to throw down an efficient sort 
  (on average). The recursive code is light and simple to implement; much 
  smaller than 'mergeSort'
  -> When constant space is important to you, use the in-place version. This 
  will of course trade off some simplicity of implementation. 
  -> We will suffer from the worst case time complexity in the vent that we are
  given an already sorted array:
    * If you know your input data to be mostly sorted, randomize the choice of
    pivot
    
*/