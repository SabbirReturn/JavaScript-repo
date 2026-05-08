let loadJoke = async()=>{
    let res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
    let data = await res.json();
    console.log(data)
}