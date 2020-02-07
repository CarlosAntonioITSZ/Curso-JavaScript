var newLi=document.createElement("li"); //CREANDO ELEMENTO
var cont=document.createTextNode("Soy nodo creado y añadido por JS"); //CREANDO CONTENIDO

newLi.appendChild(cont);//AÑADIENDO EL CONENIDO AL ELEMENTO

var ol=document.getElementById("list"); //OBTENIENDO EL ELEMENTO AL QUE AÑADIREMOS EL NUEVO NODO
var primerElemento=document.getElementsByTagName("li")[0];//OBTENIENDO EL PRIMERO ELEMENTO
ol.insertBefore(newLi,primerElemento);//AÑADIENDO NUESTRO NUEVO ELEMENTO EN LA PRIMERA POSICION

//-----------------------------------//

//MODIFICANDO ELEMENTOS DEL DOM
var inf=document.getElementsByTagName("li")[2]; 
inf.innerHTML="Me <b>modificaron</b>";

//-----------------------------------//

//REMPLAZANDO ELEMENTOS DEL DOM
var newNodo = document.createElement("li");//
var cont2 = document.createTextNode("Lo he remplazado");
newNodo.appendChild(cont2);

var eliminar=document.getElementsByTagName("li")[3]; //CUAL QUEREMOS REMPLAZAR?

ol.replaceChild(newNodo,eliminar);

//-----------------------------------------//

//ELIMINANDO ELEMENTOS DEL DOM
var eliminar2=document.getElementsByTagName("li")[1]; //CUAL QUEREMOS ELIMINAR
ol.removeChild(eliminar2);