let users = {
    name:'Sabbir Hasan',
    age: 27,
    address:function(){
        console.log(`${this.name} lives in Bheramara`)
    },
    isStudent: false,
    isEmployee: true
}
console.log(users)
let string = JSON.stringify(users);
console.log(string)
users.address()