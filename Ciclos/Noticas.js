can=0;
cant=0;
for (let i = 0; i<5; i++){
    let notas = parseInt(prompt("Ingrese sus notas finales: "))
    if(notas>=3){
        can++;
    }else{
        cant++;
    }
}
console.log("Las notas mayores a 3 fueron: "+ can);
console.log("Las notas menores a 3 fueron: "+ cant);
