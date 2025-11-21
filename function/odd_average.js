// function oddAverage(nums){
//     let odds = [];
//     for(let i = 0; i<nums.length; i++){
//         let number = nums[i];
//         if(number % 2 ===1){
//             odds.push(number)
//         }
//     }
//     let sum = 0;
//     for( let odd of odds){
//         sum = sum + odd
//     }
//     let average = sum / odds.length;
//     return average;
// }

// let numbers = [22,31,23,44,61,32,45]
// let average = oddAverage(numbers);
// console.log(average);
function oddAverage(nums){
    let odds = [];
    for(let i = 0; i<nums.length; i++){
        let number = nums[i];
        if(number % 2 ===1){
            odds.push(number)
        }
    }
    let sum = 0;
    for( let odd of odds){
        sum = sum + odd
    }
    let average = sum / odds.length;
    return average;
}

let numbers = [22,31,23,44,61,32,45]
let average = oddAverage(numbers);
console.log(average);