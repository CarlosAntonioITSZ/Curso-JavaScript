class Cliente{
    constructor(nombre, apellido, saldo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }

    imprimirSaldo(){
        return `Hola ${this.nombre} tu saldo es de ${this.saldo}`;
    }
}

class Empresa extends Cliente{
    constructor(nombre,apellido,saldo,ubicacion){
        super(nombre,apellido,saldo);
        this.ubicacion = ubicacion;
    }
}


const cliente1 = new Cliente('Carlos','Antonio',1000);
console.log(cliente1.imprimirSaldo());

const empresa1 = new Empresa('Bimbo','ap',20000,'Mexico');
console.log(empresa1.imprimirSaldo());