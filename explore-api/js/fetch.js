let url = 'https://jsonplaceholder.typicode.com/todos/1'
function loadData(){
    fetch(url)
    .then(resp => resp.json())
    .then(data => console.log(data))
}
