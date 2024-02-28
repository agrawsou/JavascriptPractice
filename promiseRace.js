const getData = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Data from get data")
        }, 1000);
    })
}

const getError = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Error : Data is not available from getError")
        }, 2000);
    })
}

Promise.race([getData(),getError()]).then(result => {
    console.log("Result : ", result)
})
.catch(error => {
    console.error("Error : ", error)
})