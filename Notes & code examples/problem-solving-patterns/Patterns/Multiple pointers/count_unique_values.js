function countUniqueValues(arr){
    let i=0;

    for(let j=1; j<arr.length; j++){
        
        if(arr.length===0) return 0;

        if(arr[i] !== arr[j]){
            i++;
            arr[i]=arr[j];
        }

        return i +1;
    }
}