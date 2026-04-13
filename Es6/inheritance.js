class vehicle{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    using(oil){
        console.log(`Using ${oil}`)
    }
}

class bus extends vehicle{
    constructor(name,price,model){
        super(name,price);
        this.model = model;
    }
    
}

class car extends bus{
    constructor(name,price,model){
        super(name,price,model);
        // this.model = model
    }
}

let car1 = new car('Toyota',1200000,'2002')
let bus1 = new bus('Sb super Deluxe',6000000, 2022);
// bus1.using('desel')
// console.log(bus1)
// console.log(car1)
class animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talking(talk){
        console.log(`${this.name} is ${talk}`)
    }
}

class dog extends animal{
    constructor(name,age,price){
        super(name,age);
        this.price = price
    }
}

class bird extends animal{
    constructor(name,age,price){
        super(name,age);
        this.price = price
    }
}

let bird1 = new bird('Kokil','1 year', 23000);
// bird1.talking('kuhu kuhu')
bird1.talking('kuhu kuhu')
console.log(bird1)