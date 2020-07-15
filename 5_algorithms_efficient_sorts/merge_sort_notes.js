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

const merge = (arr1, arr2) => {
  let merged = [];

  // keep running while either array still contains elements
  while (arr1.length || arr2.length) {
    // if arr1 is not empty, take its first element as ele1, otherwise arr1 is 
    // empty, so take Infinity as ele1
    let ele1 = arr1.length ? arr1[0] : Infinity;
    // so the same for arr2, ele2
    let ele2 = arr2.length ? arr2[0] : Infinity;

    let next;
    // remove the smaller of the eles from it's array
    if (ele1 < ele2) {
      next = arr1.shift();
    } else {
      next = arr2.shift();
    }

    // and add that ele to the new array
    merged.push(next);
  }

  return merged;
}

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