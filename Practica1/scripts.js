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
        var icon = document.createElement("p");
        icon.setAttribute("class","icono"); 
        var conntenidoIcono = document.createTextNode("-");
        var nuevaTarea = document.createElement("li");

        var contenido = document.createTextNode(formulario.tarea.value);


        if (comprobarInput() == false){
            return false;
        }
        

        icon.appendChild(conntenidoIcono);



        icon.addEventListener("click", function(){
            lista.removeChild(nuevaTarea);
        });



        nuevaTarea.appendChild(contenido);
        nuevaTarea.appendChild(icon);
        lista.appendChild(nuevaTarea);
        formulario.tarea.value="";
     
    }

    //Eventos
    boton.addEventListener("click",agregarTarea);

    for(i=0; i<iconX.length;i++){
        iconX[i].addEventListener("click",function(){
            lista.removeChild(document.getElementsByTagName("li")[0]);
        });
    }

}())