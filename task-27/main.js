let num = prompt("Enter the number");
let temp;
let lastDigit;
let p = 0;


temp=num;

while(temp!=0){
    lastDigit = temp%10;
    p = p+1;
    temp = (temp-lastDigit)/10;
}

temp = num;
let x = 0;

while(temp!=0){
    lastDigit = temp%10;
    x = x + (lastDigit**p)
    temp = (temp-lastDigit)/10
}

if (x == num){
    console.log("The number", num, "is an Amstrong Number");
}else{
    console.log("The number", num, "is not an Amstrong Number");
}