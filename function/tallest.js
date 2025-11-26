let height = [75,66,68,95,78,69,52,78,108]

function getMax(numbers){
    let max = numbers[0]
    for(let number of numbers){
        if(number > max){
            max = number
        }
    }
    return max;
}

let tallest = getMax(height);
console.log(tallest);