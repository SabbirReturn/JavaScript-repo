let checkEvenName = (friends)=>{
    let evenArray = []
    let oddArray = []
    for(let friend of friends){
        if(friend.length % 2 ===0){
            evenArray.push(friend)
        }
        else{
            oddArray.push(friend)
        }
    }
   return [evenArray, oddArray]
}
// let friendName = ['sabbir','hasan','robin','misu','haque','oysi']
// console.log(checkEvenName(friendName))
let friendName = ['sabbir','hasan','robin','misu','haque','oysi']
console.log(checkEvenName(friendName))