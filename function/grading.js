let gradingSystem = (marks)=>{
    if(marks>=80){
        return 'A+'
    }
    else{
        if(marks<80 && marks>=70){
            return 'B+'
        }
        else{
            if(marks<70 && marks>=60){
                return 'c+'
            }
            else{
                return 'F+'
            }
        }
    }
}



let result = gradingSystem(75)
console.log(result)