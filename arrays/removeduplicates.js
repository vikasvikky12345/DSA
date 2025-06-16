function removeDuplicates(arr){
    let x= 0
    for(let i = 0;i<arr.length;i++){
        if(arr[i] > arr[x]){
            x++;
            arr[x] = arr[i];
        }
    }
    return x+1;
}
let res = removeDuplicates([1,2,2,3,4,4,5,6,6,7,8,8,9,9]);
console.log(res);