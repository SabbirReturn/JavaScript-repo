let weight = 81;
let height = 1.75;
let bmi = parseFloat(weight/(height*height));
let category;
if(bmi<18.5){
    category = 'underweight'
}
else{
    if(bmi>=18.5 && bmi<=24.9){
        category = 'You are normal'
    }
    else{
        if(bmi>=25 && bmi<=29.9){
            category = 'You are overweight'
        }
        else{
            category = 'You are obese'
        }
    }
}
console.log('Your BMI:' +bmi.toFixed(2))
console.log('Your Category:' +category)