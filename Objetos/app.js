//Metodo 1

const cliente = {
    nombre: 'juan',
    saldo: 200,
    tipoCliente: function(){
        let tipo;

        if(this.saldo > 1000){
            tipo = 'Gold'
        }else{
            tipo = 'silver'
        }
        return tipo;
    }

}

console.log(cliente.tipoCliente());

//Metodo 2

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function(){
        let tipo;
        if(this.saldo > 100){
            tipo = "Gold";
        }else{
            tipo = "Bronze";
        }
        return tipo;
    }
}

const p1 = new Cliente("Juan", 50);
console.log(p1.tipoCliente());