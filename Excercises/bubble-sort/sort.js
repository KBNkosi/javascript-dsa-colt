/**
 * Requirements
 * 1. Create a bubbleSort function that will sort values in an array
 *   > The BubbleSort function should take 2 parameters:
 *      > An array
 *      > Optional comparator function
 *        > Should be a callback function
 *        > It should take two values from the array and compare them
 *        > It should return:
 *          > -1 if value 1 less than value 2
 *          >  1 if value 1 greater than value 2
 *          >  0 if both values are equal
 *
 * 2. The Optional comparator function should be in two states:
 *   > Default state:
 *     > Assume integer parameters
 *     > sort from smallest to largest (ascending order)
 *   > Custom state:
 *     > Parameters can be of any data type
 *       > strings, objects etc.
 *       > sorting can be smallest to largest or largest to smallest(ascending or descending)
 */

 // Simple sorting with default comparator
// function bubbleSort(arr, comparator) {
//   if(arr.length===0) return [];
//   let noSwaps;
//   for (let i = arr.length; i > 0; i--) {
//     noSwaps = true;
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         noSwaps = false;
//       }
//     }
//     if (noSwaps) break;
//   }
//   return arr;
// }

// console.log(bubbleSort([5,4,-3,2,1,0]));


// sorting with strings

