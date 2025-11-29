let products = [
    {name:'Mackbook m2', price: 90000, quantity: 1},
    {name:'Display Protector', price: 2600, quantity: 2},
    {name:'Keyboard Protector', price: 1000,quantity: 3},
    {name:'Maltiplag', price: 7000, quantity: 5}
]

function getShoppingTotal(products){
    let total = 0;
    for(let product of products){
        let productPrice = product.price * product.quantity;
        total = total + productPrice;
        
    }
    return total
}

let price = getShoppingTotal(products)
console.log(price)