(function(){
    var actualizarHora=function(){
        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();
    
        var pHoras = document.getElementById("horas"),
            pAMPM = document.getElementById("ampm"),
            pMinutos = document.getElementById("minutos"),
            pSegundos = document.getElementById("segundos"),
            pDiaSemana = document.getElementById("diaSemana"),
            pDia = document.getElementById("dia"),
            pMes = document.getElementById("mes"),
            pYear = document.getElementById("year");

        //SEMANA
        var Semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
        pDiaSemana.textContent = Semana[diaSemana];
        //DIA
        pDia.textContent=dia;
        //MES
        var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        pMes.textContent = meses[mes];
        //AÑO
        pYear.textContent = year;
        
        if(horas>=12){
            horas = horas - 12;
            ampm = "PM";
        }else{
            ampm = "AM";
        }

        if(horas == 0){
            horas = 12;
        }
        if(horas < 10){
            horas = "0" + horas;
        }
        if(minutos < 10){
            minutos = "0" + minutos;
        }
        if(segundos < 10){
            segundos = "0" + segundos;
        }
        pHoras.textContent = horas;
        pAMPM.textContent = ampm;
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;
    };

    actualizarHora();
    var intervalo = setInterval(actualizarHora,1000);
}())