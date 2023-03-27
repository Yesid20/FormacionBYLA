let motor = (prompt("Ingresar marca de moto "));
let precio = parseInt(prompt("Ingresar valor de la moto "));
switch( motor ){
    case "Honda":
        console.log((precio*5)/100);
        break;
    case "Yamaha":
        console.log((precio*8)/100);
        break;
    case "Suzuki":
        console.log((precio*10)/100);
        break;
    default:
        console.log(motor + " esta marca no tiene descuento");
}