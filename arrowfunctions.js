const square = num => num * num
console.log(square(5))

const message = () => 'Hello Js'
console.log(message())

const sum = (a,b) => a+b
console.log(sum(6,8))

const getFullName = person => person.firstName+" "+person.lastName

const person = {
    firstName: "Naveen",
    lastName: "Automation Labs"
}

const fullName = getFullName(person)
console.log(fullName)

const greet = (username='guest',age=0) => "Hello, "+username+"! you are "+age+" years old"
console.log(greet())

const sumNew = (...numbers) => numbers.reduce((acc, num) => acc+num, 0)
console.log(sumNew(1,2,3,4,5))

const browserInfo = (browser='chrome', ...details) => {
    console.log(`Browser: ${browser}`)
    console.log(`other details:`, details)
}

browserInfo()
browserInfo('firefox','115.11','mozilla','headless')

//max number using Math

const maxValue = (a,b,c) => {
    return Math.max(a,b,c)
}

console.log(maxValue(10,20,30))