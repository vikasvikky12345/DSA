function countOfDigit(num){
    let count = 0;
    while(num > 0){
        count++;
        num = Math.floor(num /10);
    }
    return count;
}
let res = countOfDigit(1234567890);
console.log(res);
