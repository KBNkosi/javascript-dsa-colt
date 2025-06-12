// What Is Selection Sort
// Selection sort is the opposite of bubble sort,
//   In that instead of pushing the largest values
//   to the back, it pushes the smallest values to
//   to the front

/**
 * Selection Sort Pseudocode
 * > Store the first element as the smallest value you've seen so far
 * > Compare this item to the next item in the array until you find a
 *    smaller number.
 * > If a smaller number is found, designate that smaller number to be
 *    the new "minimum" and continue until the end of the array
 * > If the "minimum" is not the value(index) you initially began with
 *    swap the two values.
 * > Repeat this with the next element until the array is sorted.
 */

function selectionSort(arr) {
  if (arr.length === 0) return [];

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}
console.log(selectionSort([5, 6, 3, 2, -7, 1, 0, 35]));
