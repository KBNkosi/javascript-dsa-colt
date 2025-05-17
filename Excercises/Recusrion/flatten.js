// Write a function that accepts an array of arrays and returns a single array with all the values
// My first approach was figuring out how we can assign the values of an array of arrays to a single array.
// Now, i want to test out a small recursive function, to assign an array of arrays to a single single
// First part, we are returning an string instead of a single array because of + operator
// Next, try to solve it using push method, problem is that it still returns an array of arrays
// figure out, how to get rid of at the arrays within the arrays. q= how to access the values of an array inside an array?
// first part of the problem solved=> flatten an array inside the array
// Next part=> what if we an array of arrays within the array

function flatten(arrays){
 if(arrays.length === 0) return [];

    let arr=[];

    if(arrays[0].length > 0){
        for(let i=0; i<arrays[0].length; i++){
            arr.push(arrays[0][i]);
        }
    } else{
     arr.push(arrays[0])
    }

    
    console.log(arr);
    
    
    arr=arr.concat(flatten(arrays.splice(1)));
    return arr;

}

console.log(flatten([1,2,3,[4,5],[[[1]]]]));




// const arr=[1,2,3,[4,5],[5,6]];
// const newArr=[];

// for(let i=0; i<arr.length; i++){
//     if(arr[i].length > 0){
//        for(let j=0;j<arr[i].length; j++){
//          newArr.push(arr[i][j])
//        }
//     }else{
//         newArr.push(arr[i]);
//     }

    
// }


 
/**
 * > return arr=[1] + flatten([2,3,[4,5])
 *  > return arr=[2] + flatten([3,[4,5])
 *   >return arr=[3] + flatten([[4,5]])
 */