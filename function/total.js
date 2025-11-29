let products = [
    {name:'Mackbook m2', price: 90000},
    {name:'Display Protector', price: 2600},
    {name:'Keyboard Protector', price: 1000},
    {name:'Maltiplag', price: 7000}
]

function getShoppingTotal(products){
    let sum = 0;
    for(let product of products){
        sum = sum + product.price
    }
    return sum;
}

let payBill = getShoppingTotal(products)
console.log('Pay Bill:',payBill)