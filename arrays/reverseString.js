function reverseString(str){
    let len = str.length;
    let halflen = Math.floor(len/2);
    for(let i = 0;i<halflen;i++){
        let temp = str[i];
        str[i] = str[len-1-i];
        str[len-1-i] = temp;
    }
    return str;
}
let res = reverseString(["h","e","l","l","o"]);
console.log(res);