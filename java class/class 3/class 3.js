let age = window.prompt("how old are you? ");

age = Number(age);// this operator will convert string to a number format, this will help with arthmatic operation

age += 1;

console.log("Happy birthday! You are", age, "years old" ) 


let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("yo");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);