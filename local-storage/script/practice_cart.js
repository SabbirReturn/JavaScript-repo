let addProduct= ()=>{
    let productField = document.getElementById('productName')
    let quantityField = document.getElementById('productQuantity')
    let product = productField.value;
    let quantity = quantityField.value;
    console.log(product,quantity);
    productField.value = '';
    quantityField.value = '';
}