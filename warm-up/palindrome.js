function palindrome(num){
    if(num <0) return false;
    let rev = 0;
    let temp = num;
    while(num >0){
        let rem = num %10;
        rev = rev*10+rem;
        num = Math.floor(num/10);
    }
    return rev === temp;
}
let res = palindrome(1236721);
console.log(res);
