let first = 'Sabbir';
let second = 'Hasan';

let fullName = `My name is ${first} ${second}`;
// console.log(fullName)


function createBtn(text = 'click me', color = 'blue'){
    return ` <button style ="background: ${color}" > ${text}</button> `
}
console.log(createBtn())