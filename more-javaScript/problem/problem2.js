let delayedGreeting =(name,delayTime)=>{
    setTimeout(()=>{
        console.log(`Hello, ${name}`)
    },delayTime)
}
delayedGreeting('Sabbir', 2000);