let getAge = (person)=> person.age;
let student = {
    name: 'Sabbir Hasan',
    age: 24,
}
let age = getAge(student);
// console.log(age)


let getThird = (number)=> number[2]
let numbers = [2,1,4,5,6,7]
let third = getThird(numbers)
// console.log(third)
const obj = {
  name: "Sabbir",
  greet: function () {
    console.log(this.name)
  }
}
// obj.greet() // Sabbir

let object = {
    name: 'Sabbir Hasan',
    greet : function(){
        return this.name
    }
}

console.log(object.greet())

