function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}
let watch = stopWatch();
// console.log(watch())
// console.log(watch())
// console.log(watch())
// console.log(watch())


function bankAccount(){ 
    let balance = 1000;
    return{
        getBalance: ()=> balance,
        deposit: (amount)=> balance += amount
    }
}
let acc = bankAccount();
// console.log(acc.deposit(500))
// console.log(acc.deposit(500))
console.log(acc.deposit(500))


