function no_double(array){
    let unique = [];
    for(let item of array){
        if(unique.includes(item) === false){
            unique.push(item)
        }
    }
    let join = unique.join(' ')
    return join;
}

let friendName = ['sabbir','hasan','hasan','robin','sabbir','misu']
let uniqueArray = no_double(friendName)
console.log(uniqueArray)