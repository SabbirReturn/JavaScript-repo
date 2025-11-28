let mobiles = [
    {name:'samsung', ram:'8gb', price:150000, camera:'12mp'},
    {name:'iphone', ram:'8gb', price:130000, camera:'12mp'},
    {name:'motorala', ram:'8gb', price:50000, camera:'12mp'},
    {name:'xaomi', ram:'8gb', price:30000, camera:'12mp'},
    {name:'nothing', ram:'8gb', price:40000, camera:'12mp'}
]

function chepestPhone(phones){
    let chepPricePhone = phones[0]
    // console.log(chepPricePhone)
    for(let phone of phones){
        if(chepPricePhone.price>phone.price){
            chepPricePhone = phone
        }
    }
    return chepPricePhone
}

let phone = chepestPhone(mobiles)
console.log(phone)