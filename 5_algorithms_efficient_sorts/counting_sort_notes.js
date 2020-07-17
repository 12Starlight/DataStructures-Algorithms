/*
Counting Sort: Another non-comparison, integer sorting algorithm
  Just like Radix Sort, its time complexity is superior to every other 
  comparison-based sorting algorithm we ahve encountered thus far, but it can
  only be used in the special case where awe are sorting integer data. 
  Additionally, we must know the largest integer value in the input array (which
  we will refer to as k) *prior* to beginning our sort. (Or... we must be 
  willing to take the time to search for it first.) 

Why Integer Data?
  Similar to Radix Sort, it works by exploitinig some specific properties of the
  integer data type. However, the property we are exploiting about integers is
  simpler, and is linked to our friend the array data structure. We are simply
  going to take advantage of the fact that an arrays indices are integers, and
  that they are pesorted for us. We will use an array data structure as a 
  storage device for us to count the number of occurences of each integer in our
  input array. (Thus, the name 'Counting Sort'.)

NOTE: This strategy will only work for input arrays containing exclusively
positive integers. However we could do negatives with just a little extra 
preliminary information - the smallest integer in the input array - we can 
allocate 'largest - smallest' (where 'smallest is negative) elements to our 
counter array upon initialization, remembering that our counter array's indices
now represent values that are offset by 'Math.abs(smallest)'

*/

const countingSort = (arr, max) => {
  const result = [];
  const counters = new Array(max + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    counters[arr[i]]++;
  }

  for (let i = 0; i < counters.length; i++) {
    while (counters[i] > 0) {
      result.push(i);
      counters[i]--;
    }
  }

  return result;
}

/*
Time Complexity:
  In general, the best, average, and worst case time complexities of Counting
  Sort are all the same.

  Since this algorithm requires iterating over all 'n' elements of the input 
  array, and then subsequently iterating over our element of our counter array
  (which has length 'k'), we wind up with a run time of O(n + k). This makes
  Counting Sort faster than any of the previous comparison-based algorithms, and
  also faster than Radix Sort!

*/

/*
Space Complexity
  The trade off for Counting Sort comes with its space complexity. The smaller 
  the range of integers that can possibly occur in our input array, the more
  memory efficient Counting Sort will be. The larger 'k' is, the larger the 
  number of elements we will have to allocate in our counter array. Thus, the 
  space complexity of Counting Sort is O(k).

NOTE: In an interview setting, always ask the interviewer, if you can be 
guaranteed that the largest element in the input array is not huge.

If asked why, mention that you may choose to use the Counting Sort algorithm to
achieve a linear sort, but are considering the memory-cost trade offs involved.
According to the ECMA-262 5th edition spec, due to 32-bit numbers, the 
upper-bound length of a JavaScript array is 2^32 -1, which is 4,294,967,295. If
the largest possible integer in your array is larger than this, you will have to
optimize the Counting Sort algorithm to use less total memory, if you intend to
use it. 

*/

/*
When Should We Use Counting Sort?
  -> Sort a list of integer data, and you DO know the value of the largest 
  element in the list
    * If you do NOT know the largest element in the list, see 'RadixSort'!

Counting Sort's run time, O(n + k), is dependent on the size of the largest 
integer in the input, 'k'. For this reason, it is fastest when 'k' is relatively
small.

*/