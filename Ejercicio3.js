class Persona{
    constructor(){
        this.edad = 23;
        this.nombre = "Raquel";
        this.telefono = 600000000;
    }
Setedad (edad){
    this.edad = edad;
}
Getedad(){
    return this.edad;
}
Setnombre (nombre){
    this.nombre = nombre;
}
Getnombre(){
    return this.nombre;
}
Settelefono (telefono){
    this.telefono = telefono;
}
Gettelefono(){
    return this.telefono;
}
}
const persona = new Persona();
persona.Getedad();
persona.Getnombre();
persona.Gettelefono();
console.log(persona);