/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   const seen=new Set();

   for(let num of nums){
    if(seen.has(num)){
        return true;
    }

    seen.add(num)
   }

   console.log(seen);
   

    return false;
};


console.log(containsDuplicate([1,2,3,4]));


