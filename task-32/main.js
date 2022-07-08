let range = 20;
let x = 0;
let y = 1;
let z;

console.log(x);
console.log(y);

range = range-2;

for (i=1; i<=range; i++){
    z = x+y;
    x=y;
    y=z;
    console.log(z)
}