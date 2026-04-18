let handlers = [
    function(name){
        console.log('Good Morning',name)
    },
    function(name){
        console.log('Good Evening',name)
    }
]
// handlers[0]('Sabbir');
// handlers[1]('Misu')

function greeting(handler,name){
    handler(name)
}

greeting(handlers[0],'Sabbir');
greeting(handlers[1],'Misu')