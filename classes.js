class Car{

    constructor(name, price, model , color){
        this.name = name
        this.price = price
        this.model = model
        this.color = color
    }

    refuel(){
        console.log(this.name+" Car is refueled")
    }
}

const c1 = new Car("BMW",100,"520D","Black")
const c2 = new Car("Honda",20,"Civic","White")
console.log(c1.name+" "+c1.price+" "+c1.model+" "+c1.color)
console.log(c2.name+" "+c2.price+" "+c2.model+" "+c2.color)

c1.refuel()
c2.refuel()