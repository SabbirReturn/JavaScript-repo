function layeredDiscountTotal(quantity){
    let first100Price = 100;
    let second100Price = 90;
    let third100Price = 80;

    if(quantity<=100){
        let first100Total = quantity * first100Price;
        return first100Total;
    }
    else{
        if(quantity>=101 && quantity<=200){
            let first100Total = 100 * first100Price;
            let remainingTotal = quantity-100;
            let remainingTotalPrice = remainingTotal * second100Price;
            let totalPrice = first100Total + remainingTotalPrice;
            return totalPrice;
        }
        else{
            let first100Total = 100 * first100Price;
            let second100Total = 100 * second100Price;
            let remainingTotal = quantity - 200;
            let remainingTotalPrice = remainingTotal * third100Price;
            let totalPrice = first100Total + second100Total + remainingTotalPrice;
            return totalPrice;
        }
    }

}

let totalPrice = layeredDiscountTotal(50);
console.log('Total Price:',totalPrice);