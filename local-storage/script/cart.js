let addCart = ()=>{
    let productField = document.getElementById('productName')
    let quantityField = document.getElementById('productQuantity')
    let productName = productField.value;
    let productQuantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';

    // console.log(productName,productQuantity);
    console.log(productName,productQuantity);
    disPlayShow(productName,productQuantity);
    saveProductLocalStorage(productName, productQuantity)
}

let disPlayShow = (productName,productQuantity)=>{
    let productContainer = document.getElementById('container')

    let li = document.createElement('li')
    li.innerText = `${productName} : ${productQuantity}`

    productContainer.appendChild(li);
}

let getStoredShoppingCard = ()=>{
    let cart = {}
    let storedCard = localStorage.getItem('cart')
    if(storedCard){
        cart = JSON.parse(storedCard);
    }
    return cart;
}


let saveProductLocalStorage = (productName,productQuantity)=>{
    let cart = getStoredShoppingCard();
    cart[productName] = productQuantity;
    let cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

let displayProductsFromLocalstorage = ()=>{
    let savedCart = getStoredShoppingCard();
    for(let product in savedCart){
        let quantity = savedCart[product];
        disPlayShow(product,quantity);
    }
}
displayProductsFromLocalstorage();