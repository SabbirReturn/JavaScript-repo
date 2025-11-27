// function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
//     let perChairWood = 3;
//     let perTableWood = 4;
//     let perBedQuantity= 6;

//     let allChairWood = chairQuantity * perChairWood;
//     let allTableWood = tableQuantity * perTableWood;
//     let allBedWood = bedQuantity * perBedQuantity;
//     let totalWood = allChairWood + allTableWood + allBedWood;
//     return totalWood
// }

// let wood = woodQuantity(2,3,4)
// console.log('Total Wood:', wood)



function shoppingPrice(shirtQuantity=0, pantQuantity=0,showQuantity=0, otherQuantity=0){
    let shirtPrice = 500 + ((500*2)/100) ;
    let pantPrice = 750 + ((750*3)/100);
    let showPrice = 1700 + ((1700*2.5)/100);
    let otherPrice = 500 + ((500*1)/100);
    
    let allShirtPrice = shirtQuantity * shirtPrice;
    let allPantPrice = pantQuantity * pantPrice;
    let allShowPrice = showQuantity * showPrice;
    let allOtherPrice = otherQuantity * otherPrice;
    
    let totalPrice = allShirtPrice + allPantPrice + allShowPrice + allOtherPrice;
    if( totalPrice > 10000){
        // 5% discountPrice
        let discountPrice = (totalPrice * 5) / 100;
        let price = Math.ceil(totalPrice - discountPrice);
        return price;

    }
    
}


let price = shoppingPrice(2,3,4,7)
console.log('Pay Bill:', price);
