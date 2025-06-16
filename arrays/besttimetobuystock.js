function bestTimeToBuyStock(prices){
    let maxprofit = 0;
    let min = prices[0];
    for(let i = 0;i<prices.length;i++){
        if(prices[i]<min){
            min = prices[i];
        }
        if(prices[i]-min > maxprofit){
            maxprofit = prices[i]-min;
        }
    }
    return maxprofit;
}
let res = bestTimeToBuyStock([7,1,5,3,6,4]);
console.log(res);