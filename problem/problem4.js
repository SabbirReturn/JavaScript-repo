let maxMark = (a,b)=>{
    let newArray = [...a, ...b]
    let max = Math.max(...newArray);
    return max
}
let nums1 = [2,3,4,5,6,11,33,12]
let nums2 = [22,83,4,51,6,11,33,12]
let maxValue = maxMark(nums1,nums2);
console.log(maxValue)