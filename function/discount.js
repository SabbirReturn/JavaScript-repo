function discountPrice(quantity){
    if(quantity<=100){
        let total = quantity * 100;
        return total;
    }
    else{
        if(quantity>=101){
            let total = quantity * 90;
            return total;

        }
        else{
            let total = quantity * 80;
            return total;
        }
    }
}

let price = discountPrice(290);
console.log('Pay bill:',price)