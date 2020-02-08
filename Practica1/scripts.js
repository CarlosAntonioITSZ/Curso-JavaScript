(function(){
    //Variables
    var formulario=document.getElementById("formulario");
    var lista=document.getElementById("lista");
    var iconX=document.getElementsByClassName("icono");
    var boton=document.getElementById("btn");

    //Funciones

    var comprobarInput = function(){
        if (formulario.tarea.value==""){
            alert("Agrege una tarea");
            return false;
        }  
    }

    var agregarTarea = function(){
        var icon = document.createElement("p"); //CREANDO UN NUEVO ICONO 
        icon.setAttribute("class","icono"); //AÑADIENDO LA CLASE ICONO  A NUESTRO NUEVO ICONO
        var conntenidoIcono = document.createTextNode("-"); //AÑADIMOS EL CONTENIDO QUE TENDRA NUESTRO ICONO
        icon.appendChild(conntenidoIcono); // AGREGAMOS EL CONTENIDO DEL ICONO  A NUESTRO ICONO


        var nuevaTarea = document.createElement("li");//CREAMOS UNA NUEVA TAREA
        var contenido = document.createTextNode(formulario.tarea.value);//AÑADIMOS CONTENIDO A LA TAREA


        if (comprobarInput() == false){//COMPROBAMOS QUE EL USUARIO HAYA INGRESADO ALGUNA TAREA, DE NO SE ASI NO SE PODRA CONTINUAR 
            return false;
        }
        
        icon.addEventListener("click", function(){
            lista.removeChild(nuevaTarea);
        });

        nuevaTarea.appendChild(contenido); //AGREGAMOS EL CONTENIDO A NUESTRA TAREA
        nuevaTarea.appendChild(icon);//AGREGAMOS EL ICONO A NUESTRA TAREA
        lista.appendChild(nuevaTarea);//AGREGAMOS LA NUESTRA TAREA A LA LISTA
        formulario.tarea.value=""; //DEJANDO EL INPUT VACIO
     
    }

    //Eventos
    boton.addEventListener("click",agregarTarea);

    for(i=0; i<iconX.length;i++){
        iconX[i].addEventListener("click",function(){
            lista.removeChild(document.getElementsByTagName("li")[0]);
        });
    }

}())