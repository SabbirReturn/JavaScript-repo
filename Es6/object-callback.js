let handler ={
    morning: function(name){
        console.log('Good Morning',name)
    },
    evening: function(name){
        console.log('Good Evening', name)
    }
}

function greeting(greet,name){
    greet(name)
}
greeting(handler.morning,'Sabbir');
greeting(handler.evening,'Misu')