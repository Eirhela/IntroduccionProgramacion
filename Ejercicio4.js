class Persona{
    constructor(){
        this.edad = 23;
        this.nombre = "Raquel";
        this.telefono = 600000000;
    }
}
class Cliente extends Persona{
    constructor(){
      super()
        this.credito = 1000
    }
}
const cliente = new Cliente();
console.log(cliente);

class Trabajador extends Persona{
    constructor(){
        super()
        this.salario = 1500;
    }
}
const trabajador = new Trabajador();
console.log(trabajador);