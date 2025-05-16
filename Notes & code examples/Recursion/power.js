// write a function that accepts two numbers a base number, and a second number(exponent)
// the function should return the result of the base number multiplied by itself n(second number) times 

//Iterative function
// function iterativePow(baseNum, exp){
//     if(exp === 0){
//         return 1;
//     }

//   let result=1;

//   for(let i=1; i<=exp; i++){
//     result=result* baseNum
//   }

//   return result;

// }

// console.log(iterativePow(2,4));

function recursivePow(baseNum,exp){
    if(exp===0) return 1;

    return baseNum * recursivePow(baseNum, exp-1)
}

/**
 * > 2 * 4
 *   > 2 * ( 2 * 2)
 *     > 2 * ( 2 * (2 * 1))
 *       > recursive(2,0) return 1;
 */

console.log(recursivePow(2,3));