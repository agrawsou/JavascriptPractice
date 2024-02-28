let lang = ["Java","Python","JS"]

lang.push("Ruby","HTML")
console.log(lang)

let numbers = [1,2,3,4,5]
numbers.pop();
console.log(numbers)

let fruits = ["apple","banana","orange"]
let firstFruit = fruits.shift()
console.log(firstFruit)
console.log(fruits)

fruits.unshift("Tangarine")
console.log(fruits)
console.log(fruits.length)

//splice
let animals = ["dog","cat","fish","bird"]
animals.splice(1,1,'bear')
console.log(animals)

//slice
let pop = [1,2,3,4,5]
let newPop = pop.slice(1,4)
console.log(newPop)

let fr = ["apple","banana","orange"]
let num = [1,2,3,4]
let mixedArr = fr.concat(num)
console.log(mixedArr)

let color = ["red","green","blue","red"]
console.log(color.indexOf("red"))

//includes

let test = ["admin","cust","seller","vendor"]
console.log(test.includes("sourabh"))

//forEach

let n = [1,2,3,4,5,6,7]

n.forEach((e) => {
    console.log(e)
})

//every
let nu = [1,2,3,4,5]
let flag = nu.every((e) => e<10)
console.log(flag)

//some

let nur = [1,2,3,4,5]
let fg = nur.some((e) => e>20)
console.log(fg)

//find

let total = [1,2,3,7,9]
let fe = total.find((e)=>e%2==0)
console.log(fe)

//indexOf

let arr = ["apple","mango","banana","pear"]
console.log(arr.indexOf("mango"))

//lastIndexOf

let fru = ["apple","mango","banana","pear","mango"]
console.log(fru.lastIndexOf("mango"))

//reverse
let fruit = ["apple","mango","banana","pear","mango"]
console.log(fruit.reverse())

//sort
let product = ["macbook","imac","samsung","canon","123","Tshirt"]
console.log(product.sort())