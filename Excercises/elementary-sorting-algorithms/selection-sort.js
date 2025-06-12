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

//Selection sort default comparator
function selectionSort(arr, comparator) {
  if (arr.length === 0) return [];

  if (typeof comparator !== "function") {
    comparator = (a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    };
  }

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[min], arr[j]) > 0) {
        min = j;
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}


var moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];
 

function oldestToYoungest(a, b) {
  return b.age - a.age;
}
 

console.log(selectionSort(moarKittyData,oldestToYoungest));
