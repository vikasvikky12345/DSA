function singleNumber(nums){
    // let hashmap = new Map();
    // for(let i = 0;i<nums.length;i++){
    //     if(!hashmap.has(nums[i])){
    //         hashmap.set(nums[i],1);
    //     }else{
    //         hashmap.set(nums[i],hashmap.get(nums[i])+1);
    //     }
    // }
    // for(let [key,value] of hashmap){
    //     if(value === 1){
    //         return key;
    //     }
    // }

    let xor = 0;
    for(let i = 0;i<nums.length;i++){
        xor ^= nums[i];
    }
    return xor;
}

let res = singleNumber([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,11,11,12]);
console.log(res);

