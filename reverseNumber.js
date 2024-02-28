let num = 12345
let revNum = 0;

while(num>0){
    revNum = revNum*10 + (num % 10);
    num = parseInt(num/10);
}

console.log(revNum)