let numbers = [11,22,33,44,55,66]

function doDouble(num){
    return num * 2;
}

let ans = numbers.map(doDouble);
// console.log(ans)

let output = numbers.map(num=>num*2);
// console.log(output);

let friends = ['sabbir','hasan','robin'];

let firstLetter = friends.map(friend=> friend[0])
console.log(firstLetter)