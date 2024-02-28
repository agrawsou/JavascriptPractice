function print(){
    console.log("hi")
}

print()

function print(name){
    console.log("hi "+name)
}

function print(name,age){
    console.log("hi "+name+" age "+age)
}

print("Naveen",20)

function displayBrowserInfo(browserName, browserVersion, remoteExecution){
    if(typeof(browserVersion) === 'number' && typeof(remoteExecution) === 'boolean'){
        console.log("Browser: "+browserName+", version: "+browserVersion+", remoteExec: "+remoteExecution)
    }else if(typeof(browserVersion) === 'number'){
        console.log("Browser: "+browserName+", version: "+browserVersion)
    }else{
        console.log("Browser: "+browserName)
    }
}

displayBrowserInfo('chrome',115,true)
displayBrowserInfo('chrome',115)
displayBrowserInfo('firefox')