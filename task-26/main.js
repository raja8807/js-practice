let num = 123;
let sum = 0;


while (num != 0){
    let lastDigit = num%10;
    sum = sum + lastDigit;
    num = (num - lastDigit) / 10;
}

console.log(sum);