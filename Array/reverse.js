let numbers = [1,2,3,4,5,6,7,8,9]
let reverseNumber= []
// for(let number of numbers){
//     reverseNumber.unshift(number)
// }
// // console.log(reverseNumber)

for( let i = numbers.length; i>=0; i--){
    reverseNumber.push(i)
}
console.log(reverseNumber)