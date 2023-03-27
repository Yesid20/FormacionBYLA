let nombr = prompt("Ingrese el nombre del estudiante: ");
let notic = parseInt(prompt("Ingrese su primer nota: "));
let notic2 = parseInt(prompt("Ingrese su segunda nota: "));
let notic3 = parseInt(prompt("Ingrese su tercer nota: "));
let notic4 = parseInt(prompt("Ingrese su cuarta nota: "));
let prome = (notic + notic2 + notic3 + notic4)/4;
if(notic>notic2 && notic>notic3 && notic>notic4){
    console.log("La máxima nota es: "+ notic);
}else if(notic2>notic && notic2>notic3 && notic2>notic4){
    console.log("La máxima nota es: "+ notic2);
}else if(notic3>notic && notic3>notic2 && notic3>notic4){
    console.log("La máxima nota es: "+ notic3);
}else if(notic4>notic && notic4>notic2 && notic4>notic3){
    console.log("La máxima nota es: "+ notic4);
}
 
if(notic<notic2 && notic<notic3 && notic<notic4){
    console.log("La mínima nota es: "+ notic);
}else if(notic2<notic && notic2<notic3 && notic2<notic4){
    console.log("La mínima nota es: "+ notic2);
}else if(notic3<notic && notic3<notic2 && notic3<notic4){
    console.log("La mínima nota es: "+ notic3);
}else if(notic4<notic && notic4<notic2 && notic4<notic3){
    console.log("la mínima nota es: "+ notic4);
}

console.log("El nombre del estudiante es: "+ nombr);
console.log("El promedio fue: "+ prome);
