const pairSum = (numbers, targetSum) => {
  // todo
  let pairIndices=[]
  for(let i=0; i<numbers.length; i++){
    for(let j=i+1; j<numbers.length; j++){
     if(numbers[i] + numbers[j] ===targetSum){
       pairIndices.push([i,j])
     }
    }
  }

  return pairIndices
};

console.log(pairSum([3, 2, 5, 4, 1], 8))