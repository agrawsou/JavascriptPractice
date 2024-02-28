let str = "Sourabh"
console.log(str.length)
console.log(str.charAt(2))

console.log(str.toLowerCase())
console.log(str.toUpperCase())

console.log(str.slice(1,4))

console.log(str.substring(1,4))

console.log('Naveen'.concat(' Automation').concat(' Labs'))

let lang = "Java_JavaScript_Python"

let arr = lang.split('_')

for(let value of arr){
    console.log(value)
}

console.log("Dev Test Framework Dev".replace("Dev","JS"))
console.log("Dev Test Framework Dev".replaceAll("Dev","JS"))

console.log("    Dev Test Framework Dev    ".trimEnd())

console.log("Developer".padEnd(10,"*"))

console.log("Dev".padStart(10,"*"))

console.log("Javascript".startsWith("J"))
console.log("Javascript".endsWith("t"))
console.log("Javascript".repeat(3))