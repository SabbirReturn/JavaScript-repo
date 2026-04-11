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
bus1.using('desel')
console.log(bus1)
console.log(car1)