const pairSum = (numbers, targetSum) => {
  // todo
  let previous={};

  for(let i=0; i<numbers.length; i++){
    let complement = targetSum - numbers[i];
    if(!(complement in previous)){
      previous[numbers[i]]=i;
    } else{
      return [previous[complement], i]
    }
    
  }
  return previous;
};

 console.log(pairSum([3,2,5,4,1], 8))