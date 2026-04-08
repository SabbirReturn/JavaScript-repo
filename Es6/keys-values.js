let person ={
    name:'Sabbir',
    age: 28,
    address:'Uttara sector 10'
}
delete person.age
// console.log(person)
let entries = Object.entries(person)
console.log(entries)

function keyValue(person){
    let keys = Object.keys(person)
    let values = Object.values(person);
    let result = []
    for(let i = 0; i<keys.length; i++){
        result.push(`${keys[i]} : ${values[i]}`)
    }
    return result
}

let ans = keyValue(person);
// console.log(ans)

// let entries = Object.entries(person);
// console.log(entries)

function valueKey(object){
    for(let [keys,values] of Object.entries(object)){
        return(`${keys} : ${values}`)
    }
}
// let result = valueKey(person);
let result = valueKey(person);
// console.log(result)