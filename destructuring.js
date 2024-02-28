// const numbers = [1,2,3,4,5]

// const [a,b,c,d] = numbers;
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// const lang = ["Javascript","Java","Python","Ruby","Go"]

// const[p,q,...testLang] = lang

// console.log(p)
// console.log(q)
// console.log(testLang)

// const user = {
//     firstName: "Tom",
//     lastName: "Smith",
//     age: 30
// }

// const {firstName, lastName, city="LA", age} = user
// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(city)

// function printUserName(person){
// console.log(person.firstName+' '+person.lastName)
// }

// const person = {
//     firstName: "John",
//     lastName: "Doe"
// }

// printUserName(person)

function printUserName({firstName}){
    console.log(firstName)
    }

    const person = {
        firstName: "Testing",
        lastName: "Automation"
    }

    printUserName(person)