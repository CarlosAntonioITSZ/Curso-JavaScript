(function(){
    var formulario=document.getElementById("formulario");
    
    var validarNombre = function(e){
        if (formulario.nombre.value==0){
            alert("Introduzca un nombre");
            e.preventDefault();
        }
    }

    var validarSexo = function(e){
        if(formulario.sexoH.checked == false || formulario.sexoH.checked == false){
            alert("Seleccione un sexo");
            e.preventDefault();
        }
    }
    
    var validarTerminos = function(e){
        if (formulario.terminos.checked == false){
            alert("Acepte los terminos");
            e.preventDefault();
        }
    }

    var enviar=function(e){
        validarNombre(e);
        validarSexo(e);
        validarTerminos(e);
    }

    formulario.addEventListener("submit",enviar);
}())