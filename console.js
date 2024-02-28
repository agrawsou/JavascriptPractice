const user = {
    name: "John",
    age: 34,
    city: "Bangalore",
    country: "India"
}

const user1 = {
    name: "Lisa",
    age: 38,
    city: "Pune",
    country: "India"
}

console.log(user)
console.table({user,user1})

console.time("print 1 to N values");
for (let index = 0; index < 10000; index++) {
    console.log(index)
}
console.timeEnd("print 1 to N values")

console.clear()

console.count("reset pwd")
console.count("reset pwd")
console.count("reset pwd")

let flag = false
console.assert(flag,'this is failed')

