//map
let numbers = [1,2,3]

let doubleNumbers = numbers.map((e)=>e*2)
console.log(doubleNumbers)

let fahTemp = [32,86,104,212]

function fahToCel(fah){
    return (fah-32) * (5/9)

}

let celTemp = fahTemp.map(fahToCel)

console.log(celTemp)

//filter

let number = [1,2,3,4,5,6,7,8,9,10]

let evenNumber = number.filter((e) => e%2 === 0)

console.log(evenNumber)

let emp = [
    {name:"John",age:30,gender:"male"},
    {name:"Peter",age:55,gender:"male"},
    {name:"Bob",age:35,gender:"male"},
    {name:"Lisa",age:40,gender:"female"},
    {name:"Priya",age:25,gender:"female"}
]

let femaleEmpOver30 = emp.filter((emp) => {
    return emp.gender === "female" && emp.age > 30
})

console.log(femaleEmpOver30)

 //reduce

 let numb = [1,2,3,4,5] //15

 let sum = numb.reduce((acc,num) => acc+num,0)

 console.log(sum)

 //Max number in an array

 let top = [10,5,25,8,30,15]

 let max = top.reduce((max,num) => {
    if(num>max){
        return num
    }else{
        return max
    }
 },top[0])

 console.log(max)

 //cart : name,price

 let cartItems = [
    {name:"Jeans",price:500},
    {name:"Shirt",price:300},
    {name:"Shoes",price:1000},
    {name:"Cap",price:100},
    {name:"Tee",price:400}
 ]

 let totalPrice = cartItems.reduce((total, item) => total + item.price, 0)

 console.log(totalPrice)