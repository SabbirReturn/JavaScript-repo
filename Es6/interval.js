let num = 0;
let callId =setInterval(()=>{
    num++
    // console.log(callId,num)
    if(num>7){
        clearInterval(callId);
    }
    console.log(callId,num)
},2000)