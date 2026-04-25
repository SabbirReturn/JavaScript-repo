function user(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(data=>displayShow(data))
}
function displayShow(posts){
    for(let post of posts){
        console.log(post)
        let postContainer = document.getElementById('post-container')
        let divContainer = document.createElement('div')
        divContainer.classList.add('post')
        divContainer.innerHTML =`
        <h1>user - ${post.userId}</h1>
        <h2>Id: ${post.id}</h2>
        <h3>Post: ${post.title}</h3>
        <p>Post description: ${post.body}</p>
        `

        postContainer.appendChild(divContainer)
    }
}
user();