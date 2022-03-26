function ejercicio(a, b, c){
    const suma = a + b + c;
    console.log(suma);
}

ejercicio(2, 4, 6);

class Coche{
    constructor(){
        this.Coche = 3;
    }
    SumarPuertas(param1) {
        this.Coche += param1;
    }
}
const Micoche = new Coche();
Micoche.SumarPuertas(1);
console.log(Micoche.Coche)
    
