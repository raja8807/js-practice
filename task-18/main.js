let num1 = 25;
let num2 = 90;
let num3 = 73;

let l;
let m;
let s;

if (num1 < num2 && num1 < num3){
    s = num1;
}else if (num2 < num1 && num2 < num3){
    s = num2;
}else{
    s = num3;
}

if (num1 > num2 && num1 > num3){
    l = num1;
}else if (num2 > num1 && num2 > num3){
    l = num2;
}else{
    l = num3;
}

m = (num1+num2+num3) - (l+s)

console.log("The ascending order is",s,m,l)
console.log("The descending order is",l,m,s)