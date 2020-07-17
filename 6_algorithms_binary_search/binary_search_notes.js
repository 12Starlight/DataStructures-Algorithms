/*
Binary Search:
  It would be easy to modify our comparison-based sorting algorithms to sort
  strings: instead of leveraging facts like '0 < 1', we can say 'A' < 'B'. Think
  of a dictionary which contains alphabetically sorted words and their
  definitions. It is only useful when it is ordered that way. 

The Algorithm: "check the middle and half the serach space"
  Formally, our 'binarySearch' will seek to solve the following problem: 'Given
  a sorted array of numbers and a target num, return a boolean indicating 
  whether or not that target is contained in the array.'

  Programmatically, we want to satisfy the following behavior:
    binarySearch([5, 10, 12, 15, 20, 30, 70], 12); // true
    binarySearch([5, 10, 12, 15, 20, 30, 70], 24); // false

  Before we move on, really internalize the fact that 'binarySearch' will only
  work on SORTED arrays!


Binary Search Recursion:
  We will implement binary search recursively. As always, we start witha base 
  case that captures the scenario of the input array being so trivial, that we
  know the answer without further calculation. If we are given an empty array 
  and a target, we can be certain that the target is not inside the array:   

  function binarySearch(array, target) {
    if (array.length === 0) return false;
  }

  Now for our recursive case. If we want to get a time complexity less than O(n),
  we must avoid touching all 'n' elements. adopting our dictionary strategy, let
  us find the middle element and grab refernces to the left and right halves of
  the sorted array:

  function binarySearch(array, target) {
    if (array.length === 0) return false;

    let midIdx = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, midIdx);
    let rightHalf = array.slice(midIdx + 1);
  }

  It is worth pointing out that the left and right halves do not contain the 
  middle element we chose.

  Here is where we leverage the sorted property of the array. If the target is
  less than the middle, then the target must be in the left half of the array.
  If the target is greater than the middle, then the target must be in the right
  half of the array. So, we can narrow our search to one of these halves, and 
  ignore the other. Luckily we have a function that can search the half, its
  'binarySearch':

  function binarySearch(array, target) {
    if (array.length === 0) return false;

    let midIdx = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, midIdx);
    let rightHalf = array.slice(midIdx + 1);

    if (target < array[midIdx]) {
      return binarySearch(leftHalf, target);
    } else if (target < array[midIdx]) {
      return binarySearch(rightHalf, target);
    }
  }

  We know 'binarySearch' will return the correct boolean, so we just pass that
  result up by returning it ourselves. However, something is lacking in our code.
  It is only possible to get a false from the literal 'return false' line, but
  there is not 'return true'. Looking at our conditionals, we handle the cases
  where the target is less than the middle or the target is greater than the 
  middle, but what if the product is EQUAL to the middle? If the target is equal
  to the middle, then we found the target and should 'return true'! This is easy
  to add with an 'else':

  function binarySearch(array, target) {
    if (array.length === 0) return false;

    let midIdx = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, midIdx);
    let rightHalf = array.slice(midIdx + 1);

    if (target < array[midIdx]) {
      return binarySearch(leftHalf, target);
    } else if (target > array[midIdx]) {
      return binarySearch(rightHalf, target);
    } else {
      return true;
    }
  }

  To wrap up, we have confidence our base case will eventually be hit bc we are
  continually halving the array. We halve the array until it's length is 0 or we
  actually find the target. 

*/

// Binary Search JS Implementation:
const binarySearch = (array, target) {
  if (array.length === 0) return false;

  let midIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIdx);
  let rightHalf = array.slice(midIdx + 1);

  if (target < array[midIdx]) {
    return binarySearch(leftHalf, target);
  } else if (target > array[midIdx]) {
    return binarySearch(rightHalf, target);
  } else {
    return true;
  }
}