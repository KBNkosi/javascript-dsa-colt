// Given two numbers compare if they contain the same digits, and that they occur the same number of times
// If they do, return true
// If they don't, return false

const sameFrequency=(num1, num2)=>{

    //Convert integers to strings to make them iterable
  let  strNum1=num1.toString();
  let  strNum2=num2.toString();


    if(strNum1.length !== strNum2.length){
        return false;
    }

   let objNum1={};
   let objNum2={};

    for(let val of strNum1){
    /* This line of code is creating a key-value pair in the `objNum1` object where the key is the
    current digit `val` from the `strNum1` string, and the value is the count of how many times that
    digit appears in the string. */
        objNum1[val]=(objNum1[val] || 0) + 1
    };

    for(let val of strNum2){
        objNum2[val]=(objNum2[val] || 0) + 1
    };

    console.log(objNum1);
    console.log(objNum2);

    for(let key in objNum1){
        if(!(key in objNum2)){
           return false;
        }

        if(objNum1[key] !== objNum2[key]){
            return false;
        }
    }

    return true;


}

console.log(sameFrequency(12346, 43215))