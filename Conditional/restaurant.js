let age = 22;
let price = 500;
if(age<=12){
    console.log('You eat for free');
}
else if(age>=12){
    // add 2% vat
    let vatAmount = price * 2 /100;
    let payment = price + vatAmount;
    console.log('Pay amount', payment)
}
else{
    console.log('Pay amount', price);
}