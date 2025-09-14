let bill = 4000;
if(bill>=5000){
    // 10% discount
    let discountAmount = bill * 10 /100;
    let payBill = bill - discountAmount;
    console.log('Pay Bill',payBill);
}
else if(bill<=4000){
    // 5% discount
    let discountAmount = bill * 5 /100;
    let payBill = bill - discountAmount;
    console.log('Pay Bill',payBill)
}
else{
    console.log('Pay Bill',bill);
}