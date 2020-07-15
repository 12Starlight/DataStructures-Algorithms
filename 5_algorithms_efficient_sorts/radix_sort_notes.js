/*
Radix Sort: A non-comparison, integer sorting algorithm
  Its time complexity is superior to every other sorting algorithm we have 
  encountered thus far, but it can only be used in the special case where we are
  strictly sorting integer data. Often mostly used on lists of binary numbers. 
  
  All sorts of data ca be converted into binary format before being processed,
  including long strings of text and image data. Regardless, it is critical that
  all data be converted to binary (or some other integer representation) before
  Radix Sort is invoked.

*/

/*
Radix Sort needs three helper methods:
  -> getDigitForm
  -> getIntLength
  -> getMaxDigits

*/

const getDigitForm = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

/*
The Math:
  -> Absolute value to avoid getting back negative digits
  -> Divide by Math.pow(10, i) to divide integer by it's place value, 10th place
  -> Floor to round away any decimals
  -> Mod 10 to get the digit of interest

*/


const getIntLength = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

/*
We need to know the number of digits of the largest number in our list:
  -> This is how we know how many times to run through our algorithmic process;
  how many times to bucket and unbucket our numbers.

The Math:
  -> Log10: Asks the question, "10 to what power gives us this number?"
  -> Special case where 'num === 0' is due to log10(0) = -Infinity

*/


const getMaxDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
  }
  return maxDigits;
}

// Radix Sort: Input arrays containing only positive integers
const radixSort = (arr) => {
  if (!Array.isArray(arr)) return null;

  let maxDigits = getMaxDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    let buckets = Array.from({length: 10}, () => []); // Array of empty arrays

    for (let i = 0; i < arr.length; i++) {
      let digit = getDigitForm(arr[i], k);
      buckets[digit].push(arr[i]);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}

// Radix Sort: Input arrays are both postive and negative integers
const radixSortWithNegatives = (arr) => {
  if (!Array.isArray(arr)) return null;

  var negatives = arr.filter(item => item < 0);
  var negativesSorted = [];
  if (negatives.length > 0) {
    negativesSorted = radixSort(negatives.map(item => Math.abs(item)))
      .reverse()
      .map(item => -item);
  }

  var positives = arr.filter(item => item >= 0);
  let maxDigits = getMaxDigits(positives);

  for (let k = 0; k < maxDigits; k++) {
    let buckets = Array.from({length: 10}, () => []);

    for (let i = 0; i < positives.length; i++) {
      let digit = getDigitForm(positives[i], k);
      buckets[digit].push(positives[i]);
    }

    positives = [].concat(...buckets);
  }

  return negativesSorted.concat(positives); 
}

/*
Time Complexity: 
  In general, the best, average, and worst case time complexities of Radix Sort 
  are all the same.

  Since the algorithm requires iterating over all 'n' elements of the input 
  array, and doing so 'k' times, where 'k' is the length (number of digits) of
  the longest integer in the array, we wind up with a run time of O(n * k). This 
  makes Radix Sort faster than any of the previous comparison-based algorithms
  we have seen earlier in the course!

  However, there is actually some debate in the CS community over this topic. 
  There exists a camp that believes that when Radix Sort's input array contains
  entirely unique values, due to a characteristic of the way computers store 
  numerical data, that 'k' becomes 'log k'. 
  
  If this is true, the absolute worst case scenario becomes the case where the
  length of the longest integer in the input array, 'k', is equal to (or
  greater than) the total number of elements in the array, 'n'. In this scenario,
  we wind up with an O(n log(k)), or approximately O(n log(n)), run time, making
  Radix Sort, at worst, equal in speed to our fastest comparison-based sorting
  algorithm.

  Though it will require some additional research, this may be a worthwhile 
  talking point in an interview setting!

*/

/*
Space Complexity:
    Radix Sort is an O(n + k) space algorithm. 

    The amount of memory consumed by the algorithm increases relative to both 
    the size of the input array and the length of the longest integer.

*/

/*
When Should We Use Radix Sort?
  -> To sort a list of any sort of binary data, including numeric, text, or 
  image data in binary format
  -> To sort a list of integers, and you do not know the value of the largest
  element in the list
    * If you do know the largest element in the list, see 'countingSort'!

Radix Sort's run time, O(n * k), is dependent on the length (number of digits)
of the largest integer in the input, 'k'. For this reason, it is fastest when
'k' is relatively small. 

*/