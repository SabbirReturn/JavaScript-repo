let ticketFare = 800;
let age = 50;
let isStudent = false;
let direction;
if(age<=10){
    direction = 'Free'
}
else if(isStudent===true && age>10){
    // 50% off
    let discountAmount = ticketFare * 50 /100;
    let amount = ticketFare - discountAmount;
    direction = 'Pay:' +amount
}
else if(age>=60){
    // 15% off
    let discountAmount = ticketFare * 15 /100;
    let amount = ticketFare - discountAmount;
    direction = 'Pay:' +amount
}
else{
    direction = 'Ticket fare 800tk'
}
console.log(direction)