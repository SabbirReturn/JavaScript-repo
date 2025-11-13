let computer={
    brandName :'Hp',
    processor: 'Ryzen 5',
    ssd:'256gb',
    ram:'8 gb'
}
// delete computer['ssd']
for(let property in computer){
    // console.log( property,computer[property])
}

let keys = Object.keys(computer);
for(let key of keys){
    // console.log(key);
    console.log(key,":" ,computer[key])
}