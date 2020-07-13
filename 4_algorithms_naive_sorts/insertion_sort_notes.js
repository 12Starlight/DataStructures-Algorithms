/*
Insertion Sort: Another Slow Category Sorting Algorithm
  Insertion Sort is similar to Selection Sort in that it gradually builds up a 
  larger and larger sorted region at the left-most end of the array.

  However, Insertion Sort differs from Selection Sort bc this algorithm does not
  focus on searching for the right element to plae (the next smallest in our
  Selection Sort) on each pass through the array. Instead, it focuses on sorting
  each element in the order they appear from left to right, regardless of their
  value, and inserting them in the most appropriate position in the sorted 
  region.

The Steps:
    Insertion Sort grows a sorted array on the left side of the input array by:
      -> Iterating across the input array one element at a time
      -> Selecting the current element
      -> Finding the position in the left sorted region that our element can be
      inserted while maintaining sorted order
      -> And inserting the current element into that position

*/

// Insertion Sort JS Implementation
const insertionSort = (arr) => {
  /*
    The 'i' loop will iterate through every element of the array. We begin at 
    i = 1, bc we can consider the first element of the array as a trivially 
    sorted region of only one element. Insertion Sort allows us to insert new
    elements anywhere within the sorted region
  */
  for (let i = 1; i < arr.length; i++) {
    // grab the first element of the unsorted region
    let currElement = arr[i];

    // the 'j' loop will iterate left through the sorted region, looking for a 
    // legal spot to insert currElement
    for (let j = i - 1; j >= 0 && currElement < arr[j]; j--) {
      // keep moving left while currElement is less than the j-th element

      arr[j + 1] = arr[j];
      // the line above will move the j-th element to the right, leaving a gap
      // to potentially insert currElement
    }

    // insert currElement into that gap
    arr[j + 1] = currElement;
  }

  return arr;
}

/*
A Few Things To Point Out:

1.) Our outer 'for' loop starts at the 1st index, not the 0th index, and moves 
to the right.

2.) Our inner 'for' loop starts immediately to the left of the current element,
and moves to the left.

3.) The condition for our inner 'for' loop is complicated, and behaves similarly
to a while loop!
  -> We continue iterating to the left toward 'j = 0', only while the 
  'currElement' is less than 'arr[j]'
  -> We do this over and over until we find the proper place to insert 
  'currElement', and then we exit the inner loop!

4.) When shifting elements in the sorted region to the right, we do not replace
their value at their old index!
  -> If the input array is '[1,2,4,3]', and 'currElement' is '3', after
  comparing '4' and '3', but before inserting '3' between '2' and '4', the array
  will look like this: '[1,2,4,4]'

*/

/*
Time Complexity O(n^2):
  In the WORST CASE scenario where our input array is entirely unsorted, since
  this algorithm contains a nested loop, its run time behaves similarly to 
  Bubble Sort and Selection Sort. In this case, we are forced to make a 
  comparison at each iteration of the inner loop.

*/

/*
Space Complexity O(1):
  The amount of memory consumed by the algorithm does not increase relative to
  the size of the input array. We use the same amount of memory and create the
  same amount of variables regardless of the size fo our input. A quick 
  indicator of this is the fact that we do not create any arrays.

*/

/*
When Should We Use Insertion Sort?
  Known as an 'online' algorithm, making it surpreme for dealing with streaming 
  data. This is bc it can sort the data live as it is received. Insertion Sort
  works well in this situation bc the left side of the array is always sorted, 
  and in the case of nearly sorted arrays, it can run in linear time. 

  The absolute best case scenario for Insertion Sort is when there is only one
  unsoted element, and it is located all the way to the right of the array. If
  you have data constantly being pushed to the array, it will always be added to
  the right side. If you keep your algorithm constantly running, the left side 
  will always be sorted. Now you have linear time sort ;)

*/