let arr = [10, 0, -4, 5, -2, 6, -10, 100, 99, 200,201];
function secondLargestNumber(arr) {
  if (arr.length <= 1) {
    return null;
  }
  let max = -Infinity;
  let secondMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max && arr[i] > secondMax) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] != max) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}
let res = secondLargestNumber(arr);
console.log(res);
