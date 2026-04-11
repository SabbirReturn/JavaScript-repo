let products = [
    {name:'Mac', price:88000, ram:'16Gb'},
    {name:'Hp', price:78000, ram:'8Gb'},
    {name:'Dell', price:58000, ram:'16Gb'},
    {name:'Lenevo', price:48000, ram:'16Gb'}
]

let prices = products.map(product=>product.price);
let sum = 0;
for(let price of prices){
    sum = sum + price
}
// console.log(sum)
let total = products.reduce((sum,current)=>{
    return sum+ current.price
},0);
console.log(total)