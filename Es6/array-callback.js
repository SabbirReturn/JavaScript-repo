

let handlers = [
    function(name){
        console.log('Good Morning',name)
    },
    function(name){
        console.log('Good evening',name)
    }
]
function greeting(greet,name){
    greet(name)
}

greeting(handlers[0],'sabbir')