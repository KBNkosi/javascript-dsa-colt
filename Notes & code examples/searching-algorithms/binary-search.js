// What is binary search?

// > Binary search is an algorithm that searches for a value or values by halving
// or cutting the dataset into half instead of searching through the elements one by one

//Binary search only works on sorted data

/**
 * Binary Search Pseudocode
 * > Write a function that accepts a sorted array and a value
 * > Create a left pointer at the start of the array, and a
 *     right pointer at the end of the array
 * > While the left pointer comes before the right pointer:
 *    Create a pointer in the middle
 *    If you find the value you want, return the index
 *    If the value is too small, move the left pointer up
 *    If the value is too large, move the right pointer down
 * > If you never find the value, return -1
 */

function binarySearch(arr, val) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer <= rightPointer) {
    let middlePointer = Math.round((leftPointer + rightPointer) / 2);

    if (arr[middlePointer] === val) {
      return middlePointer;
    } else if (arr[middlePointer] < val) {
      leftPointer = middlePointer + 1;
    } else {
      rightPointer = middlePointer - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4], 1));
