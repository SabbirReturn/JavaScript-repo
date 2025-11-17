function refine(nums){
    let evenNumber = [];
    let oddNumber = [];
    for(let num of nums){
        if(num % 2===0){
            evenNumber.push(num)
        }
        else{
            oddNumber.push(num)
        }
    }
    // return{
    //     even: evenNumber,
    //     odd: oddNumber
    // }
    // return['even:',evenNumber, 'oddNumber',oddNumber]
    return[`Even: ${evenNumber}, Odd: ${oddNumber}`]
}

let numbers = refine([1,2,3,4,5,6,7,8,9,10])
console.log(numbers);