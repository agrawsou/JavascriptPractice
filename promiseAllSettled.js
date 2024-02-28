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

Promise.allSettled([getData(),getError()]).then(results => {
    results.forEach(result => {
        if(result.status === 'fulfilled'){
            console.log("value: ",result.value)
        }else{
            console.error("reason for rejection ",result.reason)
        }
    })
})