function greeting(greet,name){
    greet(name)
}

let handlers = [
    function(name){
        console.log('Good Morning',name)
    },
    function(name){
        console.log('Good evening',name)
    }
]

greeting(handlers[0],'sabbir')