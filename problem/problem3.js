let allRounderNumber = (numbers)=>{
    let sum = 0;
    for(let number of numbers){
        let squareNumber = number * number;
        sum = sum + squareNumber
    }
    let range = numbers.length;
    let avg = sum / range;
    return avg
}
let numbers = [2,3,4,5,6,7,18,9]
let number = allRounderNumber(numbers)
console.log(number);