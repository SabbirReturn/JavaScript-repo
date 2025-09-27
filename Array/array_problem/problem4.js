let fruits =['apple','orange','banana','mango','papaya'];
let nums = [];
let age = 25;

// console.log(Array.isArray(fruits))
// console.log(Array.isArray(nums))
// console.log(Array.isArray(age));

if(Array.isArray(fruits)){
    console.log('Variable is an Array')
}
else{
    console.log('Variable is not Array')
}

Array.isArray(age) ? console.log('Variable is an Array') : console.log('Variable is not array')