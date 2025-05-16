function validAnagram(str1,str2){
if(str1.length !== str2.length){
    return false;
}

let strObj1={};
let strObj2={};

for(let char of str1){
    strObj1[char]=(strObj1[char] || 0) +1
};



for(let char of str2){
    strObj2[char]=(strObj2[char] || 0) +1
};


for(let key in strObj1){
    if(!(key in strObj2)){
        return false
    }

    if(strObj2[key] !== strObj1[key]){
        return false
    }
};

return true;


}

console.log(validAnagram("world","world"))
console.log(validAnagram("world","world"))

