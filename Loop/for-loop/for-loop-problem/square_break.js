for(let i=1; i<100; i++){
    if(Number.isInteger(Math.sqrt(i))){
        console.log(`First square number found: ${i}`);
        break
    }
    console.log(i)
}