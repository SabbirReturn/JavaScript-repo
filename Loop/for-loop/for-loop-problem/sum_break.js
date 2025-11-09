// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

let sum = 0;
for(let i = 1; i<20; i++){
    console.log(i)
    sum = sum + i;
    // console.log('Sum of:', sum)
    if(sum>20){
        break
    }
   console.log('Sum of:', sum)
}
