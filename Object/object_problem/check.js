let person1 = {
    name:'Md Sabbir',
    age:27,
    profession:'Developer',
    isMarried: true,
}

let person2 = {
    name:'Hasan',
    age: 25,
    profession: 'developer',
    isMarried: false,
}


let persons = [person1,person2];

for(let person of persons){
    if(person.isMarried===false){
        console.log(`${person.name} you are join in my Office`)
    }
}