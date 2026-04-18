
function greeting(greet,name){
    greet(name)
}
function greetingMorning(name){
    console.log('Good Morning',name)
}
function greetingEvening(name){
    console.log('Good Evening',name)
}
greeting(greetingMorning,'Sabbir')
greeting(greetingEvening,'Misu')