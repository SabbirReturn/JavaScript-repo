let addProduct= ()=>{
    let productField = document.getElementById('productName')
    let quantityField = document.getElementById('productQuantity')
    let product = productField.value;
    let quantity = quantityField.value;
    console.log(product,quantity);
    productField.value = '';
    quantityField.value = '';
    disPlayShow(product,quantity)
}

let disPlayShow = (product,quantity)=>{
    let productContainer = document.getElementById('container')
    let li = document.createElement('li')
    li.innerText = `${product} : ${quantity}`
    productContainer.appendChild(li);
}