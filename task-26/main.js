let num = 123;

let sum = 0;

let i = 0;

while (i < 2){
    let lastDigit = num%10;
    sum = sum + lastDigit;
    num = num - lastDigit / 10;
    i++
}

console.log(sum);