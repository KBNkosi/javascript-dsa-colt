// function reverse(str){
//    let newStr="";

//    for(let i =str.length-1; i>=0; i--){
//     newStr+=str[i];
//    };

//   return newStr;

// }

// let string="hello";

// console.log(string)

// Check if it is not an empty string, if so return.
// Convert the string to an array
// Concatenate the last value of the array to a new array
// Remove the last element from the array
// Convert the array back to a string and call the function again with the new string

function reverse(str) {
  if (str.length === 0) return "";

  let index = str.length - 1;
  newStr = str.slice(0, -1);

  let reverseStr = "";

  return (reverseStr += [str[index]] + reverse(newStr));
}

console.log(reverse("hello"));
