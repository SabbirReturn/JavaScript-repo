let address = 'Uttara';
// let word = address.slice(0,3);
// console.log(word)


let name = 'Md Sabbir Hasan';
let alphabet = name.split(' ')
let fullName = alphabet.join('+')
// console.log(alphabet)
// console.log(fullName)


// practice


let fruits = ["apple", "banana", "cherry", "mango", "orange"];
let middleThreeFruits = fruits.slice(1,4)
// console.log(middleThreeFruits)

let text = "JavaScriptProgramming";
// let word = text.slice(4,10)
// console.log(word)

let sentence = "I love learning JavaScript every day";
let singleWord = sentence.split(' ')
let thirdWord = singleWord.slice(2,3)
// console.log(thirdWord)
// console.log(singleWord)

let date = "2025-11-09";
let singleDate = date.split('-')
let year = singleDate[0];
let month = singleDate[1];
let day = singleDate[2];
// console.log('Year:',year)
// console.log('Month:',month);
// console.log('Day:', day)
// console.log(singleDate)


let words = ["Frontend", "Developer", "Challenge"];
let fullSentence = words.join(' ')
// console.log(fullSentence)

let letters = ["H", "e", "l", "l", "o"];
let word = letters.join('')
console.log(word)