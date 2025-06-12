//What is insertion sort
// Builds up the sort by gradually creating a larger left half which is always sorted
// S0 it builds the left half by taking values in the right and comparing them to the left
// and inserting them at their correct position or index

/**
 * Insertion Sort Pseudocode
 * > Start by picking the second element in the array
 * > Mow compare the second element with the one before it
 *    and swap if necessary.
 * > Continue to the next element and if it is in the incorrect
 *    order, iterate through the sorted portion (i.e. the left side)
 *    to place the element in the correct place.
 * > repeat until the array is sorted.
 * Time complexity = 0(n^2)
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j+1]=currentVal;
  }

  return arr;
}

/**
 * What we are basically doing with the array
 * Is that we store the next value and loop through the values before it
 * If the values before it are greater we move them up to create space where we can place the value in its correct position
 * Then we place the value we are keeping track next to a value that is lesser than it.
 */
const nums = [5, 7, 9, 2, 3, 1];

console.log(insertionSort(nums));
