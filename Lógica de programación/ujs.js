var a = parseInt(prompt("Ingrese la hora exacta: "));
if(a >0 && a <= 12){
    console.log("Está en horario de la mañana(AM)");
}else if(a >=13 && a<=24){
    console.log('Está en horario de la tarde o noche(PM)');
}else{
    console.log("No hay horas negativas");
}
