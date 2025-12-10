let products = [
    {id: 1, name: 'Xiami phone one night', price: 19000},
    {id: 2, name: 'macbook air m2', price: 19000},
    {id: 1, name: 'waltone Phone', price: 19000},
    {id: 1, name: 'mac night', price: 19000},
    {id: 1, name: 'samsung phone', price: 19000},
    {id: 1, name: 'mobile phone', price: 19000},
]

function getMAtched(products, search){
    let matched = []
    for(let product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched;
}

let matchProduct = getMAtched(products, 'phone');
console.log(matchProduct)