function getEven(str){
    let size = str.length;
    if(size % 2===0){
        return true;
    }
    else{
        return false
    }
}

let useString = getEven('Dhaka');
// console.log(useString)


function getAge(object){
    let age = object['age']
    return age;
}
let details = getAge(
    person = {
        name: 'Md Sabbir Hasan',
        age: 78,
        address:'Uttara'
    }
)
console.log(details)