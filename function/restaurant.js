function bill(nums){
    let sum = 0;
    for(let num of nums){
        // 1% vat
        if(num>0){
            let vatPrice = (num*1)/100;
            let price = num + vatPrice;
            sum = sum + price
        }
    }
    if(sum>5000){
        // 10% discount
        let discountPrice = (sum* 10)/100;
        let amount = sum - discountPrice;
        return amount
    }
}

let payBill = bill([2200,3999,1200]) 
console.log(payBill)