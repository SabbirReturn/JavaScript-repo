function tellJoke(){
    console.log('Message')
}

let jokeInterval = setInterval(()=>{
    tellJoke()
}, 2000)

setTimeout(()=>{
    clearInterval(jokeInterval)
},10000)