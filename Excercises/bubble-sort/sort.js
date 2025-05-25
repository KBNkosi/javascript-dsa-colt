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
function bubbleSort(arr, comparator) {
    if(arr.length===0){
        return [];
    }
    
  if (typeof comparator !== "function") {
     comparator=(a, b)=> {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    }
  }
 
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (comparator(arr[j], arr[j+1])>0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

const kittyData = [
    { name: "LilBub", age: 7 },
    { name: "Garfield", age: 40 },
    { name: "Blue", age: 1 }
];

const ageComp=(a,b)=>b.age-a.age;

console.log(bubbleSort(kittyData,ageComp));

// console.log(bubbleSort([5, 4, -3, 2, 1, 0]));


// function strComp(a, b) {
//   if (a < b) { return -1;}
//   else if (a > b) { return 1;}
//   return 0;
// }

// console.log(bubbleSort(['z','c','b','e'],strComp));



