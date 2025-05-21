// Write a function that takes two parameters=> array and a callback function(optional) that can be used for comparing values
// The comparison function will take two values from the array and compare them
// The default comparison function should assume that the two parameters are numbers
// And that the values are being sorted from smallest to largest.

// Q = Are we only comparing the two values provided in the comparator function or the entire values in the array
// The bubble sort array returns the sorted array, what do we do with the return of the comparison function
//  The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal.

function compare(val, val2) {
    if(val <val2) {
        return -1;
    } else if(val >val2){
        return 1;
    } else{
        return 0;
    }
}

// function bubbleSort(arr,cb) {
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

function bubbleSort(arr,comparator) {
    if(typeof comparator !== "function"){
        return "Not a function";
    }
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      let result=comparator(arr[j], array[j+1]);
      console.log(result);
      if(result >=1){
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
      }
      
    }

    if (noSwaps) break;
  }

  return arr;
}
