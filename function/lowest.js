// let lowestMarks = [75,66,68,95,78,69,52,78,108];


// function getLowest(numbers){
//     let lowestMark = numbers[0];
//     for(let number of numbers){
//         if(number<lowestMark){
//             lowestMark = number
//         }
//     }
//     return lowestMark;
// }

// let lowest = getLowest(lowestMarks);
// console.log(lowest)
let lowestMarks = [75,66,68,95,78,69,52,78,108];


function getLowest(numbers){
    let lowestMark = numbers[0];
    for(let number of numbers){
        if(number<lowestMark){
            lowestMark = number
        }
    }
    return lowestMark;
}

let lowest = getLowest(lowestMarks);
console.log(lowest)