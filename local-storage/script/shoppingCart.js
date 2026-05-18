let addProduct = ()=>{
    let productField = document.getElementById('ProductName')
    let quantityField = document.getElementById('quantity')
    let product = productField.value;
    let quantity = quantityField.value;
    // console.log(product,quantity)
    productField.value = '';
    quantityField.value = '';
    displayShow(product, quantity);
    savedLocalStorageToCart(product,quantity)
}

let displayShow = (product,quantity)=>{
    let productContainer = document.getElementById('productContainer')
    let li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li)
}

let getStoredCart = ()=>{
    let cart = {};
    let storCart = localStorage.getItem('cart');
    if(storCart){
        cart = JSON.parse(storCart)
    }
    return cart
}


let savedLocalStorageToCart = (product,quantity)=>{
    let cart = getStoredCart();
    cart[product] = quantity
    let cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified)
}

let displayShowLocalStorage = ()=>{
    let savedCart = getStoredCart();
    for(let product in savedCart){
        let quantity = savedCart[product]
        displayShow(product,quantity)
    }
}
displayShowLocalStorage();