var NumeroIf = 6;
if (NumeroIf < 0 ){
    console.log("El número es negativo")
}
else if (NumeroIf > 0){
    console.log("El número es positivo")
}
else{
    console.log("El resultado es 0")
}

var numeroWhile = -3;
while (numeroWhile < 3){
 numeroWhile += 1;
 console.log(numeroWhile)
}

do {
    numeroWhile += 1;
    console.log(numeroWhile)
} while (numeroWhile < 4);

var numeroFor = 0;
for (numeroFor; numeroFor <= 3; numeroFor++){
    console.log(numeroFor)
}

var estacion = "primavera";
switch(estacion){
    case "primavera":
        console.log(estacion);
        break;
    case "verano":
        console.log(estacion);
        break;
    case "otoño":
        console.log(estacion);
        break;
    case "invierno":
        console.log(estacion);
        break;
    default:
        console.log("No es una estación");
        break;
}