let num1 = 75;
let num2 = 61;
let num3 = 97;
let num4 = 27;

let l;
let m;
let s;

let m1;
let m2;

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

if(num4 > l){
    m2=l;
    m1=m;
    l=num4;
}else if(num4 < l && num4 > m && num4 > s){
    m1 = m;
    m2 = num4;
}else if(num4 < l && num4 < m && num4 > s){
    m2 = m;
    m1 = num4;
}else{
    m2 = m;
    m1 = s;
    s = num4;
}

console.log("The ascending order is",s,m1,m2,l);
console.log("The descending order is",l,m2,m1,s);






