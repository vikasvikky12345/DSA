// function mergeSortedArray(nums1,nums2){
//     let p1 = nums1.length - 1;
//     let p2 = nums2.length - 1;
//     for (let i = nums1.length + nums2.length - 1; i >= 0; i--) {
//       if (p2 < 0) break;
//       if (p1 >= 0 && nums1[p1] > nums2[p2]) {
//         nums1[i] = nums1[p1];
//         p1--;
//       } else {
//         nums1[i] = nums2[p2];
//         p2--;
//       }
//     }
//     return nums1;
// }
// let nums1 = [1, 2, 3, 0, 0, 0];
// let nums2 = [2, 5, 6];



// mergeSortedArray(nums1, 3, nums2, 3);
// console.log(nums1);

function mergeSortedArray(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let i = m + n - 1;

    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i--] = nums1[p1--];
        } else {
            nums1[i--] = nums2[p2--];
        }
    }
}

// Properly initialize nums1 with empty space at end
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];

mergeSortedArray(nums1, 3, nums2, 3);
console.log(nums1); // ➡ [1, 2, 2, 3, 5, 6]
