////// Bubble Sort Notes /////////

// Bubble sort is an algorithm that pushes the largest element to the top
// It does this by comparing the values in the dataset one be one and swaps them
// It continues until all elements are sorted
// The idea is that at each iteration we are working on a smaller dataset. 
// Meaning we making less and less comparisons as we go along
// It relies heavily on swapping
// It is not the most efficient algorithm

////// Bubble sort Implementation ///////

/**
 * BubbleSort Pseudocode
 * > Start looping with a variable called i starting
 *    from the end of the array towards the beginning
 * > Start an inner loop with a variable called j from the
 *    beginning until i-1
 * > If arr[j] is greater than arr[j+1], swap those two values!
 * > return the sorted array
 */

//// Bubble Sort Optimization /////
// If the dataset is almost sorted 
// Then there is no need to check each and every element 
// In which case we can define a boolean value which will check whether we are still making swaps
// We set it to true by default, meaning we are not making swaps
// if we are swapping, then we set it to false
// When are not making any swaps anymore, then boolean value will remain true and break out of the loop  
// This ensures that we don't keep looping through the entire dataset even though we are done sorting

function bubbleSort(array) {
    let noSwaps;
  for (let i = array.length - 1; i > 0; i--) {
       noSwaps=true;
    for (let j = 0; j <=i-1; j++) {
      if (array[j] > array[j + 1]) {
        // let temp = array[j];
        // array[j] = array[j + 1];
        // array[j+1] = temp;
        [array[j],array[j+1]]=[array[j+1],array[j]];
        noSwaps=false;
      }
    }
      if(noSwaps) break;
  }
    return array;
 
}

console.log(bubbleSort([5,2,3,4]));
