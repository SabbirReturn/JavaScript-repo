

function greeting(greet,name){
    greet(name)
}
function greetingMorning(name){
    console.log('Good morning',name)
}
function greetingEvening(name){
    console.log('Good evening',name)
}
greeting(greetingMorning,'Sabbir')