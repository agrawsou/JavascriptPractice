//Unique elements from array
const array = [1,2,3,2,4,5,1,3]

const unique = [...new Set(array)];

console.log(unique)

//Number to string
const num = 32;

const numStr = num.toString();

console.log(typeof numStr)

//Float to number
const floatNum = 3.76;
console.log(parseInt(floatNum));

//Swap two numbers
let a = 5;
let b = 10;

[a,b] = [b,a]

console.log(a,b)

//Object should have a specific property
const person = {
    name: "John",
    age: 28
}

console.log(person.hasOwnProperty('name'))

//Upper and lower case
const str = "Sourabh"

console.log(str.toUpperCase())
console.log(str.toLowerCase())

//Check if array contains specific value

const lang = ['java','javascript','python','ruby']

console.log(lang.includes('java'))

//Join elements
const words = ['Hello','Naveen']
const sentence =  words.join(' ')
console.log(sentence)

//Clone an array or objects

const marks = [10,20,30,40,50,66,70]

const cloneArray = [...marks]
console.log(cloneArray)
const cloneObj = {...person}
console.log(cloneObj)


//get current date and time

const currentDate = new Date();
console.log(currentDate.toLocaleString())

//Truncate array
const testing = [1,2,3,4,5,6,7,8,9]
testing.length = 3
console.log(testing)
