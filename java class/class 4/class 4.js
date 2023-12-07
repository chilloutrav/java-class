// const = a variable that can't be changed

const pi = 3.14159;
let radius;
let circumferene;

radius = window.prompt("enter you radius for the circle");
radius = Number(radius);

circumferene = 2 * pi * radius;

console.log("the circumference is :", circumferene);

// Math = an intrinsic object that procides basic mathematics functionality and constants.

let x = 1.4;

x = Math.pow(x, 3);
/*Math.round(x);
Math.floor(x);
Math.ceil(x);
Math.pow(x, 3);
Math.sqrt(x);
Math.abs(x);
abs is absolute and it means distance from the origin
*/

console.log(x);