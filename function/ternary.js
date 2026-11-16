let gradingSystem = (marks)=>{
   return marks>80 ? 'A+' : 
        marks<80 && marks>=70 ? 'B+' :
        marks<70 && marks>=60 ? 'c+' : 'F'
}

let result = gradingSystem(50)
console.log(result);