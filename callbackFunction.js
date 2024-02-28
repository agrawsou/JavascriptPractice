//basic callback

function greet(name, callback){
    console.log('Hello ' + name)
    callback();
}

function welcome(){
    console.log('welcome!!!')
}

greet('Naveen',welcome);

//callback function with async

function printInfo(name, callback){
    setTimeout(() => {
        console.log('printing info for '+ name)
        callback("plz call me back")
    },5000)

}

function displayMessage(message){
console.log(message)
}

printInfo("Lisa",displayMessage)