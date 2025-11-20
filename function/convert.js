function inchToFeet(inch){
    let feetFraction = inch / 12;
    let feetNumber = parseInt(feetFraction);
    let inchRemaining = inch % 12;
    // let result = feetNumber + ' ft ' + inchRemaining + ' inch ';
    // return result
    return `${feetNumber} ft ${inchRemaining} inch`
}

let sabbirHeight = inchToFeet(75);
console.log(sabbirHeight)