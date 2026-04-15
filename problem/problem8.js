let peoples = [
    {name:'Meena', age:20},
    {name:'Rina', age:15},
    {name:'Suchona', age:22}
]

let total = peoples.reduce((previous,current)=> previous + current.age,0)
// console.log(total)

function totalAge(peoples){
    let sum =0;
    for(let people of peoples){
        sum = sum + people.age
    }
    return sum
}
let total1 = totalAge(peoples)
// console.log(total)

function argumentsLength(...num){
    return num.length
}
let ans = argumentsLength([11])
// console.log(ans)
console.log(ans)