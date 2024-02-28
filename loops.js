for (let index = 0; index <= 100; index++) {
  console.log(index);
}

const arr = [1, 2, 3, 4, 5];
for (const key of arr) {
  console.log(key);
}

const user = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

for(const key in user){
    console.log(key + " : " + user[key])
}
