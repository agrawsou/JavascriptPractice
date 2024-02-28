async function f1(){
    console.log("this is async function without await")
    return 42
}

// f1().then(result => {
//     console.log(result)
// })

async function f2(){
    console.log("this is async function without await and with error")
    throw new Error("this is my error")
}

// f2().catch(error => {
//     console.log(error)
// })

function getInfo(){
    return new Promise((resolve,reject) => {
        const random = Math.random();
            setTimeout(() => {
                if(random<0.5){
                    resolve(random)
                }else{
                    reject(new Error('wrong value received'))
                }
            }, 2000)
    })
}

async function getNumberInfo(){
    try{
    const result = await getInfo();
    console.log("Result: ", result)
    }catch(error){
        console.log("Error: ", error)
    }
}

getNumberInfo()