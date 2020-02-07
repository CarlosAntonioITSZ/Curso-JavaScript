
var newP= document.getElementById("p1");
newP.innerHTML="Me han cambiado";


var createP = document.createElement("p");
var cont = document.createTextNode("Soy un parrafo creado en JS");
createP.appendChild(cont);
document.body.appendChild(createP);