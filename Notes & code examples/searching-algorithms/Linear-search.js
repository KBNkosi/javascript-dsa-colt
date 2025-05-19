// What are Searching algorithms?
// Searching algorithms are functions that look up data to see if certain information exists or is contained 


//Linear Search - Is a search function that checks if something exists or is contained by looking up the values of the data
// one by one from beginning to the end.

function linearSearch(array, val){

  for(let i=0; i<array.length; i++){
    if(array[i]===val){
        return i;
    }else{
        return -1;
    }
  }
}

console.log(linearSearch([1,2,3,4],3));
