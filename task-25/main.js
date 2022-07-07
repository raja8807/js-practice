let num = 0;
sum = 0;

while(num != 0){
    lastDigit = num%10;
    sum = (sum*10) + lastDigit;
    num = (num - lastDigit) / 10
}

console.log(sum)

