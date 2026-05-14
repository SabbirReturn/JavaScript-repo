let addCart = ()=>{
    let productField = document.getElementById('productName')
    let quantityField = document.getElementById('productQuantity')
    let productName = productField.value;
    let productQuantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';

    console.log(productName,productQuantity);
    disPlayShow(productName,productQuantity)
}

let disPlayShow = (productName,productQuantity)=>{
    let productContainer = document.getElementById('container')

    let li = document.createElement('li')
    li.innerText = `${productName} : ${productQuantity}`

    productContainer.appendChild(li);
}