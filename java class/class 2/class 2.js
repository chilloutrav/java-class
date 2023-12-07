let bakchod;
bakchod = 20;

console.log(bakchod);

let username;

document.getElementById("Mybutton").onclick = function(){

    username = document.getElementById("Mytestbox").value;
    console.log(username);
    document.getElementById("Mylabel").innerHTML = "Yo Bro " + username;

}