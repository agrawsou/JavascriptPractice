const name = "Sourabh"

//backticks => ``

const a = 10;
const b = 20;

const result = `the addition of ${a} and ${b} is ${a+b}`
console.log(result)

function getXpath(name){
    return `//input[@id='${name}']`
}

console.log(getXpath('Tom\'s'))