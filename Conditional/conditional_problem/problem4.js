let myScore = 82;
let friScore = 32;
if(myScore>80){
    if(friScore>80){
        console.log('Go for a lunch')
    }
    else{
        if(friScore<80 && friScore>=60){
            console.log('Good luck next time')
        }
        else{
            if(friScore<60 && friScore>=40){
                console.log('Message unseen')
            }
            else{
                console.log('Block your friend')
            }
        }
    }
}
else{
    console.log('Go to home and sleep and act sad')
}