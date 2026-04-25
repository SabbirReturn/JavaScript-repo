function users(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => displayUser2(users))
}
function displayUser2(users){
    let userContainer = document.getElementById('user-container')
    for(let user of users){
        console.log(user)
        let ul = document.createElement('ul')
        let li = document.createElement('li')
        li.innerText = user.name;
        userContainer.appendChild(ul);
        ul.appendChild(li)
    }
}


function loadData3(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=> displayUser3(data))
}
function displayUser3(datas){
    for(let data of datas){
        console.log(data.name)
    }
}