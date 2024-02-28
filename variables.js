// var variable
// scope  : var
// locally or globally

var x=10;
function test(){
    var y = 20;
}
console.log(x)

var pop = "hi js"
function rel(){
    var top = "hello js"
    console.log(pop)
    console.log(top)
}
rel()