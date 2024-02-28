const user = {
    name: 'Michael',
    age: 25,
    country: 'USA',
    occupation: 'Engineer'
}

console.log(user.name)
console.log(user.occupation)

//constructor function

function Car(brand,model,price){
    this.brand = brand;
    this.model = model;
    this.price = price;
}

const c1 = new Car("BMW","520d",10000)
const c2 = new Car("Audi","Q7",15000)
console.log(c1.brand + " "+ c1.model+" "+c1.price)
console.log(c2.brand + " "+ c2.model+" "+c2.price)

//class style

class Customer{
    constructor(name,product){
        this.name = name
        this.product = product
    }

    addToCart(){
        console.log(this.product+" added to cart")
    }
}

//instance of the class
const cust1 = new Customer("Naveen","Apple macbook pro")
cust1.addToCart()

//Object.create()

const employeePrototype = {
    printInfo(){
        console.log("Hello, Employee name is "+this.name)
    }
}

const e1 = Object.create(employeePrototype)
e1.name = "Tom";
e1.printInfo()

//Using factory functions: return an object
function CreateDep(deptName, HOD){
    return {
        deptName: deptName,
        HOD: HOD,
        printInfo(){
            console.log("Hello, Dept name is "+this.deptName+" and HOD is "+this.HOD)
        }
    }
}

const dept1 = CreateDep("Physics","H C Verma")
const dept2 = CreateDep("Maths","R C Sharma")

dept1.printInfo()
dept2.printInfo()



