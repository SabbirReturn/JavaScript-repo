

let actor = {
    title: 'Sabbir',
    age: 25,
    profession:'Acting'
}

let {title ,age, profession:prop,address='default' } = actor;
// console.log(prop)
// console.log(name,age,prop)


function numbers(){
    return [12,22,33,12]
}
let [first,second,...third] = numbers();
// console.log(first,second, third)
// console.log(numbers())


let person = {
    name:'Sabbir',
    address:{
        city:"Dhaka"
    }
}

let{address:{city:town, village ="Uttara"}} = person;
console.log(town, village);


const response = {
  data: {
    user: {
      name: "Sabbir",
      email: "test@gmail.com"
    }
  }
}

const { data:{user:{name, email}}} = response
// console.log(email);