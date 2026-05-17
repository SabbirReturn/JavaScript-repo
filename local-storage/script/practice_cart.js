let addProduct= ()=>{
    let productField = document.getElementById('productName')
    let quantityField = document.getElementById('productQuantity')
    let product = productField.value;
    let quantity = quantityField.value;
    console.log(product,quantity);
    productField.value = '';
    quantityField.value = '';
    disPlayShow(product,quantity)
    saveLocalStorage(product,quantity)
}

let disPlayShow = (product,quantity)=>{
    let productContainer = document.getElementById('container')
    let li = document.createElement('li')
    li.innerText = `${product} : ${quantity}`
    productContainer.appendChild(li);
}
    let getProductCart = ()=>{
        let cart = {}
        let getProduct = localStorage.getItem('cart');
        if(getProduct){
            cart = JSON.parse(getProduct)
        }
        return cart;
    }

let saveLocalStorage = (product,quantity)=>{
    let cart = getProductCart();
    cart[product] = quantity;
    let cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified)
    
}