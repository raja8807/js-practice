let num = 17;

let count = 0;

for (let i = 1; i <= num; i++) {
    let r = num%i;
    if (r == 0){
        count++
    }
}

if(count == 2){
    console.log("The number", num , "is a prime number.")
}else{
    console.log("The number", num , "is not a prime number.")
}