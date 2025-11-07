// Display sum of all the odd numbers from 91 to 129.
let sum =0;
for(let i = 91; i<129 ; i++){
    if(i % 2 !=0){
        sum = sum + i
    }
}
// console.log('Odd sum:',sum)


// Display sum of all the even numbers from 51 to 85.

let evenSum = 0;
for( let  i = 51 ; i<85 ; i++){
    if(i % 2 ===0){
        evenSum = evenSum + i;
    }
}
console.log('Even sum:', evenSum)