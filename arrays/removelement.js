function removeElement(arr,val){
    let x = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] != val){
            arr[x] = arr[i];
            x++;
        }
    }
    return x;
}
let res = removeElement([0,1,2,2,3,0,4,2],2);
console.log(res);