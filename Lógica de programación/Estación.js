var a = parseInt(prompt("Ingrese el numero del mes: "));
if(a <= 3){
    console.log("La epoca es primavera");
}else if (a <= 6){
    console.log("La epoca es verano");
}else if (a <= 9){
    console.log("La epoca es otoño");
}else if (a <= 12){
    console.log("La epoca es invierno");
}else{
    console.log("El numero digitado está por fuera de los doce meses");
}