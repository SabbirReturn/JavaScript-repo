let sentence = ' I am a web developer';
let reverse = ''
for(let i = 0; i<sentence.length; i++){
    let letters = sentence[i];
    reverse = letters + reverse;
}
// console.log(reverse) 


let rev = sentence.split('').reverse().join("")
console.log(rev)