let loadJoke = async()=>{
    let res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
    let datas = await res.json();
    let result = datas.joke
    disPlayShow(result)
}

let disPlayShow = (datas)=>{
    let container = document.getElementById('container')
    let description = document.createElement('div');
    description.innerText = datas;
    container.appendChild(description)
}

loadJoke();