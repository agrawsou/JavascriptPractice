//Case 1 : f1,f2,f3 --> resolved
const function1 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Data from function 1")
        }, 2000);
    })
}

const function2 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Data from function 2")
        }, 2000);
    })
}

const function3 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Data from function 3")
        }, 2000);
    })
}

Promise.all([function1(),function2(),function3()]).then((dataArray) => {
    console.log("All data from different functions : " + dataArray)
})
.catch(error => {
    console.error("Error in promise: " + error)
})

//Case 2 : f1 --> resolved, f2 --> rejected

const getData = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Data from get data")
        }, 2000);
    })
}

const getError = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Error : Data is not available from getError")
        }, 2000);
    })
}

Promise.all([getData(),getError()]).then((dataArray) => {
    console.log("All data fetched : " + dataArray)
})
.catch(error => {
    console.error("Error in promise: " + error)
})