var newDiv=document.createElement("div");
newDiv.setAttribute("class","rojo");

var main=document.getElementById("principal");
var referencia=document.getElementsByTagName("div")[0];

//newDiv.classList="azul";
main.insertBefore(newDiv,referencia);