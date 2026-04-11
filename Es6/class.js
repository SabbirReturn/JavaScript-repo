class product{
    constructor(name,price){
        this.name = name;
        this.price =price;
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}

let lenevo = new product('Lenevo', 48000)
lenevo.speak('Oba kita kou')
// console.log(lenevo)


class teacher{
    constructor(name,subject){
        this.name = name;
        this.subject = subject
    }
    lecture(){
        console.log('sir is teaching physics')
    }
}


let tapan = new teacher('Sahjahan Tapan','Physics');
tapan.lecture()
console.log(tapan)