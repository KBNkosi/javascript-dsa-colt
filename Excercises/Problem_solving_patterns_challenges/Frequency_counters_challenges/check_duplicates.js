// Write a function that if given varying inputs or different inputs, checks if there are any duplicates in the inputs
//If so, return true
// if not, return false


//My Approach:
// Take inputs and store them as properties in a object
// If input exists in the object, return true
// If not, return false 

function checkDuplicates(...args){
    let obj = {};

    for(let val of args){
        if(obj[val]){
            return true;
        }
        obj[val] = 1;  // Add this line to store the value
    }

    return false;
}

// Test cases
console.log(checkDuplicates('a','b','c',1,2,1));  // true
console.log(checkDuplicates('a','b','c'));        // false
console.log(checkDuplicates(1,2,3,1));           // true
