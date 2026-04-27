function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(res => res.json())
    .then(data => console.log(data))
}

let loadComment2 =async()=>{
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    let data = await res.json();
    console.log(data)
}