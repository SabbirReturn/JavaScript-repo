// let tim = 56;
// let jim = 77;
// let kim = 95;

// function getMax(mark1,...marks){
//     let maxMark = Math.max(mark1,...marks);
//     return maxMark;
// }

// let max = getMax(tim,jim,kim)
// console.log(max)

function getMax(nums){
    let largerNumber = nums[0];
    for(let num of nums){
       if(num > largerNumber){
        largerNumber = num
       } 
    }
    return largerNumber
}

let number = getMax([22,33,11,55,77,91,33,11,44,32])
console.log(number)