// *  structure
//  * condition ? when condition is true : when condition is false




let age = 18;
// if(age<=18){
//     console.log('Vote dao')
// }
// else{
//     console.log('Ghumai jao')
// }

// age<=1 ? console.log('Vote dao') : console.log('Ghumai jao')


let price = 1004;
let isLeader = true;
// if( price>500){
//     let discount = price * 2/100;
//     let pay = price - discount;
//     console.log(pay)
// }
// else{
//     console.log(price)
// }

// price= price>500 ? price - (price * 2/100) : price
// console.log(price)

// if( isLeader === true){
//     if(price>1000){
//         price = price /2
//     }
//     else{
//         price = 0
//     }
// }
// else{
//    price= price + 100;
// }
// console.log(price)

// price = isLeader === true ?  (price>1000) ? price/2 : 0 : price + 100;
price = isLeader? 
            price>1000 ? price /2 : 0
            : price+100;
console.log(price);