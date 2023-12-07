let a;
let b;
let c;

/*a = window.prompt("Enter side a");
a = Number(a);

b = window.prompt("Enter side b");
b = Number(b);;

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);

console.log(c);
*/

document.getElementById("done").onclick = function(){
    a = document.getElementById("TextA").value;
    a = Number(a);

    b = document.getElementById("Textb").value;
    b = Number(b);

    c = Math.pow(a, 2) + Math.pow(b, 2);
    c = Math.sqrt(c);

    //console.log(c);
    document.getElementById("cMy").innerHTML = "Side C: " + c;
}