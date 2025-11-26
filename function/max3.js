let tim = 56;
let jim = 77;
let kim = 95;

function getMax(mark1,...marks){
    let maxMark = Math.max(mark1,...marks);
    return maxMark;
}

let max = getMax(tim,jim,kim)
console.log(max)