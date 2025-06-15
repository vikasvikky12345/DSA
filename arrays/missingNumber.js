function missingNumber(nums){
    // let n = nums.length;
    // let totalSum = n*(n+1)/2
    // let actualSum = nums.reduce((acc,curr)=>acc+curr,0)
    // return totalSum - actualSum;
    let xor = 0;
    for(let i = 0;i<nums.length;i++){
        xor ^= nums[i];
    }
    for(let i = 0;i<=nums.length;i++){
        xor ^= i;
    }
    return xor;


}
let res = missingNumber([9,6,4,2,3,5,7,8,1]);
console.log(res);
