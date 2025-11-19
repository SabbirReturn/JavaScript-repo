function sumOfNumber(nums){
    let sum =0;
    for(let i = 0; i<nums.length; i++){
        let num = nums[i];
        sum = num + sum
    }
    return sum;
}
let number = sumOfNumber([2,3,4,5,6,7,8,91,11])
console.log(number)