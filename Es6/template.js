let first = 'Sabbir';
let second = 'Hasan';

let fullName = `My name is ${first} ${second}`;


function createBtn(text = 'click me', color = 'blue'){
    return ` <button style ="background: ${color}" > ${text}</button> `
}

console.log(createBtn())