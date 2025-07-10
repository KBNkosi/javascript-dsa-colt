var twoSum = function(nums, target) {
    previous={};

    for(let i=0; i<nums.length; i++){
        let complement=target - nums[i]
        if(complement in previous){
            return [previous[complement], i]
        }

        previous[nums[i]]=i; 

        console.log(previous)
    }
};

console.log(twoSum([2,7,11,15],9))