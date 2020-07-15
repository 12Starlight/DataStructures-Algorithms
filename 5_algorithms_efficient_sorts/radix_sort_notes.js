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
